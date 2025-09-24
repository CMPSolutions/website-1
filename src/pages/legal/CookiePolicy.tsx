import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const CookiePolicy: React.FC = () => {
  return (
    <PageTemplate
      badge="Legal"
      title="Cookie Policy"
      subtitle="Information about how we use cookies and similar technologies on our website to enhance your browsing experience."
    >
      <div className="container">
        <div className="legal-content">
          <div className="legal-section">
            <p><strong>Last Updated:</strong> January 2025</p>
            
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you 
              visit our website. They are widely used to make websites work more efficiently and to 
              provide information to website owners.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> These enable enhanced functionality and personalization</li>
              <li><strong>Performance Cookies:</strong> These help us improve website performance and user experience</li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>
            <p>
              <strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser.
              <br />
              <strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them.
            </p>

            <h2>4. Managing Cookies</h2>
            <p>
              You can control and manage cookies in various ways. Most browsers allow you to refuse 
              cookies or delete cookies. The methods for doing so vary from browser to browser. 
              Please note that if you choose to refuse cookies, you may not be able to use the full 
              functionality of our website.
            </p>

            <h2>5. Third-Party Cookies</h2>
            <p>
              We may use third-party services that place cookies on your device. These services help 
              us analyze website traffic and improve user experience. Third-party cookies are governed 
              by the respective third parties' privacy policies.
            </p>

            <h2>6. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this 
              page with an updated revision date.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default CookiePolicy;