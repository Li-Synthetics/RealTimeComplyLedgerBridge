import React from 'react';

/**
 * NotFoundPage component displays a message indicating that the requested page was not found.
 * This component is part of the application's routing system, providing feedback for invalid routes.
 * @returns {JSX.Element} The NotFoundPage component.
 */
const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
