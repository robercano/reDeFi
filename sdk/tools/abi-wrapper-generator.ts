import fs from 'fs'
import path from 'path'

const TARGET_CONTRACTS = ['ERC20', 'ERC4626', 'ERC1155', 'ERC721']

function findAllOZDirs(): string[] {
  const rootPnpm = path.join(__dirname, '../../../node_modules/.pnpm')
  const localPnpm = path.join(__dirname, '../../node_modules/.pnpm')
  const dirsToSearch = [rootPnpm, localPnpm]
  const ozDirs: string[] = []

  for (const pnpmDir of dirsToSearch) {
    if (!fs.existsSync(pnpmDir)) continue
    const entries = fs.readdirSync(pnpmDir)
    for (const entry of entries) {
      if (entry.includes('@openzeppelin+contracts@')) {
        const fullPath = path.join(pnpmDir, entry, 'node_modules/@openzeppelin/contracts')
        if (fs.existsSync(fullPath)) ozDirs.push(fullPath)
      }
    }
  }

  const defaultDir = path.join(__dirname, '../node_modules/@openzeppelin/contracts')
  if (fs.existsSync(defaultDir)) ozDirs.push(defaultDir)

  const resolved = new Set<string>()
  const finalDirs: string[] = []
  for (const d of ozDirs) {
    try {
      const real = fs.realpathSync(d)
      if (!resolved.has(real)) {
        resolved.add(real)
        finalDirs.push(real)
      }
    } catch (e) {}
  }
  return finalDirs
}

function processOzDir(ozDir: string) {
  const pkgJsonPath = path.join(ozDir, 'package.json')
  if (!fs.existsSync(pkgJsonPath)) return
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'))
  const version = pkgJson.version

  const buildDir = path.join(ozDir, 'build/contracts')

  const formattedVersion = version.replace(/\./g, '_')
  const VERSION_DIR = path.join(OUT_DIR, `V${formattedVersion}`)

  // if this directory exists with something in it, do we skip everything?
  // generateClass handles checking per file.

  const allSolFiles = getAllSolFiles(ozDir)
  const docsByFunction: Record<string, string> = Object.create(null)
  const docsByContract: Record<string, string> = Object.create(null)

  for (const file of allSolFiles) {
    const content = fs.readFileSync(file, 'utf8')
    const parts = content.split('/**')
    for (let i = 1; i < parts.length; i++) {
      const endIdx = parts[i].indexOf('*/')
      if (endIdx === -1) continue
      const docBlock = parts[i].substring(0, endIdx)
      const afterDoc = parts[i].substring(endIdx + 2).trimStart()
      const match = afterDoc.match(/^(?:function|constructor)\s+([a-zA-Z0-9_]+)/)
      if (match) {
        const funcName = match[1]
        const isShallow = docBlock.includes('@dev See {')
        if (
          !docsByFunction[funcName] ||
          (docsByFunction[funcName].includes('@dev See {') && !isShallow)
        ) {
          docsByFunction[funcName] = `  /**${docBlock}*/\n`
        }
      }
      const contractMatch = afterDoc.match(
        /^(?:abstract\s+contract|contract|interface|library)\s+([a-zA-Z0-9_]+)/,
      )
      if (contractMatch) {
        const cName = contractMatch[1]
        if (!docsByContract[cName]) {
          docsByContract[cName] = `/**${docBlock}*/\n`
        }
      }
    }
  }

  for (const contract of TARGET_CONTRACTS) {
    generateClass(contract, version, buildDir, docsByFunction, docsByContract)
  }
}

const OUT_DIR = path.join(__dirname, '../contracts-provider/service/src/generated')

function mapType(solidityType: string): string {
  if (solidityType.endsWith('[]')) {
    const baseType = solidityType.slice(0, -2)
    return `readonly ${mapType(baseType)}[]`
  }
  if (solidityType.startsWith('uint') || solidityType.startsWith('int')) {
    if (solidityType === 'uint8' || solidityType === 'uint16') return 'number'
    return 'bigint'
  }
  if (solidityType === 'address') return 'AddressValue'
  if (solidityType === 'bool') return 'boolean'
  if (solidityType.includes('bytes')) return '`0x${string}`'
  return 'string'
}

function getAllSolFiles(dir: string): string[] {
  let results: string[] = []
  if (!fs.existsSync(dir)) return results
  const list = fs.readdirSync(dir)
  for (const file of list) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory() && file !== 'node_modules' && file !== 'build') {
      results = results.concat(getAllSolFiles(filePath))
    } else if (file.endsWith('.sol')) {
      results.push(filePath)
    }
  }
  return results
}

