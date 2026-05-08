const axios = require('axios');
require('dotenv').config({ path: '../../../.env' });

async function run() {
  const res = await axios.post(`https://api.tenderly.co/api/v1/account/${process.env.TENDERLY_USER}/project/${process.env.TENDERLY_PROJECT}/vnets`, {
    slug: "sdk-testnet-" + Date.now(),
    display_name: "SDK TestNet",
    fork_config: { network_id: 1, block_number: "latest" },
    virtual_network_config: { chain_config: { chain_id: 1 } }
  }, { headers: { 'X-Access-Key': process.env.TENDERLY_ACCESS_KEY, 'Content-Type': 'application/json' } });
  
  const rpcUrl = res.data.rpcs[0].url;
  console.log("RPC:", rpcUrl);
  
  const rpcRes = await axios.post(rpcUrl, {
    jsonrpc: "2.0", method: "eth_chainId", params: [], id: 1
  });
  console.log("Chain ID:", parseInt(rpcRes.data.result, 16));
}
run();
