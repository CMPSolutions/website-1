import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const TermsOfService: React.FC = () => {
  return (
    <PageTemplate
      badge="Legal"
      title="Terms of Service"
      subtitle="Terms and conditions governing your use of Factory Appliances Online services and website."
    >
      <div className="container">
        <div className="legal-content">
          <div className="legal-section">
            <p><strong>Last Updated:</strong> January 2025</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Factory Appliances Online website and services, you accept 
              and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on Factory Appliances Online's 
              website for personal, non-commercial transitory viewing only. This is the grant of a 
              license, not a transfer of title.
            </p>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on Factory Appliances Online's website are provided on an 'as is' basis. 
              Factory Appliances Online makes no warranties, expressed or implied, and hereby disclaims 
              and negates all other warranties including without limitation, implied warranties or 
              conditions of merchantability, fitness for a particular purpose, or non-infringement 
              of intellectual property or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall Factory Appliances Online or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to business 
              interruption) arising out of the use or inability to use the materials on Factory 
              Appliances Online's website.
            </p>

            <h2>5. Business Terms</h2>
            <p>
              All business transactions are subject to separate commercial agreements. Pricing, 
              availability, and terms are subject to change without notice. All orders are subject 
              to acceptance and credit approval.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with applicable 
              international trade laws and regulations.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default TermsOfService;