function generateClass(
  contractName: string,
  version: string,
  buildDir: string,
  docsByFunction: Record<string, string>,
  docsByContract: Record<string, string>,
) {
  const abiPath = path.join(buildDir, `${contractName}.json`)
  if (!fs.existsSync(abiPath)) {
    console.log(`Skipping ${contractName}, ABI not found.`)
    return
  }

  const abiJson = JSON.parse(fs.readFileSync(abiPath, 'utf8'))
  const abi = abiJson.abi || abiJson

  const formattedVersion = version.replace(/\./g, '_')
  const className = `${contractName}V${formattedVersion}`
  const abiName = `${className}Abi`

  const VERSION_DIR = path.join(OUT_DIR, `V${formattedVersion}`)
  if (fs.existsSync(VERSION_DIR)) {
    // Only return if everything is fully generated to avoid partial skips? Actually we check if it has the files.
    // Given the request: "make sure not to autogenerate a version that already exists"
    // We check if the expected file exists.
    const wrapperPath = path.join(VERSION_DIR, `${className}.ts`)
    if (fs.existsSync(wrapperPath)) {
      console.log(`Skipping ${contractName} for version ${version}, already generated.`)
      return
    }
  }

  if (!fs.existsSync(VERSION_DIR)) {
    fs.mkdirSync(VERSION_DIR, { recursive: true })
  }

  const ABIS_DIR = path.join(VERSION_DIR, 'abis')
  if (!fs.existsSync(ABIS_DIR)) {
    fs.mkdirSync(ABIS_DIR, { recursive: true })
  }
  fs.writeFileSync(
    path.join(ABIS_DIR, `${abiName}.ts`),
    `export const ${abiName} = ${JSON.stringify(abi, null, 2)} as const\n`,
  )

  const INTERFACES_DIR = path.join(VERSION_DIR, 'interfaces')
  if (!fs.existsSync(INTERFACES_DIR)) {
    fs.mkdirSync(INTERFACES_DIR, { recursive: true })
  }

  const interfaceName = `I${className}`
  const interfacePath = path.join(INTERFACES_DIR, `${interfaceName}.ts`)
  const needsInterface = !fs.existsSync(interfacePath)
  let interfaceContent = ''
  if (needsInterface) {
    const contractHeaderDoc =
      docsByContract['I' + contractName] || docsByContract[contractName] || ''
    interfaceContent = `// AUTOGENERATED FILE - DO NOT EDIT\n`
    interfaceContent += `import { TransactionInfo, AddressValue } from '@summerfi/sdk-common'\n\n`
    if (contractHeaderDoc) interfaceContent += contractHeaderDoc
    interfaceContent += `export interface ${interfaceName} {\n`
  }

  let content = `// AUTOGENERATED FILE - DO NOT EDIT\n`
  content += `import { ContractWrapper } from '../../implementation/contracts/ContractWrapper'\n`
  content += `import { IBlockchainClient } from '@summerfi/blockchain-client-common'\n`
  content += `import { IAddress, TransactionInfo, AddressValue } from '@summerfi/sdk-common'\n`
  content += `import { ${abiName} } from './abis/${abiName}'\n`
  content += `import { ${interfaceName} } from './interfaces/${interfaceName}'\n\n`

  content += `export class ${className}<TClient extends IBlockchainClient, TAddress extends IAddress> extends ContractWrapper<typeof ${abiName}, TClient, TAddress> implements ${interfaceName} {\n`
  content += `  public constructor(params: { blockchainClient: TClient; chainInfo: import('@summerfi/sdk-common').IChainInfo; address: TAddress }) {\n`
  content += `    super(params)\n`
  content += `  }\n\n`
  content += `  getAbi() { return ${abiName} }\n\n`

  const processedFuncs = new Set()

  for (const item of abi) {
    if (item.type !== 'function') continue
    if (processedFuncs.has(item.name)) continue
    processedFuncs.add(item.name)

    const args = item.inputs
      .map((arg: any, i: number) => `${arg.name || 'arg' + i}: ${mapType(arg.type)}`)
      .join(', ')
    const argNames = item.inputs.map((arg: any, i: number) => arg.name || 'arg' + i).join(', ')

    const isView = item.stateMutability === 'view' || item.stateMutability === 'pure'

    const comment = docsByFunction[item.name] || ''

    if (isView) {
      let retType = 'unknown'
      if (item.outputs && item.outputs.length === 1) {
        retType = mapType(item.outputs[0].type)
      } else if (item.outputs && item.outputs.length > 1) {
        retType = `readonly [${item.outputs.map((out: any) => mapType(out.type)).join(', ')}]`
      }

      const callArgs = argNames ? `[${argNames}]` : ''
      content += comment
      content += `  public async ${item.name}(${args}): Promise<${retType}> {\n`
      content += `    return this._contract.read.${item.name}(${callArgs}) as Promise<${retType}>\n`
      content += `  }\n\n`

      if (needsInterface) {
        interfaceContent += comment
        interfaceContent += `  ${item.name}(${args}): Promise<${retType}>\n\n`
      }
    } else {
      const txArgs = argNames ? `\n      args: [${argNames}],` : ''
      content += comment
      content += `  public async ${item.name}(${args}): Promise<TransactionInfo> {\n`
      content += `    return this._createTransaction({\n`
      content += `      functionName: '${item.name}',${txArgs}\n`
      content += `      description: '${item.name} execution'\n`
      content += `    })\n`
      content += `  }\n\n`

      if (needsInterface) {
        interfaceContent += comment
        interfaceContent += `  ${item.name}(${args}): Promise<TransactionInfo>\n\n`
      }
    }
  }

  content += `}\n`

  if (needsInterface) {
    interfaceContent += `}\n`
    fs.writeFileSync(interfacePath, interfaceContent)
    console.log(`Generated ${interfaceName}.ts`)
  }

  if (!fs.existsSync(VERSION_DIR)) {
    fs.mkdirSync(VERSION_DIR, { recursive: true })
  }

  fs.writeFileSync(path.join(VERSION_DIR, `${className}.ts`), content)
  console.log(`Generated ${className}.ts`)
}

