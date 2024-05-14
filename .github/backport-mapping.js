const process = require('process');
const fs = require('fs');
const yaml = require('js-yaml');

// Create a backport conversion table from the backport-mapping.yml file
// This is used to map backport labels to directories that should be deleted
let conversion_table;

try {
  conversion_table = yaml.load(fs.readFileSync('.github/backport-mapping.yml', 'utf8'));
} catch (error) {
  process.stderr(error);
  process.exit(1)
}
