// swiftMessageHandler.js

/**
 * Formats and generates SWIFT messages for financial transactions.
 */

/**
 * Generates a SWIFT MT103 message for a single transaction.
 * @param {Object} transactionDetails - The transaction details.
 * @returns {String} The formatted SWIFT MT103 message.
 */
function generateMT103Message(transactionDetails) {
  const {
    transactionReference, dateValue, currency, amount, senderAccount, receiverAccount, remittanceInformation,
  } = transactionDetails;

  const mt103Message = `{1:F01YOURBANKXXXX0000000000}{2:I103RECEIVERBANKXXXXN}{3:{108:${transactionReference}}}
  {4:
  :20:${transactionReference}
  :23B:CRED
  :32A:${dateValue},${currency},${amount}
  :50A:${senderAccount}
  :59A:/${receiverAccount}
  :70:${remittanceInformation}
  :71A:OUR
  -}
  {5:{CHK:CHECKSUM}}`;

  return mt103Message;
}

module.exports = {
  generateMT103Message,
};
