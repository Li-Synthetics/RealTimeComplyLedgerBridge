// documentationManager.js
const fs = require('fs');
const path = require('path');

// Object to map document types to their respective directory paths
// Ensure this object is declared only once
const documentationPaths = {
  deedOfAssignment: './docs/deedOfAssignment',
  ledgerEntries: './docs/ledgerEntries',
  uccFilingConfirmations: './docs/uccFilingConfirmations',
  transactionConfirmations: './docs/transactionConfirmations',
  // Add new document types and their paths here as the system evolves
};

/**
 * Saves a document to the specified directory.
 * @param {string} directory - The directory path where the document will be saved.
 * @param {string} fileName - The name of the file to be saved.
 * @param {string} content - The content of the document.
 */
function saveDocument(directory, fileName, content) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  const filePath = path.join(directory, fileName);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Document saved: ${filePath}`);
}

// Ensure directories exist for all documentation paths
Object.values(documentationPaths).forEach((directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`Created directory: ${directory}`);
  }
});

/**
 * Dynamically saves a document based on its type.
 * This function extends the capability to handle various document types as the system evolves.
 * @param {string} docType - The type of the document (e.g., 'deedOfAssignment', 'ledgerEntries').
 * @param {string} identifier - A unique identifier for the document, such as a transaction ID or timestamp.
 * @param {string} content - The content of the document.
 */
function saveDynamicDocument(docType, identifier, content) {
  // Check if the provided docType is supported
  if (!documentationPaths.hasOwnProperty(docType)) {
    console.error(`Document type '${docType}' is not supported.`);
    return;
  }

  // Generate a filename based on the document type and identifier
  const fileName = `${docType}_${identifier}.txt`;
  // Retrieve the directory path from the documentationPaths object
  const directory = documentationPaths[docType];

  // Save the document using the saveDocument function
  saveDocument(directory, fileName, content);
  console.log(`Saved ${docType} document: ${fileName}`);
}

/**
 * Updates or appends content to an existing document.
 * If the document does not exist, it will be created.
 * @param {string} directory - The directory path where the document is located.
 * @param {string} fileName - The name of the file to be updated or created.
 * @param {string} content - The content to append to the document.
 */
function updateDocument(directory, fileName, content) {
  const filePath = path.join(directory, fileName);
  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Append content to the existing file
    fs.appendFileSync(filePath, `\n${content}`, 'utf8');
    console.log(`Updated document: ${filePath}`);
  } else {
    // If the file does not exist, save it as a new document
    saveDocument(directory, fileName, content);
    console.log(`Created new document: ${filePath}`);
  }
}

/**
 * Placeholder for generating a compliance report.
 * Implement the function's logic according to your requirements.
 */
function generateComplianceReport() {
  console.log('Compliance report generation is not implemented yet.');
}

module.exports = {
  saveDeedOfAssignment: saveDocument.bind(null, documentationPaths.deedOfAssignment),
  saveLedgerEntry: saveDocument.bind(null, documentationPaths.ledgerEntries),
  saveUccFilingConfirmation: saveDocument.bind(null, documentationPaths.uccFilingConfirmations),
  saveTransactionConfirmation: saveDocument.bind(null, documentationPaths.transactionConfirmations),
  generateComplianceReport, // Now defined
  saveDynamicDocument,
  updateDocument,
};
