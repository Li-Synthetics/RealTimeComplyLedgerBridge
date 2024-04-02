import axios from 'axios';

/**
 * This module defines a centralized API handler for the application.
 * It utilizes axios for HTTP requests and provides a structured way to interact with backend services.
 */

// Base configuration for axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Handles the response from API calls.
 * @param {Object} response - The axios response object.
 * @returns The data from the response.
 */
const handleResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw new Error(`API responded with status code ${response.status}`);
};

/**
 * Handles errors from API calls.
 * @param {Object} error - The error object.
 * @returns A rejected promise containing the error details.
 */
const handleError = (error) => {
  // Log error for debugging
  console.error('API call failed:', error);
  return Promise.reject(error.response || error.message);
};

/**
 * GET request handler.
 * @param {string} url - The endpoint URL.
 * @param {Object} [params={}] - The query parameters.
 * @returns The response data.
 */
const get = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/**
 * POST request handler.
 * @param {string} url - The endpoint URL.
 * @param {Object} [data={}] - The body data.
 * @returns The response data.
 */
const post = async (url, data = {}) => {
  try {
    const response = await api.post(url, data);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

// Export the API handler methods
export default {
  get,
  post,
};
