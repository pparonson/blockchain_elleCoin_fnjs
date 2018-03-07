const R = require("ramda");
const SHA256 = require("crypto-js/sha256");

const createBlock = (_data, _previousHash) => {
  let timestamp = Date.now();
  let data = _data;
  let previousHash = _previousHash;
  let hash = calculateHash(timestamp, data, previousHash); 
  return {
    timestamp,
    data,
    previousHash,
    hash
  }
;}

// impure: sha256 causes side effects?
const calculateHash = (timestamp, data, previousHash) => {
  return SHA256(`${timestamp}${data}${previousHash}`).toString();
};

module.exports = {
  createBlock
}