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

// impure: sha256 causes side effects?
const calculateHash = R.curry((timestamp, data, previousHash) => 
  SHA256(`${timestamp}${data}${previousHash}`).toString());

module.exports = {
  createBlock
}