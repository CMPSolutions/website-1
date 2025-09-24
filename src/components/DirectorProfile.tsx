import React from 'react';
import '../styles/DirectorProfile.css';

const DirectorProfile: React.FC = () => {
  return (
    <section id="director" className="director-profile">
      <div className="container">
        <h2 className="section-title">Leadership</h2>
        <div className="profile-card">
          <div className="profile-image">
            <div className="placeholder-image">
              <span>OEA</span>
            </div>
          </div>
          <div className="profile-content">
            <h3>Omer Essa Al Jabri</h3>
            <p className="title">Director & Chief Executive Officer</p>
            <div className="bio">
              <p>
                Omer Essa Al Jabri brings over a decade of exceptional leadership and expertise to
                Factory Appliances Online. As Director, he has pioneered innovative approaches to
                international electronics trade, establishing the company as a trusted name in
                global import and export operations.
              </p>
              <p>
                His extensive experience encompasses managing large-volume transactions across diverse
                product categories including mobile phones, tablet computers, laptops, IoT devices, and
                smart appliances. Under his guidance, the company has successfully navigated complex
                international markets, building strong relationships with suppliers and distributors worldwide.
              </p>
              <p>
                Mr. Al Jabri's strategic vision has been instrumental in expanding the company's reach
                to new markets while maintaining the highest standards of quality and customer service.
                His deep understanding of global supply chains, combined with his commitment to innovation,
                continues to drive the company's growth and success in the competitive electronics trade industry.
              </p>
            </div>
            <div className="expertise">
              <h4>Areas of Expertise:</h4>
              <ul>
                <li>International Trade & Logistics</li>
                <li>Large-Volume Electronics Import/Export</li>
                <li>Strategic Partnership Development</li>
                <li>Supply Chain Optimization</li>
                <li>Emerging Technology Markets (IoT, Smart Appliances)</li>
                <li>Cross-Border Regulatory Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorProfile;