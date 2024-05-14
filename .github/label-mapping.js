const process = require('process');
const fs = require('fs');
const yaml = require('js-yaml');

// Create a label conversion table from the label-mapping.yml file
// This is used to map existing labels to new labels
let conversion_table;

try {
  conversion_table = yaml.load(fs.readFileSync('.github/label-mapping.yml', 'utf8'));
} catch (error) {
  process.stderr(error);
  process.exit(1)
}

// Take existing labels and see if they exist in the yml file
// If they do, keep them. If they don't, remove them from the array
let existing_labels = (process.argv.slice(2)[0]).split(' '); // [ 'stateful serverless something' ]
let labels_that_matter = [];

existing_labels.forEach((label) => {
  // Check to see if the label exists in label-mapping.yml
  if (label in conversion_table) {
    labels_that_matter.push(label)
  }
})

// For each existing label that matters, map it to the
// correct backport label
let labels_to_add = [];

labels_that_matter.forEach((label) => {
  labels_to_add.push(...conversion_table[label])
})

// This is hard coded and should be fixed
// Look for `backport-skip` and remove it if it's the only new label to add
const skip = "backport-skip"
if (labels_to_add.includes(skip) && labels_to_add.length != 1){
  labels_to_add.splice(labels_to_add.indexOf(skip), 1)
}

process.stdout.write(`{
  "remove": "${labels_that_matter}",
  "add": "${labels_to_add}"
}`)
process.exit(0)