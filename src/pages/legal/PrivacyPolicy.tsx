import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const PrivacyPolicy: React.FC = () => {
  return (
    <PageTemplate
      badge="Legal"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information when you interact with Factory Appliances Online."
    >
      <div className="container">
        <div className="legal-content">
          <div className="legal-section">
            <p><strong>Last Updated:</strong> January 2025</p>
            
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you contact us for business 
              inquiries, request quotes, or engage with our services. This may include your name, email 
              address, company information, and communication preferences.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your business inquiries and provide requested information</li>
              <li>Process and fulfill your orders and service requests</li>
              <li>Communicate with you about our products and services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share information with 
              trusted partners who assist us in operating our business, provided they agree to keep 
              this information confidential.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. You may also 
              opt out of certain communications from us. To exercise these rights, please contact us 
              using the information provided below.
            </p>

            <h2>6. Contact Information</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: info@factoryappliancesonline.com
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default PrivacyPolicy;