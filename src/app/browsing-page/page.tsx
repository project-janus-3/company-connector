/* eslint-disable react/self-closing-comp */
import { prisma } from '@/lib/prisma';
import '../globals.css';
import CompaniesBrowse from '@/components/CompaniesBrowse';
import { CompanyProfile } from '@prisma/client';

const CompanyDirectory = async () => {
  const companies: CompanyProfile[] = await prisma.companyProfile.findMany({});

  return (
    <main>
      <section className="hero-section">
        <div className="hero-overlay">

        </div>
        <div className="hero-content">
          <h1>Connecting Professionals to Opportunities</h1>
          <p>Discover companies, jobs, and partnerships tailored to your skills and interests.</p>
        </div>
      </section>

      <div className="companies-container">
        <div className="companies-grid">
          <CompaniesBrowse companies={companies} />
        </div>
      </div>
    </main>
  );
};

export default CompanyDirectory;
