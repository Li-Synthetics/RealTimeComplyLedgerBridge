const fs = require('fs');
const path = require('path');
const deedOfAssignmentTemplate = fs.readFileSync(path.join(__dirname, '../data/deedOfAssignmentTemplate.txt'), 'utf8');

// Function to compile documents based on input data
function compileDocuments(data) {
  // Replace placeholders in the template with actual data
  let compiledDocument = deedOfAssignmentTemplate.replace('[Jurisdiction]', data.jurisdiction);
  // Additional replacements as needed
  // Save or return the compiled document
  console.log(compiledDocument);
  // For demonstration, printing the compiled document
}

// Example usage
compileDocuments({ jurisdiction: 'State of Colorado' });