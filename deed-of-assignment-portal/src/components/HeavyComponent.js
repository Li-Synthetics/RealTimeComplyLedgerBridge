import React from 'react';

/**
 * A component that represents a heavy computational or data-intensive operation.
 * This component is lazily loaded to improve the application's performance.
 * @returns {JSX.Element} The HeavyComponent element.
 */
const HeavyComponent = () => {
  return (
    <div>
      <h1>Heavy Component</h1>
      <p>This component is loaded lazily to improve performance.</p>
    </div>
  );
};

export default HeavyComponent;
