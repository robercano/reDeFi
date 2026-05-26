const fs = require('fs')
const originalReadFile = fs.promises.readFile
fs.promises.readFile = async function (path, ...args) {
  if (path === '/etc/os-release') {
    return `PRETTY_NAME="Ubuntu 24.04 LTS"
NAME="Ubuntu"
VERSION_ID="24.04"
VERSION="24.04"
ID=ubuntu
ID_LIKE=debian`
  }
  return originalReadFile.call(this, path, ...args)
}

require('playwright/cli')
