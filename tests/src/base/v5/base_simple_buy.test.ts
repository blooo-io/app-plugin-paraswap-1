import { processTest, populateTransaction} from "../../test.fixture";

const contractName = "Paraswap V5";

const testLabel = "Simple Buy"; // <= Name of the test
const testDirSuffix = "simple_buy"; // <= directory to compare device snapshots to
const testNetwork = "base";
const signedPlugin = false;

const contractAddr = "0x59c7c832e96d2568bea6db468c1aadcbbda08a52";
const chainID = 8453; // BASE

// From : https://basescan.org/tx/0x655cde9c98fe3149ad191309b9966835abfd805b194a97e7744af1b9a144dd7e
const inputData = "0x2298207a0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda02913000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000084653f6000000000000000000000000000000000000000000000000008e1bc9bf0400000000000000000000000000000000000000000000000000000000000008315abc00000000000000000000000000000000000000000000000000000000000001e0000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000003c00000000000000000000000000000000000000000000000000000000000000440000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a3c2a819e3de7aca384c798269b3ce1cd0e437010000000000000000000000000000000000000000000000000000000003138800000000000000000000000000000000000000000000000000000000000004a000000000000000000000000000000000000000000000000000000000674546a0eab585efff664e6f86df604ee24f74390000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000001b8eea9315be495187d873da7773a874545d9d4800000000000000000000000059c7c832e96d2568bea6db468c1aadcbbda08a520000000000000000000000000000000000000000000000000000000000000148f28c0498000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000059c7c832e96d2568bea6db468c1aadcbbda08a5200000000000000000000000000000000000000000000000000000000674e2cbf000000000000000000000000000000000000000000000000008e1bc9bf04000000000000000000000000000000000000000000000000000000000000084653f6000000000000000000000000000000000000000000000000000000000000002b4200000000000000000000000000000000000006000050833589fcd6edb6e08f4c7c32d4f71b54bda02913000000000000000000000000000000000000000000e1829cfe000000000000000000000000420000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012400000000000000000000000000000000000000000000000000000000000001480000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

// Create serializedTx and remove the "0x" prefix
const serializedTx = populateTransaction(contractAddr, inputData, chainID, "101.508501444720532639");

const devices = [
  {
    name: "nanos",
    label: "Nano S",
    steps: 6 // <= Define the number of steps for this test case and this device
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