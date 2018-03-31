const {createBlock} = require("./block");

describe("Block", () => {
  // declare and set variables scope
  let data, previousHash, block;

  beforeEach(() => {
    // create test instance
    data = {
      inputAddress: "abc123",
      outputAddress: "123abc",
      amount: 10,
      message: "create block"
    };
    previousHash = "pr3v10u5h45h";
    block = createBlock(data, previousHash);
  });

  it("sets data to match input", () => {
    expect(block.data).toEqual(data);
  });

  it("sets previousHash to hash input of previous block", () => {
    expect(block.previousHash).toEqual(previousHash);
  });
});
