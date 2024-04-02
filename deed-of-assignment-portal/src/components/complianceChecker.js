// complianceChecker.js
const dotenv = require('dotenv');
const axios = require('axios');
const https = require('https');
const { validateTransactionDetails } = require('./inputValidator');

dotenv.config();

const complianceApiConfig = {
  apiUrl: process.env.COMPLIANCE_API_URL,
  apiKey: process.env.COMPLIANCE_API_KEY,
};

function getComplianceApiKey() {
  if (!complianceApiConfig.apiKey) {
    throw new Error('Compliance API key is not configured.');
  }
  return complianceApiConfig.apiKey;
}

function configureAxios() {
  axios.defaults.baseURL = complianceApiConfig.apiUrl;
  axios.defaults.headers.common.Authorization = `Bearer ${getComplianceApiKey()}`;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
}

function logError(message, error) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error(message, error);
  }
}

const secureAxiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: true,
  }),
});

function prepareTransactionDetails(transactionDetails) {
  const isValid = validateTransactionDetails(transactionDetails);
  if (!isValid) {
    throw new Error('Invalid transaction details provided.');
  }

  return {
    ...transactionDetails,
    location: transactionDetails.location || 'defaultLocation',
  };
}

async function checkCompliance(transactionDetails) {
  try {
    const preparedDetails = prepareTransactionDetails(transactionDetails);
    const response = await secureAxiosInstance.post('/checkCompliance', preparedDetails);

    if (response.status === 200 && response.data.complianceStatus) {
      return {
        success: true,
        message: 'Transaction is compliant.',
        data: response.data,
      };
    }
    return {
      success: false,
      message: 'Transaction is not compliant.',
      data: response.data,
    };
  } catch (error) {
    logError('Error checking compliance:', error);
    return {
      success: false,
      message: 'Error checking compliance. Please try again.',
      error,
    };
  }
}

async function checkTransactionsCompliance(transactions) {
  const complianceChecks = transactions.map(checkCompliance);
  return Promise.all(complianceChecks);
}

configureAxios();

module.exports = {
  checkTransactionCompliance: checkCompliance,
  checkTransactionsCompliance,
};
