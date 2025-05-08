/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { Job } from '@prisma/client';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import JobListings from '@/components/JobListings';
import AddJobForm from '@/components/AddJobForm';

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

  // Get the user's company profile data
  const profile = user?.companyProfile;

  if (!user || !profile) {
    return <p>Profile not found. Please contact support.</p>;
  }

  // Get the jobs tied to this company
  const jobs: Job[] = await prisma.job.findMany({
    where: {
      jobId: profile!.id, // This links to the company profile via the foreign key
    },
  });

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
        <Row className="mt-4 mb-4">
          <Col>
            {/* Job Listings */}
            <JobListings jobs={jobs} />
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col>
            <AddJobForm company={profile} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default CompanyProfile;
