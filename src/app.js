const R = require("ramda");
// const {isBlockValid} = require("./block");
const {
  initializeBlockchain,
  appendNewBlock,
  isChainValid} = require("./blockchain");

let elleCoinTemp = R.compose(
  appendNewBlock({
      inputAddress: "123abc",
      outputAddress: "efg456",
      amount: 10,
      message: "whoa! another block found."
    })
)(initializeBlockchain());

let elleCoinTemp1 = appendNewBlock(
  {
    inputAddress: "efg456",
    outputAddress: "456efg",
    amount: 5,
    message: "getting rich."
  },
  elleCoinTemp
);

elleCoinTemp1[2].data.amount = 15;

// let block1 = {
//     "data": {
//       "inputAddress": "efg456",
//       "outputAddress": "456efg",
//       "amount": 5,
//       "message": "getting rich."
//     },
//     "previousHash": "7e7b335392ee8b2d91a7d5a02c931c74a8ca32d90d197f9866d95aa10c5e1d58",
//     "hash": "ae4ad47c1bdb5f90a063d3acc1799b21e753b67b61113d393f89812a1fb18aa9"
//   };

let result = isChainValid(elleCoinTemp1);

console.log(result);
