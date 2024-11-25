import { processTest, populateTransaction} from "../../test.fixture";

const contractName = "Paraswap V5";

const testLabel = "Simple Buy"; // <= Name of the test
const testDirSuffix = "simple_buy"; // <= directory to compare device snapshots to
const testNetwork = "arbitrum";
const signedPlugin = false;

const contractAddr = "0xdef171fe48cf0115b1d80b88dc8eab59176fee57";
const chainID = 42161; // ARBITRUM

// From : https://arbiscan.io/tx/0xe4dc8afbcab4b40d08b5ff69e6f496122eb5dafb1fbcea0624b99d43d645bef0
const inputData = "0x2298207a0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000008b0e6f19ee57089f7649a455d89d7bc6314d04e8000000000000000000000000000000000000000000000000022512aad6c7cfc20000000000000000000000000000000000000000000000008ac7230489e80000000000000000000000000000000000000000000000000000021fa2f52fe6c8a200000000000000000000000000000000000000000000000000000000000001e0000000000000000000000000000000000000000000000000000000000000026000000000000000000000000000000000000000000000000000000000000003e00000000000000000000000000000000000000000000000000000000000000480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a3c2a819e3de7aca384c798269b3ce1cd0e43701000000000000000000000000000000000000000000000000000000000313880000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000006744df7e0030d5bad24b4999b73f3533e4f2a86900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab10000000000000000000000001f721e2e82f6676fce4ea07a5958cf098d339e18000000000000000000000000def171fe48cf0115b1d80b88dc8eab59176fee57000000000000000000000000000000000000000000000000000000000000014cd0e30db0f28c0498000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000def171fe48cf0115b1d80b88dc8eab59176fee5700000000000000000000000000000000000000000000000000000000674dc59d0000000000000000000000000000000000000000000000008ac7230489e80000000000000000000000000000000000000000000000000000022512aad6c7cfc200000000000000000000000000000000000000000000000000000000000000288b0e6f19ee57089f7649a455d89d7bc6314d04e882af49447d8a07e3bd95bd0d56f35241523fbab1000000000000000000000000000000000000000000000000e1829cfe00000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000128000000000000000000000000000000000000000000000000000000000000014c0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000022512aad6c7cfc2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

// Create serializedTx and remove the "0x" prefix
const serializedTx = populateTransaction(contractAddr, inputData, chainID, "101.508501444720532639");

const devices = [
  {
    name: "nanos",
    label: "Nano S",
    steps: 8 // <= Define the number of steps for this test case and this device
  },
  {
    name: "nanosp",
    label: "Nano S+",
    steps: 6 // <= Define the number of steps for this test case and this device
  },
  {
    name: "nanox",
    label: "Nano X",
    steps: 6 // <= Define the number of steps for this test case and this device
  },
  // {
  //   name: "stax",
  //   label: "Stax",
  //   steps: 6 // <= Define the number of steps for this test case and this device
  // },
  // {
  //   name: "flex",
  //   label: "Flex",
  //   steps: 6 // <= Define the number of steps for this test case and this device
  // }
];

devices.forEach((device) =>
  processTest(device, contractName, testLabel, testDirSuffix, "", signedPlugin, serializedTx,testNetwork)
);