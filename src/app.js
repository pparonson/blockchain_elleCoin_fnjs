const {createBlock, initializeGenesis} = require("./block");

let newBlock = createBlock(
  {
    inputAddress: "abc123",
    outputAddress: "123abc",
    amount: 10,
    message: "create block"
  },
  "pr3v10u5h45h"
);

let genesis = initializeGenesis();

//console.log(newBlock);
console.log(genesis);