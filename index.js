module.exports = (network) => {
  const networkName = network;

  if (!network) return "network is empty";

  return {
    artifacts: {
      WrapAmm: require("./artifacts/WrapAmm.json"),
      Factory: require("./artifacts/Factory.json"),
      BaseToken: require("./artifacts/BaseToken.json"),
      ChainlinkPriceFeed: require("./artifacts/ChainlinkPriceFeed.json"),
      ClearingHouse: require("./artifacts/ClearingHouse.json"),
      ClearingHouseConfig: require("./artifacts/ClearingHouseConfig.json"),
      EmergencyPriceFeed: require("./artifacts/EmergencyPriceFeed.json"),
      ERC20Mock: require("./artifacts/ERC20Mock.json"),
      LimitOrderBook: require("./artifacts/LimitOrderBook.json"),
      LimitOrderRewardVault: require("./artifacts/LimitOrderRewardVault.json"),
      LiquidityProvider: require("./artifacts/LiquidityProvider.json"),
      MarketTaker: require("./artifacts/MarketTaker.json"),
      Multicall: require("./artifacts/Multicall.json"),
      PositionMgmt: require("./artifacts/PositionMgmt.json"),
      QuoteToken: require("./artifacts/QuoteToken.json"),
      FairtradeReader: require("./artifacts/FairtradeReader.json"),
      FairtradeReferrer: require("./artifacts/FairtradeReferrer.json"),
      Vault: require("./artifacts/Vault.json"),
    },
    contracts: require(`./contracts/${networkName}.json`),
  };
};
