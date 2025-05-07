/* eslint-disable @next/next/no-img-element */
// app/company-directory/page.tsx (or pages/company-directory.tsx if using pages dir)
import { prisma } from '@/lib/prisma'; // adjust if different path
import '../globals.css';
// import Image from 'next/image';

const CompanyDirectory = async () => {
  const companies = await prisma.companyProfile.findMany({
    select: {
      id: true,
      name: true,
      overview: true,
      location: true,
      contact: true,
      companyPic: true,
    },
  });

  return (
    <main>
      <div className="wrapper">
        <section className="info2">
          <div>
            <h1>Connecting Professionals to Opportunities</h1>
            <p>Discover companies, jobs, and partnerships tailored to your skills and interests.</p>
          </div>
        </section>

        <div className="companies-container">
          <div className="companies-grid">
            {companies.map((company) => (
              <div key={company.id} className="company-card">
                <div className="card-top">
                  <div className="logo-container">
                    <img
                      src={company.companyPic}
                      alt={`${company.name} logo`}
                      className="logo-img"
                      width={100}
                      height={100}
                    />
                  </div>
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
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyDirectory;
