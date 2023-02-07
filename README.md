# How to use

## 1. install

```cmd
   yarn add -D https://github.com/fairtrade-io/fairtrade-deployments.git#v0.0.1
```

## 2. import

```js
const deployments = require("fairtrade-deployments");
const deploymentsData = deployments(network); // network=arbitrumGoerli | arbitrum

console.log(deploymentsData.contracts);
console.log(deploymentsData.artifacts);
```
