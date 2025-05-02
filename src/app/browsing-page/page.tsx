// pages/company-directory.tsx
// import React from 'react';
import '../globals.css';

const CompanyDirectory = async () => (
  <div className="wrapper">
    {/* Using info class from global.css instead of hero */}
    <section className="info2">
      <div>
        <h1>Connecting Professionals to Opportunities</h1>
        <p>Discover companies, jobs, and partnerships tailored to your skills and interests.</p>
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
  </div>
);

export default CompanyDirectory;
