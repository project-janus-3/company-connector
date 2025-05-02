/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

const CompanyProfile = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email ?? '',
    },
    include: {
      companyProfile: true,
    },
  });

  const profile = user?.companyProfile;

  if (!user || !profile) {
    return <p>Profile not found. Please contact support.</p>;
  }

  return (
    <main>
      <Container className="mb-5 mt-5">
        <Card className="shadow-sm">
          <Row className="d-flex justify-content-between align-items-center mb-2 mt-2 me-1">
            <Col md={2}>
              <img
                src={profile?.companyPic || 'https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689652.jpg?semt=ais_hybrid&w=740'}
                alt="Company logo"
                className="rounded-circle"
                style={{ width: 150, height: 150 }}
                width={150}
                height={150}
              />
            </Col>
            <Col md={10}>
              <p className="mb-1 fw-bold">{profile?.name || 'Company Name'}</p>
              <p className="mb-1">
                Location:
                {' '}
                {profile?.location || 'Location'}
              </p>
              <Card className="p-3 shadow-sm">
                <h5>OVERVIEW</h5>
                <p>
                  {profile?.overview || 'Company overview goes here.'}
                </p>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between align-items-center mb-2 mt-2 me-1">
            <Col md={2}>
              <Button
                variant="light"
                href={`/editcompanyprofile/${profile.id}`}
                className="btn btn-outline-dark ms-3"
              >
                Edit Profile
              </Button>
            </Col>
            <Col md={10} />
          </Row>
        </Card>
        <Row className="mt-4">
          <Col>
            <Card className="p-3 shadow-sm text-center">
              <h5>CAREERS FOR UH STUDENT/GRADS</h5>
              <Container style={{ height: '300px', overflowY: 'auto' }}>
                <Row>
                  <Col md={6}>
                    <Card className="p-3 mt-4 shadow-sm">
                      <h5>POSITION</h5>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card className="p-3 mt-4 shadow-sm">
                      <h5>AVAILABILITY</h5>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col md={5}>SKILL</Col>
                  <Col md={5}>SALARY</Col>
                </Row>
                <Row>
                  <Col>
                    <Card className="p-3 mt-4 shadow-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default CompanyProfile;
