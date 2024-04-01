// feedbackCollector.js

/**
 * Module for collecting and managing feedback from stakeholders involved in the L2L RD process.
 * This includes gathering feedback through various channels and storing it for analysis.
 */

const fs = require('fs'); // Node.js file system module for handling file operations
const readline = require('readline'); // Module for reading input from the console
const { sendEmail } = require('./stakeholderCommunication.js'); // Importing sendEmail function from stakeholderCommunication module

// File path for storing feedback data
const feedbackDataPath = './data/feedbackData.json';

/**
 * Collects feedback from stakeholders via command line interface.
 */
function collectFeedbackCLI() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Please enter your feedback: ', (feedback) => {
    const feedbackObject = { feedback: feedback, timestamp: new Date().toISOString() };
    storeFeedback(feedbackObject);
    rl.close();
  });
}

/**
 * Stores feedback in a JSON file.
 * @param {Object} feedback - Feedback object containing the feedback and timestamp.
 */
function storeFeedback(feedback) {
  fs.readFile(feedbackDataPath, (err, data) => {
    if (err) {
      console.error('Error reading feedback data file:', err);
      return;
    }
    let feedbacks = JSON.parse(data);
    feedbacks.push(feedback);
    fs.writeFile(feedbackDataPath, JSON.stringify(feedbacks, null, 2), (err) => {
      if (err) {
        console.error('Error writing to feedback data file:', err);
      } else {
        console.log('Feedback stored successfully.');
      }
    });
  });
}

/**
 * Sends an email to collect feedback from stakeholders.
 * @param {Array} stakeholders - An array of stakeholder email addresses.
 */
function requestFeedbackByEmail(stakeholders) {
  stakeholders.forEach(email => {
    const subject = 'Request for Feedback on L2L RD Process';
    const message = 'Dear Stakeholder, \n\n' +
                    'We value your input and would like to request your feedback on the recent L2L RD process. ' +
                    'Please let us know your thoughts, suggestions, and any areas for improvement. \n\n' +
                    'Thank you for your cooperation and support. \n\n' +
                    'Best Regards, \n' +
                    'The L2L RD Team';
    sendEmail(email, subject, message);
  });
}

module.exports = { collectFeedbackCLI, requestFeedbackByEmail };
