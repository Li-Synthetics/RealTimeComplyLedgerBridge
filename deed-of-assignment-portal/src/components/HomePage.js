import React from 'react';

/**
 * HomePage component serves as the landing page of the application.
 * This component is lazily loaded to enhance the application's performance,
 * ensuring a quick and responsive user experience right from the start.
 * @returns {JSX.Element} The HomePage component.
 */
const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Deed of Assignment Portal</h1>
      <p>Streamline the creation and management of deeds of assignment and SWIFT messages for financial transactions.</p>
      <p>Our application leverages React for a dynamic user interface, Express.js for efficient backend services, and advanced security measures to ensure data integrity and confidentiality.</p>
    </div>
  );
};
