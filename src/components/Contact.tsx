import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title">
            Ready to Start <span className="title-accent">Trading?</span>
          </h2>
          <p className="section-description">
            Connect with our global team to discuss your electronics trading needs. 
            We're here to help you succeed in international markets.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-centered">
            <div className="info-card">
              <div className="info-header">
                <h3>Get In Touch</h3>
                <p>Connect with our global team for all your electronics trading needs</p>
              </div>
              
              <div className="contact-methods">
                <div className="method-item">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h4>Email Us</h4>
                    <p>info@factoryappliancesonline.com</p>
                  </div>
                </div>
                
                <div className="method-item">
                  <div className="method-icon">💬</div>
                  <div className="method-content">
                    <h4>WhatsApp</h4>
                    <p>Omer Essa Al Jabri</p>
                    <a href="https://wa.me/61470310971" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>+61 470 310 971</a>
                  </div>
                </div>
                
                <div className="method-item">
                  <div className="method-icon">🌍</div>
                  <div className="method-content">
                    <h4>Global Operations</h4>
                    <p>Serving clients worldwide</p>
                  </div>
                </div>
                
                <div className="method-item">
                  <div className="method-icon">⏰</div>
                  <div className="method-content">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM (AEST)</p>
                  </div>
                </div>
                
                <div className="method-item">
                  <div className="method-icon">🤝</div>
                  <div className="method-content">
                    <h4>Partnership Opportunities</h4>
                    <p>Explore collaboration possibilities</p>
                  </div>
                </div>
              </div>
              
              <div className="trust-indicators">
                <div className="trust-item">
                  <span className="trust-number">24/7</span>
                  <span className="trust-label">Support Available</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">99.8%</span>
                  <span className="trust-label">Client Satisfaction</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">48hr</span>
                  <span className="trust-label">Response Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;