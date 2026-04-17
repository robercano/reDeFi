import packageFile from '../../bundle/package.json'

const getApiVersion = (version?: 'v1' | 'v2') => {
  if (version) {
    // validate version with regex
    if (!/^v[1-2]$/.test(version)) {
      throw new Error('Invalid version format. Expected "v1" or "v2".')
    }
    return version
  }
  // Use statically imported package.json to get the version
  return `v${packageFile.version.charAt(0)}`
}

export { getApiVersion }
