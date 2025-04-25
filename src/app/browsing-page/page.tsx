// pages/company-directory.tsx
import React from 'react';
import '../globals.css';

const CompanyDirectory = () => (
  <div className="wrapper">
    {/* Companies grid section */}
    <div className="companies-container">
      <div className="companies-grid">
        {/* Company Card 1 */}
        <div className="company-card">
          <div className="logo-container">LOGO</div>
          <div className="company-info">
            <div className="company-name text-font">COMPANY NAME</div>
            <div className="company-overview text-font">OVERVIEW</div>
          </div>
        </div>

        {/* Company Card 2 */}
        <div className="company-card">
          <div className="logo-container">LOGO</div>
          <div className="company-info">
            <div className="company-name text-font">COMPANY NAME</div>
            <div className="company-overview text-font">OVERVIEW</div>
          </div>
        </div>

        {/* Company Card 3 */}
        <div className="company-card">
          <div className="logo-container">LOGO</div>
          <div className="company-info">
            <div className="company-name text-font">COMPANY NAME</div>
            <div className="company-overview text-font">OVERVIEW</div>
          </div>
        </div>

        {/* Company Card 4 */}
        <div className="company-card">
          <div className="logo-container">LOGO</div>
          <div className="company-info">
            <div className="company-name text-font">COMPANY NAME</div>
            <div className="company-overview text-font">OVERVIEW</div>
          </div>
        </div>
      </div>

      {/* Scrollbar visualization */}
      <div className="scrollbar">
        <div className="scrollbar-thumb" />
      </div>
    </div>

    {/* Footer */}
  </div>
);

export default CompanyDirectory;
