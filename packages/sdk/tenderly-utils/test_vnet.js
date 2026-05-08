const axios = require('axios');
require('dotenv').config({ path: '../../../.env' });

const account = process.env.TENDERLY_USER;
const project = process.env.TENDERLY_PROJECT;
const apiKey = process.env.TENDERLY_ACCESS_KEY;

async function run() {
  try {
    const res = await axios.post(`https://api.tenderly.co/api/v1/account/${account}/project/${project}/vnets`, {
      slug: "sdk-testnet-" + Date.now(),
      display_name: "SDK TestNet",
      fork_config: {
        network_id: 1,
        block_number: "latest"
      },
      virtual_network_config: {
        chain_config: {
          chain_id: 1
        }
      }
    }, {
      headers: {
        'X-Access-Key': apiKey,
        'Content-Type': 'application/json'
      }
    });
    console.log(JSON.stringify(res.data, null, 2));
  } catch (err) {
    console.error(err.response ? JSON.stringify(err.response.data, null, 2) : err.message);
  }
}

run();
