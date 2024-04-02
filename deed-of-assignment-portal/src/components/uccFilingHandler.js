const { generateMT103Message } = require('./swiftMessageHandler');

// Add this function to the uccFilingHandler.js module
/**
 * Generates and logs a SWIFT MT103 message for a UCC filing.
 * @param {Object} filingDetails - The UCC filing details.
 */
async function logSwiftMessageForFiling(filingDetails) {
  // Convert UCC filing details to SWIFT message format
  const swiftMessageDetails = {
    transactionReference: filingDetails.transactionId, // Assuming transactionId is part of filingDetails
    dateValue: 'DATE', // Placeholder, replace with actual date
    currency: 'EUR', // Using EUR instead of GRU, and will replace with GRU at a later date
    amount: filingDetails.amount, // Assuming amount is part of filingDetails
    senderAccount: filingDetails.assignorAccount, // Placeholder or extract from filingDetails
    receiverAccount: filingDetails.assigneeAccount, // Placeholder or extract from filingDetails
    remittanceInformation: 'UCC Filing', // Placeholder or more specific info
  };

  const mt103Message = generateMT103Message(swiftMessageDetails);
  console.log('Generated SWIFT MT103 Message:', mt103Message);
}

// Ensure to call logSwiftMessageForFiling(filingDetails) where appropriate in your filing process
