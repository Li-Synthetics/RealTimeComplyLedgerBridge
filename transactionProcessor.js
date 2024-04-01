// transactionProcessor.js

/**
 * Module for processing L2L RD transactions, including initiating, monitoring, and verifying transactions.
 * Utilizes the ledgerIntegration module for executing transactions and the stakeholderCommunication module
 * for notifying stakeholders about transaction statuses.
 */

const { executeL2LRDTransaction } = require('./ledgerIntegration');
const { notifyStakeholders } = require('./stakeholderCommunication');

/**
 * Processes a batch of L2L RD transactions.
 * @param {Array} transactions - An array of transaction details to be processed.
 */
async function processTransactions(transactions) {
  for (let transaction of transactions) {
    try {
      // Execute the L2L RD transaction
      const transactionResult = await executeL2LRDTransaction(transaction);
      console.log(`Transaction for ${transaction.amount} to ${transaction.receiver} processed successfully. Transaction ID: ${transactionResult.transactionId}`);

      // Notify stakeholders about the successful transaction
      notifyStakeholders([
        transaction.senderEmail,
        transaction.receiverEmail
      ], 'Transaction Processed', `Your transaction with ID: ${transactionResult.transactionId} has been successfully processed.`);

    } catch (error) {
      console.error(`Failed to process transaction for ${transaction.amount} to ${transaction.receiver}:`, error.message);

      // Notify stakeholders about the failed transaction
      notifyStakeholders([
        transaction.senderEmail,
        transaction.receiverEmail
      ], 'Transaction Failed', `Your transaction to ${transaction.receiver} has failed. Please contact support.`);
    }
  }
}

/**
 * Initiates the processing of L2L RD transactions.
 * @param {Array} transactions - An array of transactions to be processed.
 */
function initiateTransactionProcessing(transactions) {
  console.log('Initiating L2L RD transaction processing...');
  processTransactions(transactions)
    .then(() => console.log('All transactions have been processed.'))
    .catch(error => console.error('An error occurred during transaction processing:', error));
}

module.exports = { initiateTransactionProcessing };
