// transactionDetailsCompiler.js

/**
 * Module for compiling transaction details for each L2L RD transaction.
 * This includes gathering necessary information from the UCC filing and preparing it for the transaction execution.
 */

const { prepareUccFilingDetails, submitUccFiling } = require('./uccFilingHandler');

/**
 * Compiles transaction details for L2L RD transactions.
 * @param {Array} transactions - An array of transaction objects, each containing details about the transaction.
 * @param {Object} deedOfAssignment - The Deed of Assignment details.
 * @returns {Promise<Array>} A promise that resolves with an array of compiled transaction details.
 */
async function compileTransactionDetails(transactions, deedOfAssignment) {
  const uccFilingDetails = prepareUccFilingDetails(deedOfAssignment);
  const filingConfirmation = await submitUccFiling(uccFilingDetails);

  // Assuming filingConfirmation contains a filingId that needs to be included in each transaction
  const compiledDetails = transactions.map(transaction => {
    return {
      ...transaction,
      filingId: filingConfirmation.filingId, // Add the UCC filing ID to each transaction
      deedOfAssignmentDetails: {
        assignor: deedOfAssignment.assignor,
        assignee: deedOfAssignment.assignee,
        rightsOrInterests: deedOfAssignment.rightsOrInterests,
      },
    };
  });

  return compiledDetails;
}

module.exports = {
  compileTransactionDetails,
};
