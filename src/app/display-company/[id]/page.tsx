/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import { Card, Col, Container, Row } from 'react-bootstrap';
import { getServerSession } from 'next-auth';
import { Job } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import JobListings from '@/components/JobListings';

export default async function DisplayCompany({ params }: { params: { id: string | string[] } }) {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);

  const currentProfile = await prisma.companyProfile.findUnique({
    where: { id },
  });

  if (!currentProfile) {
    return <p>Profile not found. Please contact support.</p>;
  }

  // Get the jobs tied to this company
  const jobs: Job[] = await prisma.job.findMany({
    where: {
      jobId: currentProfile!.id, // This links to the current company profile via the foreign key
    },
  });

  return (
    <main>
      <Container className="mb-5 mt-5">
        <Card className="shadow-sm">
          <Row className="d-flex justify-content-between align-items-center mb-2 mt-2 me-1">
            <Col md={2}>
              <img
                src={currentProfile?.companyPic || 'https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689652.jpg?semt=ais_hybrid&w=740'}
                alt="Company logo"
                className="rounded-circle"
                style={{ width: 150, height: 150 }}
                width={150}
                height={150}
              />
            </Col>
            <Col md={10}>
              <p className="mb-1 fw-bold">{currentProfile?.name || 'Company Name'}</p>
              <p className="mb-1">
                Location:
                {' '}
                {currentProfile?.location || 'Location'}
              </p>
              <Card className="p-3 shadow-sm">
                <h5>OVERVIEW</h5>
                <p>
                  {currentProfile?.overview || 'Company overview goes here.'}
                </p>
              </Card>
            </Col>
          </Row>
        </Card>
        <Row className="mt-4 mb-4">
          <Col>
            {/* Job Listings */}
            <JobListings jobs={jobs} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
