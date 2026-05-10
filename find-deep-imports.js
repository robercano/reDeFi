const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const searchDirs = [path.join(rootDir, 'packages'), path.join(rootDir, 'apps')];

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        walk(fullPath, callback);
      }
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      callback(fullPath);
    }
  }
}

let found = false;

searchDirs.forEach(dir => {
  walk(dir, (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    lines.forEach((line, i) => {
      // Find imports that match @thesolidchain/xxx/yyy where yyy is NOT a known subpath like vitest.base
      const regex = /from\s+['"](@thesolidchain\/[a-zA-Z0-9-]+)\/([^'"]+)['"]/g;
      let match;
      while ((match = regex.exec(line)) !== null) {
        const fullImport = `${match[1]}/${match[2]}`;
        // Ignore vitest config imports
        if (fullImport.includes('config-vitest/vitest.base')) continue;
        if (fullImport.includes('testing-utils/utils/AllowanceDecoding')) continue;
        
        console.log(`Found deep package import in ${filePath.replace(rootDir + '/', '')}:${i + 1}`);
        console.log(`  ${line}`);
        found = true;
      }
    });
  });
});

if (!found) {
  console.log("No deep imports found!");
}
