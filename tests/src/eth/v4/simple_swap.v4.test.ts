import { processTest } from "../../test.fixture";

const contractName = "Paraswap V4";
// From : https://etherscan.io/tx/0x4a99078854129f69d6c4dce690b311c26b88869efa84eb57edc2c2976a186970
const rawTxHex =
  "0xf9040b10850e6f7cec0083044a31941bd435f3c054b6e901b7b108a0ab7617c808677b80b903a4cfc0afeb000000000000000000000000f629cbd94d3791c9250152bd8dfbdf380e2a3b9c000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000191556e0a46e44312400000000000000000000000000000000000000000000000002b036a93598378400000000000000000000000000000000000000000000000002c57f9bf7e975f0000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000002c000000000000000000000000000000000000000000000000000000000000003200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000036000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000f806f9972f9a34fc05394ca6cf2cc606297ca6d500000000000000000000000000000000000000000000000000000000000000c499585aac0000000000000000000000000000000000000000000000191556e0a46e443124000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000002000000000000000000000000f629cbd94d3791c9250152bd8dfbdf380e2a3b9c000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c40000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000076c6564676572320000000000000000000000000000000000000000000000000026a04c51e49d0468db9a8a204529e6a5963b3474cd6f11ad58f09b4a4a5675ae9ffba02838a36d64417748f3b99421114eb6ac9811af6486807c960abeb8c10a144209";
const testLabel = "Simple Swap"; // <= Name of the test
const testDirSuffix = "simple_swap_v4"; // <= directory to compare device snapshots to
const testNetwork = "ethereum";

const signedPlugin = false;
const devices = [
  {
    name: "nanos",
    label: "Nano S",
    steps: 9 // <= Define the number of steps for this test case and this device
  },
  {
    name: "nanox",
    label: "Nano X",
    steps: 5 // <= Define the number of steps for this test case and this device
  }
];



devices.forEach((device) =>
  processTest(device, contractName, testLabel, testDirSuffix, rawTxHex, signedPlugin,"",testNetwork)
);