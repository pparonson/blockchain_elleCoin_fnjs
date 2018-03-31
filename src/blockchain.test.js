// const R = require("ramda");

const {initializeGenesis} = require("./block");
const {initializeBlockchain, appendNewBlock} = require("./blockchain");

describe("blockchain", () => {
  let bc1, bc2;
  beforeEach(() => {
    bc1 = initializeBlockchain();
    bc2 = initializeBlockchain();
  });

  it("runs a test successfully", () => {
    const test = "success";
    expect(test).toEqual("success");
  });

  it("initializes with a valid genesis block", () => {
    const [genesisBlock] = bc1;
    expect(genesisBlock.hash).toEqual(initializeGenesis().hash);
  });

  // it("invalidates a corrupt genesis block", () => {
  //
  // });
});
