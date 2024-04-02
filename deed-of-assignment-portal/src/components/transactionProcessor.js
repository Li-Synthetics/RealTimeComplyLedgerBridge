// transactionProcessor.js
/**
 * Main entry point for processing transactions with enhanced error handling.
 * This function attempts to process a batch of transactions and handles any errors that occur.
 * @param {Array} transactions - An array of transaction details to be processed.
 */

// Module imports and function declarations moved to the top to resolve 'used before defined' errors
const { executeL2LRDTransaction } = require('./ledgerIntegration');
const { notifyStakeholders } = require('./stakeholderCommunication');

/**
 * Processes a batch of L2L RD transactions.
 * @param {Array} transactions - An array of transaction details to be processed.
 */
async function processTransactions(transactions) {
  const transactionPromises = transactions.map(async (transaction) => {
    try {
      // Execute the L2L RD transaction
      const transactionResult = await executeL2LRDTransaction(transaction);
      // eslint-disable-next-line no-console
      console.log(`Transaction for ${transaction.amount} to ${transaction.receiver} processed successfully. Transaction ID: ${transactionResult.transactionId}`);
      // Notify stakeholders about the successful transaction
      notifyStakeholders([
        transaction.senderEmail,
        transaction.receiverEmail,
      ], 'Transaction Processed', `Your transaction with ID: ${transactionResult.transactionId} has been successfully processed.`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Failed to process transaction for ${transaction.amount} to ${transaction.receiver}:`, error.message);
      // Notify stakeholders about the failed transaction
      notifyStakeholders([
        transaction.senderEmail,
        transaction.receiverEmail,
      ], 'Transaction Failed', `Your transaction to ${transaction.receiver} has failed. Please contact support.`);
    }
  });

  await Promise.all(transactionPromises);
}

async function mainProcessTransactions(transactions) {
  try {
    await processTransactions(transactions);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An unexpected error occurred during transaction processing:', error.message);
    // Notify stakeholders about the system error
    transactions.forEach((transaction) => {
      notifyStakeholders([
        transaction.senderEmail,
        transaction.receiverEmail,
      ], 'Transaction Processing Error', 'An unexpected error occurred during the processing of your transaction. Our team is working to resolve the issue. Please try again later.');
    });
  }
}

/**
 * Initiates the processing of L2L RD transactions.
 * @param {Array} transactions - An array of transactions to be processed.
 */
function initiateTransactionProcessing(transactions) {
  // eslint-disable-next-line no-console
  console.log('Initiating L2L RD transaction processing...');
  processTransactions(transactions)
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('All transactions have been processed.');
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('An error occurred during transaction processing:', error);
    });
}

/* Removed the unused 'safeProcessTransactions' function to resolve the
+ 'defined but never used' error. */
module.exports = {
  initiateTransactionProcessing,
  mainProcessTransactions,
};
