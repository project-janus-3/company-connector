// pages/company-directory.tsx
// import React from 'react';
import '../app/global.css';

const CompanyDirectory = async () => (
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
    <footer className="footer footer-style">
      <div className="contact footer-text">CONTACT US</div>
      <div className="link footer-text">https://company-directory.example.com</div>
      <div className="copyright footer-text">© 2025 Company Directory</div>
    </footer>
  </div>
);

export default CompanyDirectory;
