// pages/company-directory.tsx
import React from 'react';
import '../app/global.css';

const CompanyDirectory: React.FC = () => (
  <div className="wrapper">
    {/* Header with branding, navbar and sign out button */}
    <header className="header" id="navbar-style">
      <div className="brand" id="brand-style">Company Directory</div>
      <nav className="navbar text-font">
        <a href="#" className="nav-item" id="navlink-style">HOME</a>
        <a href="#" className="nav-item" id="navlink-style">BROWSE</a>
        <a href="#" className="nav-item" id="navlink-style">FAVORITES</a>
      </nav>
      <button className="sign-out-btn text-font">SIGN OUT</button>
    </header>

    {/* Using info class from global.css instead of hero */}
    <section className="info">
      <div>
        <h1>Connecting Professionals to Opportunities</h1>
        <p>Discover companies, jobs, and partnerships tailored to your skills and interests.</p>
        <button className="cta-button green-bg white-text text-font">Get Started</button>
      </div>
    </section>

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
