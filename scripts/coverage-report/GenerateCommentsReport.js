const fs = require('fs')
const path = require('path')

const docsJsonPath = path.join(__dirname, '../../apps/docs/docs.json')
const outputPath = path.join(__dirname, '../../apps/docs/pages/comments-coverage.mdx')

if (!fs.existsSync(docsJsonPath)) {
  console.error('docs.json not found! Run typedoc --json docs.json first.')
  process.exit(1)
}

const data = JSON.parse(fs.readFileSync(docsJsonPath, 'utf8'))

const coverage = {}

function traverse(node, currentModule) {
  if (!node) return

  // Determine if this node is a module
  let mod = currentModule
  if (node.kindString === 'Module' || node.kind === 1 || node.kind === 2) {
    // If it's a file module, try to group it by package name, or just use the module name
    let cleanName = node.name.replace(/\\/g, '/')
    
    if (cleanName.includes('client/src')) {
      mod = 'sdk-client'
    } else if (cleanName.includes('react/src')) {
      mod = 'sdk-react'
    } else if (cleanName.includes('common/src')) {
      mod = 'sdk-common'
    } else if (cleanName.includes('protocol-plugins/service/src')) {
      mod = 'sdk-protocol-plugins'
    } else {
      mod = cleanName.split('/')[0] || 'unknown'
    }
  }

  // If it's an exportable symbol (Class, Interface, Type alias, Variable, Function, Enum)
  // Let's count it. We generally look at kind 128 (Class), 256 (Interface), 64 (Function), etc.
  // Actually, we can just look for things that are exported from the module.
  const isExportable = [
    4, // Enumeration
    32, // Variable
    64, // Function
    128, // Class
    256, // Interface
    4194304, // Type alias
  ].includes(node.kind)

  if (isExportable && mod) {
    if (!coverage[mod]) {
      coverage[mod] = { total: 0, documented: 0 }
    }
    
    coverage[mod].total++
    
    // Check if it has a comment
    let hasComment = false
    if (node.comment && (node.comment.summary || node.comment.blockTags)) {
      hasComment = true
    } else if (node.signatures && node.signatures.length > 0) {
      const sig = node.signatures[0]
      if (sig.comment && (sig.comment.summary || sig.comment.blockTags)) {
        hasComment = true
      }
    }
    
    if (hasComment) {
      coverage[mod].documented++
    }
  }

  if (node.children) {
    node.children.forEach(child => traverse(child, mod))
  }
}

// Start traversal
if (data.children) {
  data.children.forEach(child => traverse(child, null))
}

let totalCount = 0
let totalDoc = 0

let md = '# JSDoc / Comments Coverage Report\n\n'
md += 'This report tracks how many of the exported symbols (Classes, Interfaces, Functions, etc.) have proper JSDoc comments attached to them.\n\n'
md += '| Package | Exported Symbols | Documented | Coverage (%) |\n'
md += '|---|---|---|---|\n'

Object.keys(coverage).forEach(mod => {
  const stat = coverage[mod]
  if (stat.total === 0) return
  
  totalCount += stat.total
  totalDoc += stat.documented
  
  const pct = ((stat.documented / stat.total) * 100).toFixed(2)
  md += `| ${mod} | ${stat.total} | ${stat.documented} | ${pct}% |\n`
})

if (totalCount > 0) {
  const totalPct = ((totalDoc / totalCount) * 100).toFixed(2)
  md += `| **TOTAL** | **${totalCount}** | **${totalDoc}** | **${totalPct}%** |\n`
  
  fs.writeFileSync(outputPath, md, 'utf8')
  console.log(`Markdown comments coverage report successfully written to ${outputPath}`)

  if (Number(totalPct) < 30) {
    console.error(`\n[!] ERROR: Total comment coverage is ${totalPct}%, which is below the required 30%.`)
    process.exit(1)
  }
} else {
  fs.writeFileSync(outputPath, md, 'utf8')
  console.log(`Markdown comments coverage report successfully written to ${outputPath}`)
}
