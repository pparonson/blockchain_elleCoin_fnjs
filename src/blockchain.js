const R = require("ramda");

const {createBlock, initializeGenesis, isBlockValid} = require("./block");

// initializeBlockchain :: [a]
const initializeBlockchain = () => [initializeGenesis()];

// appendNewBlock :: a -> [b] -> [b]
const appendNewBlock = R.curry((data, arr) => {
  // previousHash :: [b] -> b -> String
  const previousHash = R.compose(
    getPreviousHash,
    getLastBlock
  );

  return [...arr, createBlock(previousHash(arr), data)];
});

// getPreviousHash :: a -> String
const getPreviousHash = R.prop("hash");

// getLastBlock :: [a] -> a
const getLastBlock = R.last();

// isChainValid ::
const isChainValid


module.exports = {
  initializeBlockchain,
  appendNewBlock,
  isChainValid
};
