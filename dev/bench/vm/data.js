window.BENCHMARK_DATA = {
  "lastUpdate": 1642921994809,
  "repoUrl": "https://github.com/eniolasonowo/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c230e51439a8dc2f6bd358e43e933fc126e6986e",
          "message": "Common: add custom params for Optimism L2 (#1554)\n\n* Add custom params for Optimism L2\r\n\r\n* Note on London hardfork\r\n\r\n* Requested fixes\r\n\r\n* Edit note",
          "timestamp": "2021-11-05T09:29:24+01:00",
          "tree_id": "e8be74da857aa6c6e4b3ebdb86b196689519a395",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c230e51439a8dc2f6bd358e43e933fc126e6986e"
        },
        "date": 1636101264795,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21618,
            "range": "±3.93%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18977,
            "range": "±8.82%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20632,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19767,
            "range": "±5.58%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12123,
            "range": "±19.71%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18675,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "68 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "309988c2371782585e50015aa41d1e8600604e80",
          "message": "Common, Block: Add arrowGlacier HF (#1527)\n\n* common/vm: add arrowGlacier HF\r\n\r\n* common: fix tests\r\n\r\n* common: fix eip 4345 minimum hardfork\r\n\r\n* block: added ArrowGlacier difficulty tests\r\n\r\n* Common: added forkHash for ArrowGlacier HF\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-11-08T16:59:09+01:00",
          "tree_id": "e40d4faa1aad3cdabb60e64a7e7f44d784433359",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/309988c2371782585e50015aa41d1e8600604e80"
        },
        "date": 1636387422939,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 23100,
            "range": "±8.92%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 22461,
            "range": "±7.14%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422907",
            "value": 24040,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 17062,
            "range": "±14.65%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16811,
            "range": "±25.77%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422911",
            "value": 21366,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "69 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a54b3a40f9a2c9fef46e094a954b857bedb88f9",
          "message": "Common, Tx, Block, Blockchain, VM, Client: New Arrow Glacier Releases (#1555)\n\n* Common -> release: bumped version to v2.6.0, added CHANGELOG entry, updated upstream dependency versions, updated README\r\n\r\n* Common -> release: rebuild documentation\r\n\r\n* tx -> Release: bumped version to v3.4.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* Block -> release: bumped version to v3.6.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* Block -> release: rebuild documentation\r\n\r\n* blockchain -> release: bumped version to v5.5.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* VM -> release: bumped version to v5.6.0, added CHANGELOG entry, updated upstream dependency versions, updated README\r\n\r\n* client -> release: bumped version to v0.2, added CHANGELOG entry (TODO)\r\n\r\n* Rebuild package-lock.json file\r\n\r\n* client -> release: additional CHANGELOG work\r\n\r\n* client -> release: finalized CHANGELOG\r\n\r\n* fix: reinit vmexec's txCounter on every new block range executed\r\n\r\n* Apply suggestions from code review\r\n\r\n* update tx error debug log msg `accessList=num (size)` to accessListCount=num` (for increased clarity/readability)\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-11-09T08:59:51+01:00",
          "tree_id": "0324ab3d0be2d392140c4792e0d3343b7907fb52",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4a54b3a40f9a2c9fef46e094a954b857bedb88f9"
        },
        "date": 1636445112751,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21949,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19422,
            "range": "±8.50%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21208,
            "range": "±3.04%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20340,
            "range": "±5.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12135,
            "range": "±16.52%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18856,
            "range": "±3.80%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d0ba62c588381232d94b55a98684bb93e90785d",
          "message": "VM: Test Runner Improvements (#1560)\n\n* VM -> tests: added error message to tx runtime error in GeneralStateTestsRunner\r\n\r\n* VM -> tests: added basic execution time console output to state and blockchain tests\r\n\r\n* VM -> tests: simplify path call structure in test loader\r\n\r\n* VM -> tests: added new customTestsPath CLI option\r\n\r\n* VM -> tests: replaced file name test run log output with fully qualified sub directory path for easier test localization\r\n\r\n* organize tester files into own folder, organize imports, add @types/minimist and @types/node-dir\r\n\r\n* ignore benchmark block 9422911 due to high variance\r\n\r\n* update path import, tidy, copy over needed changes to testLoader in tx library\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-11-10T12:29:50+01:00",
          "tree_id": "1fb334425d5b88357edf5f1e243b3545e2c97e89",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3d0ba62c588381232d94b55a98684bb93e90785d"
        },
        "date": 1636544121257,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14904,
            "range": "±3.93%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13402,
            "range": "±8.04%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14422,
            "range": "±3.50%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14759,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14411,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33eeac3162aee00047be4a59180039e1a7da5f9a",
          "message": "client: save receipts and implement getLogs, getTxReceipt, getTxByHash (#1556)\n\n* save receipts, implement getLogs, getTxReceipt, getTxByHash\r\n* getLogs toBlock query fix, add test using fromBlock/toBlock as numbers, make `--ws` default false\r\n* fix: reinit vmexec's txCounter on every new block range executed\r\n* add effectiveGasPrice to receipt\r\n* fix client coverage reporting (each .nycrc needs its own includes, inheriting it was causing problems)\r\n* fix typos\r\n* add getLogs block range limit, megabyte size limit (150mb default for json rpc, 2mib limit for devp2p receipts response)\r\nrefactor getLogs to accept block param as block instead of blockHash (simplification, no need to re-query for the blocks)\r\n* Add pooledTxs encoding test to bump coverage\r\n* add more tests for handling/encoding/decoding GetReceipts/Receipts\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-11-14T13:00:42-08:00",
          "tree_id": "cf4c273104b32d88a014200b6df34f5f039386c9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/33eeac3162aee00047be4a59180039e1a7da5f9a"
        },
        "date": 1636923972494,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13763,
            "range": "±4.15%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12829,
            "range": "±9.07%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14238,
            "range": "±3.68%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13784,
            "range": "±4.01%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13434,
            "range": "±4.36%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aec64d05230cc0dd7050d7bf072dca6178dc7b62",
          "message": "VM: Add BaseStateManager (#1548)\n\n* vm -> BaseStateManager: added class and constructor, improved DefaultStateManager class documentation\r\n\r\n* VM -> StateManager: removed unused warm() method from Cache\r\n\r\n* VM -> StateManager: made Cache backend agnostic by replacing direct trie calls with operation callbacks\r\n\r\n* VM -> StateManager: moved getAccount(), putAccount() and touchAccount() to BaseStateManager, made _debug a member variable of BaseStateManater\r\n\r\n* VM -> StateManager: moved deleteAccount(), getOriginalContractStorage(), clearOriginalStorageCache(), generateAccessList() to BaseStateManager, checkpoint(), commit(), revert() calls into super class\r\n\r\n* VM -> StateManager: use putAccount() in generateGenesis() in favor of direct trie access, move generateCanonicalGenesis(), generateGenesis() to BaseStateManager()\r\n\r\n* VM -> StateManager: moved generateGenesis() back to StateManager (direct trie access needed), moved EIP-2929 functionality (addWarmedAddress(),...) to BaseStateManager\r\n\r\n* VM -> StateManager: some cleanup\r\n\r\n* VM -> StateManager: flush cache in generateGenesis() call to allow for directly using the provided putAccount() method\r\n\r\n* VM -> StateManager: moved generateGenesis() to BaseStateManager\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-11-15T12:15:23+01:00",
          "tree_id": "fae56673038ab527efdf5a3b71ccd930a884de01",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/aec64d05230cc0dd7050d7bf072dca6178dc7b62"
        },
        "date": 1636975222283,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13234,
            "range": "±3.66%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12955,
            "range": "±8.84%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 13593,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13394,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13340,
            "range": "±2.82%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0f9eed1c3740242b94f5dec996961ae53530de6",
          "message": "blockchain: Change toBuffer to toArrayLike for BNs (#1566)\n\n* blockchain: Change toBuffer to toArrayLike for BNs\r\n\r\n* update changelog",
          "timestamp": "2021-11-15T08:52:38-08:00",
          "tree_id": "2df420a8ce92786da2e805d34254e70d37aee457",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d0f9eed1c3740242b94f5dec996961ae53530de6"
        },
        "date": 1636995469909,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 11925,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11513,
            "range": "±7.83%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 12206,
            "range": "±2.72%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12223,
            "range": "±3.02%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 11708,
            "range": "±3.76%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76a3b129183813a353fea28494083bc160d59778",
          "message": "blockchain: v5.5.1 release (#1567)\n\n* blockchain: prepare v5.5.1 release\r\n\r\n* client fix cli tape tests: prevent end being called more than once per suite",
          "timestamp": "2021-11-16T09:42:48+01:00",
          "tree_id": "b847e37280969c6170c66245f8b0b172e4392bc8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/76a3b129183813a353fea28494083bc160d59778"
        },
        "date": 1637052457319,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20306,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18227,
            "range": "±8.54%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19897,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18880,
            "range": "±4.10%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13107,
            "range": "±17.02%",
            "unit": "ops/sec",
            "extra": "51 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb5240bec432b5c37f38fd5483483f805f24f234",
          "message": "block: point difficulty tests to ethereum-tests (#1571)\n\n* block: switch difficulty tests back to Eth-Tests\r\n* delete unused test data artifact\r\n* tidy\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-11-16T13:25:04-08:00",
          "tree_id": "5b6684bb90e396451beb00109ce12fbf09903708",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/eb5240bec432b5c37f38fd5483483f805f24f234"
        },
        "date": 1637098162632,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20270,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18569,
            "range": "±7.96%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20318,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19506,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12035,
            "range": "±18.82%",
            "unit": "ops/sec",
            "extra": "48 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67ff9e822747b99b24686bb89be5b1814f0eef81",
          "message": "dedupe vm ci step (don't run test:API twice) (#1573)",
          "timestamp": "2021-11-17T12:41:53+01:00",
          "tree_id": "52926e430dad032d54816b1bb37aab826bfea6e7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/67ff9e822747b99b24686bb89be5b1814f0eef81"
        },
        "date": 1637149609371,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 17900,
            "range": "±3.82%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16664,
            "range": "±10.00%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18020,
            "range": "±2.62%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 17757,
            "range": "±2.28%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14399,
            "range": "±14.11%",
            "unit": "ops/sec",
            "extra": "64 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bccef10b73fda2373122a4109d1c2eb433bc2ead",
          "message": "Common: Add berlin/london hardforks to kovan (#1577)\n\n* Common: Add berlin/london hardforks to kovan\r\n\r\n* Update tests and fix forkhash",
          "timestamp": "2021-11-18T10:19:06+01:00",
          "tree_id": "3e6de769dc64d9c6092e894046c798e6e2fec453",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/bccef10b73fda2373122a4109d1c2eb433bc2ead"
        },
        "date": 1637227474836,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 10562,
            "range": "±3.51%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 10560,
            "range": "±7.49%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 10872,
            "range": "±3.16%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 10839,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 10624,
            "range": "±4.08%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5e806508459fb4c633ac0e95bbadec841e2f365",
          "message": "Monorepo: correct license note (#1582)",
          "timestamp": "2021-11-22T12:49:41+01:00",
          "tree_id": "9c63e76b6bd78cf9f2cabe6a349b1ba4496df8a8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c5e806508459fb4c633ac0e95bbadec841e2f365"
        },
        "date": 1637582372149,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 10937,
            "range": "±4.56%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 10790,
            "range": "±6.27%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 10300,
            "range": "±7.13%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 11217,
            "range": "±3.27%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 10811,
            "range": "±3.57%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ead38a9d77c6d123bfad48298d25a2b645d08778",
          "message": "fix buffer compare in demo script (#1584)",
          "timestamp": "2021-11-22T14:17:10-08:00",
          "tree_id": "5d07e54b61dd8c9925852e8a2d711dc3379e6150",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ead38a9d77c6d123bfad48298d25a2b645d08778"
        },
        "date": 1637619732368,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 12268,
            "range": "±3.04%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11520,
            "range": "±7.54%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 12139,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12348,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 11786,
            "range": "±3.74%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddf21a50302e13c957c2a6f07d8f23d5169718e1",
          "message": "monorepo, vm: remove npm vulnerabilities (#1579)\n\n* vm: update tap-spec package\r\n\r\n* monorepo: remove old npm-auth-to-token package\r\n\r\n* monorepo: fix npm login in e2e-publish script\r\n\r\n* monorepo: troubleshooting npm login\r\n\r\n* monorepo: troubleshooting npm login\r\n\r\n* monorepo: troubleshooting npm login\r\n\r\n* monorepo: cleanup in e2e-publish script\r\n\r\n* monorepo: remove unused npm login package\r\n\r\n* vm: remove tap-spec completely, make formatTest script generic",
          "timestamp": "2021-11-23T18:12:01+01:00",
          "tree_id": "3ce69ac9b55f53de626a8e70b17c6d34141194d0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ddf21a50302e13c957c2a6f07d8f23d5169718e1"
        },
        "date": 1637687859328,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 11816,
            "range": "±5.39%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12384,
            "range": "±2.89%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 11166,
            "range": "±9.94%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12214,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12207,
            "range": "±3.23%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d9c54e59ef5f17b06ffb4e0f3ba9e682eae6383",
          "message": "util, monorepo: update readme, fix coverage reports (#1585)\n\n* util: update readme\r\n\r\n* fix missing coverage reports\r\n\r\n* update to codecov-action@v2\r\nupdate coverage cmd to inline reporters (no need for separate .nyc_output lcov output as the coverage dir is used)\r\n\r\n* codecov: try running with `cache: false` so it doesn't pick up node_modules cache",
          "timestamp": "2021-11-24T19:09:53+01:00",
          "tree_id": "0e21bb6875ca9f8dabf46493dfbb6073c50e60e3",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9d9c54e59ef5f17b06ffb4e0f3ba9e682eae6383"
        },
        "date": 1637777709688,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 12326,
            "range": "±3.26%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11826,
            "range": "±6.69%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422907",
            "value": 12586,
            "range": "±3.23%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12176,
            "range": "±3.21%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12410,
            "range": "±3.36%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "595f4560a0ffbac6c0787fb25310ddac597b8d32",
          "message": "Update ethereum-tests to v10.2 (#1568)\n\n* Point block difficulty tests to ethereum-tests, remove local dups, and update ethereum tests\r\n* Move uncle hash check to test runner\r\n* Update tx test runner to latest\r\n* Partial leading zero fixes\r\n* block: lint fix\r\n* Remove duplicate test data artifact\r\n* guard against leading zeroes and implement eip2681\r\n* tx: remaining eth-test fixes\r\n* tx: lint fix\r\n* Additional checks for tx tests\r\n* tx: fix clean-up\r\n* Implement EIP-3607\r\n* vm: remove outdated state update on state test failure\r\n* Update packages/tx/src/baseTransaction.ts\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\n* Check correct codeHash field\r\n* fix nits\r\n* Fix EIp3607 check\r\n* Requested formatting changes\r\n* vm: change codehash comparison to empty buffer instead of string\r\n* tx: Fix erroneous nonce to gasLimit\r\n* Update Eth-Tests to 10.2 and tx fixes\r\n* vm: use correct buffer comparison\r\n* Fix leading zero check\r\n* Fix leading zero check in 2930/1559 transactions\r\n* Fix invalid signature test\r\n* Replace 0x00 with 0x in test data\r\n* tx, util: rework logic for checking leading zeroes\r\n* lint fixes\r\n* util: Add test for new hasLeadingZeroes helper\r\n* Remove duplicate checks for EIP1559\r\n* tx: add tests for leading zeroes check\r\n* tx: remove duplicate leading zero check\r\n* Move leadingZeroes check to Tx/util.ts\r\n* Add missing import\r\n* Updates to leadingZeroes test and 2^64 nonce check\r\n* Move validateNoLeadingZeroes back to util\r\n* update leadingZeros function description\r\n* tidy:\r\n - remove unneeded RlpValues type (inlined in the function method)\r\n - generalize validateCannotExceedMaxInteger and remove 53 bits options (was actually using 256 instead of 53)\r\n* tidy, adjust EIP-2681 implementation so value cannot also equal 2^64-1\r\n* Break out leading zeroes test by value\r\n* Add tests for missing code coverage\r\n* Add check for integer overflow in EIP1559 and fix test\r\n* Lint fixes\r\n* Requested change\r\n* Consistency in integer overflow checks\r\n* Remove \"unnecessary semicolons\"\r\n* Add es-disable to fix semicolon complaining\r\n* Add coverage for all branches of maxInt test\r\n* Remove extra spaces\r\n* last nits\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-12-01T18:36:19-08:00",
          "tree_id": "f295898eb33fa7ffb8ea2e116ee38d30e02a3149",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/595f4560a0ffbac6c0787fb25310ddac597b8d32"
        },
        "date": 1638413181594,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13182,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12559,
            "range": "±6.93%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 13294,
            "range": "±2.46%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13282,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13248,
            "range": "±2.86%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcaceaf4f0792cec6302fba2abfae095de091fbf",
          "message": "client: fix libp2p sync and browser example (#1588)\n\n* fix webpack polyfills: buffer, process/browser\r\n* fix browser sync example\r\n* remove premature PEER_CONNECTED\r\n* parse bootnodes, set consistent chainDB\r\n* tidy libp2p files and other small fixes\r\n* remove index_old.ts\r\n* fix spec test (add anythng() matcher for new boolean param)\r\n* move client event handlers to client module\r\nrefactor some cli logic to own functions (helprpc, inputAccounts, setupDev)\r\n* align headerfetcher/blockfetcher logic, small grammar adjustments of log messages\r\n* add `string: true` to `unlock` arg so it doesn't get converted to a number\r\n* Libp2pserver test additions\r\n* further tidying of cli.ts\r\n* grammar (on -> in)\r\n* Add more lightsync tests\r\n* Add new blockfetcher store tests\r\n* Add blockfetcher tests for store method\r\n* Add header fetcher tests\r\n* use different input values for `td.when` rather than using `td.reset`\r\n* Add fetcher test for queue inserts\r\n* remove extraneous debug import\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-12-01T18:59:10-08:00",
          "tree_id": "91b48de559fdc27f96a1d7ec5c70b1e0c1df3561",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fcaceaf4f0792cec6302fba2abfae095de091fbf"
        },
        "date": 1638414241943,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 12160,
            "range": "±2.94%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11536,
            "range": "±8.32%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 12554,
            "range": "±2.55%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12465,
            "range": "±2.69%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 11965,
            "range": "±2.88%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d518e9832f6374050cff7a92e5a38146485f77a3",
          "message": "Ethtests 10.2 cleanup items (#1593)\n\n* tx: make integer overflow error more clear\r\n* util: add examples to leadingZeroes helper\r\n* vm: add error message clarification",
          "timestamp": "2021-12-05T16:52:10-05:00",
          "tree_id": "0bff3b457db3e8e31fdedfcc8bdc73679cccd98b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d518e9832f6374050cff7a92e5a38146485f77a3"
        },
        "date": 1638741416778,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13188,
            "range": "±5.33%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12234,
            "range": "±7.47%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 13717,
            "range": "±2.67%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14767,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14752,
            "range": "±2.85%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c74035e12765ab4bce8cb2bead634e2887af0d7c",
          "message": "client: fix broken link in client example (#1594)",
          "timestamp": "2021-12-06T09:27:53-08:00",
          "tree_id": "15ff7a2d75f23bd81d6f53fccc6da7e1473388f1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c74035e12765ab4bce8cb2bead634e2887af0d7c"
        },
        "date": 1638811933194,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20478,
            "range": "±2.64%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18641,
            "range": "±8.65%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20232,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19268,
            "range": "±3.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 11667,
            "range": "±21.18%",
            "unit": "ops/sec",
            "extra": "46 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "164989bfcb54e330f36ca71fde117fd8bd1725b1",
          "message": "fix client error logging: add top level `format` to createLogger (#1595)",
          "timestamp": "2021-12-06T17:24:30-08:00",
          "tree_id": "452409a46524a275c1e5da9bce31f82a7f3a9f94",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/164989bfcb54e330f36ca71fde117fd8bd1725b1"
        },
        "date": 1638840527609,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20209,
            "range": "±3.60%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18362,
            "range": "±10.99%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19755,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19464,
            "range": "±3.50%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12659,
            "range": "±18.74%",
            "unit": "ops/sec",
            "extra": "51 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bffbc0385d0aef62097fd1bffeb9abdecdaa344d",
          "message": "Implement eth_getProof (#1590)\n\n* vm: start on getProof\r\n\r\n* vm: stateManager: add getProof EIP-1186\r\n\r\n* vm: stateManager: add verifyProof\r\n\r\n* vm: add getProof tests\r\n\r\n* vm: start on getProof\r\n\r\n* vm: stateManager: add getProof EIP-1186\r\n\r\n* vm: stateManager: add verifyProof\r\n\r\n* vm: move changes of old state manager into new one\r\n\r\n* vm: fix proof test\r\n\r\n* vm: make getProof better readable\r\n\r\n* vm: stateManager cleanup verifyProof\r\n\r\n* vm: make proof/verifyproof optional\r\n\r\n* stateManager: add ropsten stateManager tests\r\nstateManager: fix getProof EIP1178 field\r\n\r\n* stateManager: more getProof tests / ensure geth compatibility\r\n\r\n* stateManager: partially fix verifyProof\r\n\r\n* stateManager: fix empty account proofs\r\nstateManager: fix storage slot proofs\r\n\r\n* stateManager: add tests for tampered proofs\r\n\r\n* stateManager: use Proof type of stateManage not MPT\r\n\r\n* client: add getProof endpoint\r\nclient: add tests for getProof\r\n\r\n* vm: state: update interface\r\n\r\n* review - vm:\r\n  * bolster invalid proof error messages\r\n  * extract ProofStateManager tests to own file\r\n  * move testdata files to own folder and use import syntax for improved type info\r\n\r\n* review - client:\r\n  * already have array validator (usage: `validators.array(validators.hex)`)\r\n  * add typedoc for getProof (thanks @gabrocheleau)\r\n  * update getProof.spec.ts to match future test setup from PR #1598 (this slightly modifies the returned accountProof)\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-12-09T14:22:12+01:00",
          "tree_id": "369d5ed330f213b86dd19771eea1418870b705c9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/bffbc0385d0aef62097fd1bffeb9abdecdaa344d"
        },
        "date": 1639056404121,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20267,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16120,
            "range": "±11.27%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19547,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18995,
            "range": "±4.00%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12119,
            "range": "±17.58%",
            "unit": "ops/sec",
            "extra": "49 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22bc187f9e98f64756452bb065e3dfc64cb805a4",
          "message": "VM: address consensus issue: tx goes OOG but refunds get applied anyways (#1603)\n\n* vm: add consensus bug test\r\n* vm: fix invalid selfdestructs when code deposit gas cannot be paid (upcoming ethereum/tests CreateOOGFromEOARefunds_d13g0v0)",
          "timestamp": "2021-12-11T00:24:19-08:00",
          "tree_id": "a76b900d99c4a13ddff1190169979678016a19c6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/22bc187f9e98f64756452bb065e3dfc64cb805a4"
        },
        "date": 1639211357511,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 17375,
            "range": "±3.10%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15371,
            "range": "±9.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16882,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 16051,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16112,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe50f4eba89ea662696da7e0e0d8df2df9a0effd",
          "message": "client: allow past block numbers in RPC queries (#1598)\n\n* client: allow block number arg in rpc\r\n\r\n* client rpc: simplify result comparisons\r\n\r\n* add getProof\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-12-14T20:06:40+01:00",
          "tree_id": "bb96c21ed401295dca98c5c1649de7523f8d8796",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fe50f4eba89ea662696da7e0e0d8df2df9a0effd"
        },
        "date": 1639509102714,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16630,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15168,
            "range": "±9.77%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16329,
            "range": "±2.82%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 16223,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 15493,
            "range": "±4.73%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d390b9b4d9182e27f9f131c83615392a4c5378b6",
          "message": "Finish EIP-2681 (#1608)\n\n* vm: add nonce check for CREATE/CREATE2 opcodes of the creating contract\r\n\r\n* vm: add EIP2681 test for CREATE opcode\r\n\r\n* vm: eei: add EIP-2681 comment\r\n\r\n* vm: eip-2681: change eq to gte for better safety\r\n\r\n* vm: update test comment for EIP-2681\r\n\r\n* lint fixes\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-12-15T19:31:15+01:00",
          "tree_id": "9e47dce77b749098ad6865377a638c9ca6da7db9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d390b9b4d9182e27f9f131c83615392a4c5378b6"
        },
        "date": 1639593384183,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 12621,
            "range": "±3.88%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11970,
            "range": "±7.02%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 12969,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12804,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12715,
            "range": "±3.12%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59f103eb796d7caa10775288db6f682a5f18210e",
          "message": "tx/vm/util: throw when provided negative BN (#1606)\n\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-12-15T16:26:51-05:00",
          "tree_id": "e022aef64332355183fd782dce6ec6646efcb23a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/59f103eb796d7caa10775288db6f682a5f18210e"
        },
        "date": 1639603857181,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21564,
            "range": "±2.93%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18164,
            "range": "±9.99%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20897,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21314,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14699,
            "range": "±14.19%",
            "unit": "ops/sec",
            "extra": "56 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c7bdfcdf5866fc31df2b87508156f3294bbae45",
          "message": "eslint: disable no-extra-semi, remove overrides (#1613)",
          "timestamp": "2021-12-15T16:49:16-08:00",
          "tree_id": "61b44daaa86e65b37454ab64cd2286c593a0faf6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/0c7bdfcdf5866fc31df2b87508156f3294bbae45"
        },
        "date": 1639616014113,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20883,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18958,
            "range": "±8.77%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20379,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19522,
            "range": "±3.89%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13687,
            "range": "±15.84%",
            "unit": "ops/sec",
            "extra": "55 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3751bbd68a6f20c620c03d874abd1e2ea0895f50",
          "message": "common/vm: add EIP-3855, PUSH0 instruction (#1616)\n\n* common/vm: add EIP-3855, PUSH0 instruction\r\n\r\n* vm: remove breaking changes from runCode",
          "timestamp": "2021-12-28T00:11:26+01:00",
          "tree_id": "4d8c46e93e50b7d7c014a97373c6a09c9b9dde6e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3751bbd68a6f20c620c03d874abd1e2ea0895f50"
        },
        "date": 1640646944559,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20769,
            "range": "±2.45%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19838,
            "range": "±8.85%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20759,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20846,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13676,
            "range": "±19.95%",
            "unit": "ops/sec",
            "extra": "53 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23a7f35c471d7bc3797b3452d9be0947000b6102",
          "message": "common: add support for new Sepolia chain (#1581)\n\n* common: add support for new Sepolia chain\r\n* common: updates in sepolia.json chain config\r\n* common: sepolia configuration fixes\r\n* add initialBaseFee logic to block header constructor\r\n* block: improve londonHfBlock var name for clarity\r\n* common: add require for sepolia genesisStates\r\n* block: fix tests with initialBaseFeePerGas\r\n* use Hardfork enum\r\n* organize test util code\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-01-03T12:35:17-08:00",
          "tree_id": "acc420dc74431f4b3f2b415467635dceff83e39f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/23a7f35c471d7bc3797b3452d9be0947000b6102"
        },
        "date": 1641242374041,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20679,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19353,
            "range": "±6.76%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20638,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19853,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13119,
            "range": "±16.72%",
            "unit": "ops/sec",
            "extra": "51 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03b69e283e1828894801fec625701c78588214a3",
          "message": "Add fallback for node constants (#1621)",
          "timestamp": "2022-01-04T15:43:43-08:00",
          "tree_id": "e3d2232c6cc0d38ab1bf9fcc48d150348569701b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/03b69e283e1828894801fec625701c78588214a3"
        },
        "date": 1641340079484,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20503,
            "range": "±2.87%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18766,
            "range": "±8.16%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20259,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19542,
            "range": "±3.81%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12124,
            "range": "±18.29%",
            "unit": "ops/sec",
            "extra": "48 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb5bb56013163fbad5fb59c6b9f021a3c0fd2aaa",
          "message": "ci: fix node-versions run for node <16 (#1653)\n\n* re-add updating to npm v7 for node versions <16\r\n* only upgrade npm for node v <16\r\n* fix bin/rlp js: node 12 doesn't support ES11 which added support for nullish coalescing operator (??) so we'll use ternary here\r\nalternatively we could write this file in TS and compile to e.g. dist/bin/rlp (like we do in the client bin), but maybe if the file gets more complicated, in its current state i don't think it's so neccessary\r\n* use same errorMsg format for JSON.parse, remove unneeded extra Uint8Array.from (already is uint8array)",
          "timestamp": "2022-01-19T10:37:25-08:00",
          "tree_id": "f0e49214c8ef4d7fc012c32f0fc94352faa86356",
          "url": "https://github.com/eniolasonowo/ethereumjs-monorepo/commit/eb5bb56013163fbad5fb59c6b9f021a3c0fd2aaa"
        },
        "date": 1642921993539,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18305,
            "range": "±6.58%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19529,
            "range": "±2.94%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14717,
            "range": "±10.82%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19437,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19127,
            "range": "±2.24%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      }
    ]
  }
}