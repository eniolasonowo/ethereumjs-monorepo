import tape from 'tape'
import { Block } from '@ethereumjs/block'
import Blockchain from '@ethereumjs/blockchain'
import { Transaction } from '@ethereumjs/tx'
import { Address, BN, bnToHex } from 'ethereumjs-util'
import { FullSynchronizer } from '../../../lib/sync'
import { INVALID_PARAMS } from '../../../lib/rpc/error-code'
import { startRPC, createManager, createClient, params, baseRequest } from '../helpers'
import { checkError } from '../util'

const method = 'eth_estimateGas'

tape(`${method}: call with valid arguments`, async (t) => {
  const blockchain = await Blockchain.create({ validateBlocks: false, validateConsensus: false })

  const client = createClient({ blockchain, includeVM: true })
  const manager = createManager(client)
  const server = startRPC(manager.getMethods())

  const service = client.services.find((s) => s.name === 'eth')
  const { vm } = (service!.synchronizer as FullSynchronizer).execution
  await vm.stateManager.generateCanonicalGenesis()

  // genesis address with balance
  const address = Address.fromString('0xccfd725760a68823ff1e062f4cc97e1360e8d997')

  // contract:
  /*
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.7.4;
    
    contract HelloWorld {
        function myAddress() public view returns (address addr) {
            return msg.sender;
        }
    }
  */
  const data =
    '0x6080604052348015600f57600080fd5b50609d8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806326b85ee114602d575b600080fd5b6033605f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60003390509056fea2646970667358221220455a67424337c6c5783846576348cb04caa9cf6f3e7def201c1f3fbc54aa373a64736f6c63430007060033'

  // construct block with tx
  const gasLimit = 2000000
  const tx = Transaction.fromTxData({ gasLimit, data }, { freeze: false })
  tx.getSenderAddress = () => {
    return address
  }
  const parent = await blockchain.getLatestHeader()
  const block = Block.fromBlockData(
    {
      header: {
        parentHash: parent.hash(),
        number: 1,
        gasLimit,
      },
    },
    { calcDifficultyFromHeader: parent }
  )
  block.transactions[0] = tx

  // deploy contract
  let ranBlock: Block | undefined = undefined
  vm.once('afterBlock', (result: any) => (ranBlock = result.block))
  const result = await vm.runBlock({ block, generate: true, skipBlockValidation: true })
  const { createdAddress } = result.results[0]
  await vm.blockchain.putBlock(ranBlock!)

  // get gas estimate
  const funcHash = '26b85ee1' // myAddress()
  const estimateTxData = {
    to: createdAddress!.toString(),
    from: address.toString(),
    data: `0x${funcHash}`,
    gasLimit: bnToHex(new BN(53000)),
  }
  const estimateTx = Transaction.fromTxData(estimateTxData, { freeze: false })
  estimateTx.getSenderAddress = () => {
    return address
  }
  const { gasUsed } = await vm.copy().runTx({
    tx: estimateTx,
    skipNonce: true,
    skipBalance: true,
    skipBlockGasLimitValidation: true,
  })

  // verify estimated gas is accurate
  const req = params(method, [{ ...estimateTxData, gas: estimateTxData.gasLimit }, 'latest'])
  const expectRes = (res: any) => {
    const msg = 'should return the correct gas estimate'
    t.equal(res.body.result, bnToHex(gasUsed), msg)
  }
  await baseRequest(t, server, req, 200, expectRes)
})

tape(`${method}: call with unsupported block argument`, async (t) => {
  const blockchain = await Blockchain.create()

  const client = createClient({ blockchain, includeVM: true })
  const manager = createManager(client)
  const server = startRPC(manager.getMethods())

  // genesis address with balance
  const address = Address.fromString('0xccfd725760a68823ff1e062f4cc97e1360e8d997')

  const funcHash = '26b85ee1' // borrowed from valid test above
  const estimateTxData = {
    to: address.toString(),
    from: address.toString(),
    data: `0x${funcHash}`,
    gasLimit: bnToHex(new BN(53000)),
  }

  const req = params(method, [{ ...estimateTxData, gas: estimateTxData.gasLimit }, 'pending'])
  const expectRes = checkError(t, INVALID_PARAMS, '"pending" is not yet supported')
  await baseRequest(t, server, req, 200, expectRes)
})
