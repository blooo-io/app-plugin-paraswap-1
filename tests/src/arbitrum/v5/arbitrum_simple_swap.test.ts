import { processTest, populateTransaction} from "../../test.fixture";

const contractName = "Paraswap V5";

const testLabel = "Simple Swap"; // <= Name of the test
const testDirSuffix = "simple_swap"; // <= directory to compare device snapshots to
const testNetwork = "arbitrum";
const signedPlugin = false;

const contractAddr = "0xdef171fe48cf0115b1d80b88dc8eab59176fee57";
const chainID = 42161; // ARBITRUM

// From : https://arbiscan.io/tx/0x32acab70a378e112571fcc4ac2eabb3bb15d5177cdb5a1bc2e15bb878f7ff634
const inputData = "0x54e3f31b0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000fd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb900000000000000000000000059062301fb510f4ea2417b67404cb16d31e604ba0000000000000000000000000000000000000000000000000000000003d73013000000000000000000000000000000000000000000000052868a18ae35de71460000000000000000000000000000000000000000000000535bf056fd8bbf12be00000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000220000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000003e0000000000000000000000000f5aae5276b1ed63544edb779dcd7e449a7d8017b000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000000000000006744e0e73396a2fd8bc946bb9bfe3b4b317da7620000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000001b81d678ffb9c0263b24a97847620c99d213eb140000000000000000000000000000000000000000000000000000000000000124c04b8d59000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000def171fe48cf0115b1d80b88dc8eab59176fee5700000000000000000000000000000000000000000000000000000000674dc7070000000000000000000000000000000000000000000000000000000003d730130000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002bfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb90009c459062301fb510f4ea2417b67404cb16d31e604ba00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000124000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

// Create serializedTx and remove the "0x" prefix
const serializedTx = populateTransaction(contractAddr, inputData, chainID,"30");

const devices = [
  {
    name: "nanos",
    label: "Nano S",
    steps: 11 // <= Define the number of steps for this test case and this device
  },
  {
    name: "nanosp",
    label: "Nano S+",
    steps: 7 // <= Define the number of steps for this test case and this device
  },
  {
    name: "nanox",
    label: "Nano X",
    steps: 7 // <= Define the number of steps for this test case and this device
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
