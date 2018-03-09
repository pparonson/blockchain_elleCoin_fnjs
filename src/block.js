const R = require("ramda");
const SHA256 = require("crypto-js/sha256");

const createBlock = R.curry((data, previousHash) => {
  let timestamp = Date.now();
  let hash = calculateHash(timestamp, data, previousHash);
  
  return {
    timestamp, 
    data, 
    previousHash,
    hash
  };
});

const initializeGenesis = R.curry(() => {
  // elle is my princess
  let previousHash = "ecca2e3b7b6227f5b295cd63df2a86b0687d60eab210cee80cd48ab49932dca8";
  let data = {
    inputAddress: "abc123",
    outputAddress: "123abc",
    amount: 50,
    message: "The genesis of good."
  }
  return createBlock(data, previousHash);
});

// impure: sha256 causes side effects?
const calculateHash = R.curry((timestamp, data, previousHash) => 
  SHA256(`${timestamp}${data}${previousHash}`).toString());

module.exports = {
  createBlock,
  initializeGenesis
};

