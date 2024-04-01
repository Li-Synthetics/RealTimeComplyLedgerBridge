// stakeholderCommunication.js

/**
 * Module for handling communication with stakeholders involved in the L2L RD process.
 * This includes payees, financial institutions, legal advisors, and any other relevant parties.
 */

const nodemailer = require('nodemailer'); // Assuming nodemailer is used for email communications

// Email configuration for sending out notifications
const transporter = nodemailer.createTransport({
  service: 'gmail', // Example using Gmail; adjust according to project needs
  auth: {
    user: 'yourEmail@example.com',
    pass: 'yourPassword'
  }
});

/**
 * Sends an email to a stakeholder.
 * @param {string} email - The email address of the stakeholder.
 * @param {string} subject - The subject of the email.
 * @param {string} message - The body of the email.
 */
function sendEmail(email, subject, message) {
  const mailOptions = {
    from: 'yourEmail@example.com',
    to: email,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log('Error sending email: ', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

/**
 * Notifies stakeholders about the initiation and progress of the L2L RD process.
 * @param {Array} stakeholders - An array of stakeholder email addresses.
 */
function notifyStakeholders(stakeholders) {
  stakeholders.forEach(email => {
    const subject = 'L2L RD Process Initiation and Progress Update';
    const message = 'Dear Stakeholder, \n\n' +
                    'We are pleased to inform you that the Ledger to Ledger Rail Deposit (L2L RD) process has been initiated. ' +
                    'You will receive updates on the progress of the transactions. \n\n' +
                    'Thank you for your cooperation. \n\n' +
                    'Best Regards, \n' +
                    'The L2L RD Team';
    sendEmail(email, subject, message);
  });
}

module.exports = { sendEmail, notifyStakeholders };
