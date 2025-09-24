import React from 'react';
import '../styles/pages/PageTemplate.css';

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
  backgroundImage?: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  badge,
  children,
  backgroundImage
}) => {
  return (
    <div className="page-template">
      <div className="page-hero" style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          {badge && <div className="page-badge">{badge}</div>}
          <h1 className="page-title">{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
      </div>
      
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;