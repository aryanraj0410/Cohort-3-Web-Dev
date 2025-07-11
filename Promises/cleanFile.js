const fs = require('fs').promises;

function cleanFile(filePath) {
  return fs.writeFile(filePath, '')
    .then(() => {
      console.log(`${filePath} has been cleaned.`);
    })
    .catch((err) => {
      console.error(`Error cleaning file ${filePath}:`, err);
    });
}

// Usage
cleanFile('a.txt');
