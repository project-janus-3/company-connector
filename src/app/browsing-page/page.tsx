import { prisma } from '@/lib/prisma';
import '../globals.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const CompanyDirectory = async () => {
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

  return (
    <main>
      <Container>
        <Row className="text-center my-4">
          <Col>
            <h1>Connecting Professionals to Opportunities</h1>
            <p>Discover companies, jobs, and partnerships tailored to your skills and interests.</p>
          </Col>
        </Row>
        <Row>
          {companies.map((company) => (
            <Col key={company.id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={company.companyPic}
                  alt={`${company.name} logo`}
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{company.name}</Card.Title>
                  <Card.Text>
                    <strong>Overview:</strong>
                    <br />
                    {company.overview}
                  </Card.Text>
                  <Row>
                    <Col>
                      <strong>Location:</strong>
                      <br />
                      {company.location}
                    </Col>
                    <Col>
                      <strong>Contact:</strong>
                      <br />
                      {company.contact}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default CompanyDirectory;
