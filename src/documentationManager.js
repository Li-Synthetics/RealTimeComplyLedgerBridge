// documentationManager.js

/**
 * Module for managing documentation and record-keeping of the entire L2L RD process.
 * This includes maintaining records of the Deed of Assignment, ledger entries, UCC filing confirmations, and L2L RD transaction confirmations.
 */

const fs = require('fs');
const path = require('path');

// Directory paths for storing documentation
const documentationPaths = {
  deedOfAssignment: './documentation/deedOfAssignment/',
  ledgerEntries: './documentation/ledgerEntries/',
  uccFilingConfirmations: './documentation/uccFilingConfirmations/',
  transactionConfirmations: './documentation/transactionConfirmations/',
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

/**
 * Saves the Deed of Assignment document.
 * @param {string} content - The content of the Deed of Assignment.
 */
function saveDeedOfAssignment(content) {
  const fileName = `DeedOfAssignment_${new Date().toISOString()}.txt`;
  saveDocument(documentationPaths.deedOfAssignment, fileName, content);
}

/**
 * Saves a ledger entry document.
 * @param {string} transactionId - The transaction ID for the ledger entry.
 * @param {string} content - The content of the ledger entry.
 */
function saveLedgerEntry(transactionId, content) {
  const fileName = `LedgerEntry_${transactionId}.txt`;
  saveDocument(documentationPaths.ledgerEntries, fileName, content);
}

/**
 * Saves a UCC filing confirmation document.
 * @param {string} filingId - The filing ID for the UCC filing.
 * @param {string} content - The content of the UCC filing confirmation.
 */
function saveUccFilingConfirmation(filingId, content) {
  const fileName = `UCCFilingConfirmation_${filingId}.txt`;
  saveDocument(documentationPaths.uccFilingConfirmations, fileName, content);
}

/**
 * Saves a transaction confirmation document.
 * @param {string} transactionId - The transaction ID for the L2L RD transaction.
 * @param {string} content - The content of the transaction confirmation.
 */
function saveTransactionConfirmation(transactionId, content) {
  const fileName = `TransactionConfirmation_${transactionId}.txt`;
  saveDocument(documentationPaths.transactionConfirmations, fileName, content);
}

module.exports = {
  saveDeedOfAssignment,
  saveLedgerEntry,
  saveUccFilingConfirmation,
  saveTransactionConfirmation,
};
