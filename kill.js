const { execSync } = require('child_process');
try {
  console.log("Killing next build...");
  execSync('pkill -f "next build"');
} catch (e) { console.error(e.message); }
try {
  console.log("Killing turbo...");
  execSync('pkill -f turbo');
} catch (e) { console.error(e.message); }
console.log("Done.");
