/* eslint-disable @next/next/no-img-element */

'use client';

import { CompanyProfile } from '@prisma/client';

const CompanyBrowseCard = ({ company }: { company: CompanyProfile }) => (
  <div className="company-card">
    <div className="card-top">
      <a href={`/display-company/${company.id}`} className="logo-container">
        <img
          src={company.companyPic}
          alt={`${company.name} logo`}
          className="logo-img"
          width={100}
          height={100}
        />
      </a>
      <div className="company-name text-font">{company.name}</div>
    </div>
    <div className="company-detail-container">
      <div className="detail-label">Overview</div>
      <div className="company-overview text-font">{company.overview}</div>
    </div>
    <div className="company-footer">
      <div className="company-detail-container half-width">
        <div className="detail-label">Location</div>
        <div className="company-location text-font">{company.location}</div>
      </div>
      <div className="company-detail-container half-width">
        <div className="detail-label">Contact</div>
        <div className="company-contact text-font">{company.contact}</div>
      </div>
    </div>
  </div>
);

export default CompanyBrowseCard;
