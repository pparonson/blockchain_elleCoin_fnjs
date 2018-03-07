const block = require("./block");

let newBlock = block.createBlock(
  {
    inputAddress: "abc123",
    outputAddress: "123abc",
    amount: 10,
    message: "create block"
  },
  "pr3v10u5h45h"
);

console.log(newBlock);