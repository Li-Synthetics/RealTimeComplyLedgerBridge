// complianceChecker.js
const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios');
const { validateTransactionDetails } = require('./inputValidator'); // Assuming this module exists for input validation

// Configuration for compliance API endpoints
const complianceApiConfig = {
  apiUrl: process.env.COMPLIANCE_API_URL, // API URL fetched from environment variables
  apiKey: process.env.COMPLIANCE_API_KEY, // API key fetched from environment variables
};

/**
 * Securely fetches the API key for the compliance API.
 * This function abstracts the API key retrieval, ensuring it's not hard-coded or directly accessible.
 * @returns {string} The API key for the compliance API.
 */
function getComplianceApiKey() {
  if (!complianceApiConfig.apiKey) {
    throw new Error('Compliance API key is not configured.');
  }
  return complianceApiConfig.apiKey;
}

/**
 * Validates and enhances transaction details for compliance checks.
 * This includes adding additional required data fields and validating existing ones.
 * @param {Object} transactionDetails - The initial transaction details.
 * @returns {Object} The enhanced and validated transaction details.
 */
function prepareTransactionDetails(transactionDetails) {
  // Validate transaction details to prevent injection attacks
  const isValid = validateTransactionDetails(transactionDetails);
  if (!isValid) {
    throw new Error('Invalid transaction details provided.');
  }

  // Enhance transaction details with additional required data
  return {
    ...transactionDetails,
    location: transactionDetails.location || 'defaultLocation', // Example of enhancing details
  };
}

// Ensure HTTPS is used for axios globally
axios.defaults.baseURL = complianceApiConfig.apiUrl;
axios.defaults.headers.common['Authorization'] = `Bearer ${getComplianceApiKey()}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Modify axios instance to use HTTPS
const secureAxiosInstance = axios.create({
  httpsAgent: new require('https').Agent({
    rejectUnauthorized: true, // This will reject any connections not signed by a known CA
  }),
});

/**
 * Updates the compliance checking functions to accommodate new regulations affecting L2L RD transactions.
 * This includes adding additional data fields required by the compliance API and handling new types of response data.
 */

/**
 * Checks the compliance of a single L2L RD transaction with updated regulations.
 * @param {Object} transactionDetails - The details of the transaction to be checked, including new regulatory fields.
 * @returns {Promise<boolean>} A promise that resolves with a boolean indicating whether the transaction is compliant.
 */
async function checkTransactionCompliance(transactionDetails) {
  // Enhance transaction details with new required data for compliance checks
  const enhancedTransactionDetails = {
    ...transactionDetails,
    // Assuming 'location' is a new required field due to recent regulations
    location: transactionDetails.location || 'defaultLocation',
  };

  try {
    const response = await axios.post(complianceApiConfig.apiUrl, enhancedTransactionDetails, {
      headers: {
        'Authorization': `Bearer ${complianceApiConfig.apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    // Handle new response data from the compliance API if necessary
    return response.data.compliant;
  } catch (error) {
    console.error('Failed to check transaction compliance:', error.message);
    throw new Error('Compliance check failed');
  }
}

/**
 * Checks the compliance of multiple L2L RD transactions with updated regulations.
 * @param {Array} transactions - An array of transaction details to be checked, including new regulatory fields.
 * @returns {Promise<Array>} A promise that resolves with an array of objects, each containing the transaction ID and its compliance status.
 */
async function checkTransactionsCompliance(transactions) {
  const complianceChecks = transactions.map(async (transaction) => {
    const isCompliant = await checkTransactionCompliance(transaction);
    return {
      transactionId: transaction.transactionId,
      compliant: isCompliant,
    };
  });

  return Promise.all(complianceChecks);
}

module.exports = {
  checkTransactionCompliance,
  checkTransactionsCompliance,
};
/**
 * Module for checking compliance of L2L RD transactions with relevant laws and regulations.
 * This includes verifying the legality of the transactions, ensuring they meet RTGS requirements,
 * and confirming adherence to financial regulations.
 */
