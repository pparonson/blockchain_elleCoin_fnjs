const R = require("ramda");
const SHA256 = require("crypto-js/sha256");

// createBlock :: a -> String -> b
const createBlock = R.curry((previousHash, data) => {
  let hash = calculateHash(previousHash, data);

  return {
    data,
    previousHash,
    hash
  };
});

// initializeGenesis :: a
const initializeGenesis = R.curry(() => {
  // elle is my princess
  let previousHash = "ecca2e3b7b6227f5b295cd63df2a86b0687d60eab210cee80cd48ab49932dca8";
  let data = {
    inputAddress: "abc123",
    outputAddress: "123abc",
    amount: 50,
    message: "The genesis of good."
  }
  return createBlock(previousHash, data);
});

// calculateHash :: a -> String -> String -> String -> String
const calculateHash = R.curry((previousHash, data) =>
  SHA256(`${previousHash}${data}`).toString());

// isBlockValid :: a -> Boolean
const isBlockValid = R.curry(block =>
  block.hash === calculateHash(block.previousHash, block.data) ? true : false);


module.exports = {
  createBlock,
  initializeGenesis,
  isBlockValid
};
