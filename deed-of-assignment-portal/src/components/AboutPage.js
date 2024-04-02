import React from 'react';

/**
 * AboutPage component provides information about NextPlay Technologies' vision for the Deed of Assignment Portal.
 * This component is lazily loaded as part of the application's performance optimization strategy.
 * @returns {JSX.Element} The AboutPage component.
 */
const AboutPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>About the Deed of Assignment Portal</h1>
      <p>NextPlay Technologies, a NASDAQ-listed company, envisions this portal as a revolutionary solution designed to address the financial challenges of today and tomorrow. By leveraging cutting-edge technology, we aim to empower underserved markets globally, including those unbanked or underserved with traditional financial products.</p>
      <p>Our commitment extends beyond facilitating financial transactions; it&apos;s about building a portal that serves as a bridge for financial inclusion. This powerhouse portal represents the pinnacle of collaboration between financial institutions, law firms, and corporations, aiming to democratize access to financial services and create a more inclusive economic landscape.</p>
      <p>In developing this portal, we are not just responding to the current needs but are proactively rising to the challenges of underserved markets. Through this initiative, NextPlay Technologies reaffirms its dedication to leveraging technology for social good, ensuring that our communities and global partners have the tools they need to thrive in an ever-evolving financial ecosystem.</p>
    </div>
  );
};

export default AboutPage;
