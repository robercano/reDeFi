const { JsonRpcProvider } = require('ethers');
require('dotenv').config({ path: '../../../.env' });
const axios = require('axios');

const account = process.env.TENDERLY_USER;
const project = process.env.TENDERLY_PROJECT;
const apiKey = process.env.TENDERLY_ACCESS_KEY;

async function run() {
  const res = await axios.post(`https://api.tenderly.co/api/v1/account/${account}/project/${project}/vnets`, {
    slug: "sdk-testnet-" + Date.now(),
    display_name: "SDK TestNet",
    fork_config: { network_id: 1, block_number: "latest" },
    virtual_network_config: { chain_config: { chain_id: 1 } }
  }, { headers: { 'X-Access-Key': apiKey, 'Content-Type': 'application/json' } });
  
  const rpcUrl = res.data.rpcs[0].url;
  const provider = new JsonRpcProvider(rpcUrl);
  const network = await provider.getNetwork();
  console.log("Network ID:", network.chainId);
}

run();
