import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const docsDataDir = path.join(rootDir, 'apps', 'docs', 'data');

if (!fs.existsSync(docsDataDir)) {
  fs.mkdirSync(docsDataDir, { recursive: true });
}

function findCoverageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (['node_modules', '.git', 'dist', '.turbo'].includes(file)) continue;
      findCoverageFiles(filePath, fileList);
    } else if (file === 'coverage-summary.json') {
      fileList.push(filePath);
    }
  }

  return fileList;
}

const allCoverageFiles = findCoverageFiles(path.join(rootDir, 'packages', 'sdk'));

const aggregated = {};
let totalStatements = 0, coveredStatements = 0;
let totalBranches = 0, coveredBranches = 0;
let totalFunctions = 0, coveredFunctions = 0;
let totalLines = 0, coveredLines = 0;

for (const file of allCoverageFiles) {
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const total = data.total;
    if (!total || !total.lines || total.lines.pct === 'Unknown' || total.lines.pct === 0) continue;

    const packageNameMatch = file.match(/packages\/sdk\/([^\/]+(\/[^\/]+)?)/);
    const packageName = packageNameMatch ? packageNameMatch[1] : path.basename(path.dirname(path.dirname(file)));

    aggregated[packageName] = total;

    totalStatements += total.statements.total;
    coveredStatements += total.statements.covered;
    
    totalBranches += total.branches.total;
    coveredBranches += total.branches.covered;
    
    totalFunctions += total.functions.total;
    coveredFunctions += total.functions.covered;
    
    totalLines += total.lines.total;
    coveredLines += total.lines.covered;
  } catch (err) {
    console.error('Error reading coverage file:', file, err);
  }
}

aggregated['Total'] = {
  statements: { total: totalStatements, covered: coveredStatements, pct: totalStatements ? (coveredStatements / totalStatements * 100).toFixed(2) : 0 },
  branches: { total: totalBranches, covered: coveredBranches, pct: totalBranches ? (coveredBranches / totalBranches * 100).toFixed(2) : 0 },
  functions: { total: totalFunctions, covered: coveredFunctions, pct: totalFunctions ? (coveredFunctions / totalFunctions * 100).toFixed(2) : 0 },
  lines: { total: totalLines, covered: coveredLines, pct: totalLines ? (coveredLines / totalLines * 100).toFixed(2) : 0 }
};

const outPath = path.join(docsDataDir, 'coverage.json');
fs.writeFileSync(outPath, JSON.stringify(aggregated, null, 2));

console.log(`Aggregated coverage from ${allCoverageFiles.length} packages into ${outPath}`);
