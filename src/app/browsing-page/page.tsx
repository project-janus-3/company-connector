import { prisma } from '@/lib/prisma';
import '../globals.css';
import { Col, Container, Row } from 'react-bootstrap';
import CompaniesBrowse from '@/components/CompaniesBrowse';
import { CompanyProfile } from '@prisma/client';

const CompanyDirectory = async () => {
  /*
  interface Company {
    id: number;
    name: string;
    overview: string;
    location: string;
    contact: string;
    companyPic: string;
  }

  let companies: Company[] = [];

  try {
    companies = await prisma.companyProfile.findMany({
      select: {
        id: true,
        name: true,
        overview: true,
        location: true,
        contact: true,
        companyPic: true,
      },
    });
  } catch (error) {
    console.error('Error fetching companies:', error);
  }
  */

  // Get all companies from the database
  const companies: CompanyProfile[] = await prisma.companyProfile.findMany({
  });

  return (
    <main>
      <Container>
        <Row className="text-center my-4">
          <Col>
            <h1>Connecting Professionals to Opportunities</h1>
            <p>Discover companies, jobs, and partnerships tailored to your skills and interests.</p>
          </Col>
        </Row>
        <CompaniesBrowse companies={companies} />
      </Container>
    </main>
  );
};

export default CompanyDirectory;