try {
  const ozDirs = findAllOZDirs()
  if (ozDirs.length === 0) {
    console.error('No OpenZeppelin directories found.')
    process.exit(1)
  }

  for (const ozDir of ozDirs) {
    console.log(`Processing OpenZeppelin at ${ozDir}`)
    processOzDir(ozDir)
  }

  // Generate ContractsFactory
  const versions = fs
    .readdirSync(OUT_DIR)
    .filter((d) => d.startsWith('V') && fs.statSync(path.join(OUT_DIR, d)).isDirectory())
  if (versions.length > 0) {
    let factoryContent = `// AUTOGENERATED FILE - DO NOT EDIT\n`
    factoryContent += `import { IBlockchainClient } from '@summerfi/blockchain-client-common'\n`
    factoryContent += `import { IAddress, IChainInfo } from '@summerfi/sdk-common'\n\n`
    factoryContent += `/** AUTOGENERATED WRAPPERS */\n`

    for (const v of versions) {
      for (const contract of TARGET_CONTRACTS) {
        factoryContent += `import { ${contract}${v} } from '../generated/${v}/${contract}${v}'\n`
      }
    }

    factoryContent += `\nexport enum OpenZeppelinVersion {\n`
    for (const v of versions) {
      const semver = v.substring(1).replace(/_/g, '.')
      factoryContent += `  ${v} = '${semver}',\n`
    }
    factoryContent += `}\n\n`

    factoryContent += `export class ContractsFactory {\n`

    for (const contract of TARGET_CONTRACTS) {
      factoryContent += `  /**\n`
      factoryContent += `   * Retrieves an ${contract} wrapper implementation for the specified OpenZeppelin version\n`
      factoryContent += `   */\n`
      factoryContent += `  public static get${contract}<TClient extends IBlockchainClient, TAddress extends IAddress>(params: {\n`
      factoryContent += `    blockchainClient: TClient\n`
      factoryContent += `    chainInfo: IChainInfo\n`
      factoryContent += `    address: TAddress\n`
      factoryContent += `    version?: OpenZeppelinVersion\n`
      factoryContent += `  }) {\n`
      const defaultV = versions[versions.length - 1]
      factoryContent += `    const version = params.version ?? OpenZeppelinVersion.${defaultV}\n`
      factoryContent += `    switch (version) {\n`
      for (const v of versions) {
        factoryContent += `      case OpenZeppelinVersion.${v}:\n`
        if (v === defaultV) {
          factoryContent += `      default:\n`
        }
        factoryContent += `        return new ${contract}${v}<TClient, TAddress>({\n`
        factoryContent += `          blockchainClient: params.blockchainClient,\n`
        factoryContent += `          chainInfo: params.chainInfo,\n`
        factoryContent += `          address: params.address,\n`
        factoryContent += `        })\n`
      }
      factoryContent += `    }\n`
      factoryContent += `  }\n\n`
    }

    factoryContent += `}\n`

    const FACTORY_DIR = path.join(__dirname, '../contracts-provider/service/src/factory')
    if (!fs.existsSync(FACTORY_DIR)) fs.mkdirSync(FACTORY_DIR, { recursive: true })
    fs.writeFileSync(path.join(FACTORY_DIR, 'ContractsFactory.ts'), factoryContent)
    console.log('Generated ContractsFactory.ts')
  }
} catch (e) {
  console.error('Failed to generate wrappers', e)
  process.exit(1)
}
