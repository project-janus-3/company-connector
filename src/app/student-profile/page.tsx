/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */

import { getServerSession } from 'next-auth';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';

/** Render a list of stuff for the logged in user. */
const StudentProfile = async () => {
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
      studentProfile: true,
    },
  });

  const profile = user?.studentProfile;

  if (!user || !profile) {
    return <p>Profile not found. Please contact support.</p>;
  }

  return (
    <main>
      <Container>
        <Row className="mb-5 mt-5">
          <Col md={4} className="profile-sidebar">
            <Card className="p-3 shadow-sm profile-sidebar-content">
              <img
                src={profile?.profilePic || 'https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png'}
                alt="Profile Picture"
                className="img-fluid rounded-circle mb-3"
                style={{ width: '150px', height: '150px' }}
              />
              <p>
                {profile?.firstName || 'First Name'}
                {' '}
                {profile?.lastName || 'Last Name'}
              </p>
              <p>{profile?.major || 'Major'}</p>
              <p>{profile?.location || 'Location'}</p>
              {/* Will Link to Edit Profile */}
              <Button
                variant="light"
                href={`/editstudentprofile/${profile.id}`}
                className="btn btn-outline-dark mt-3"
              >
                Edit Profile
              </Button>

            </Card>
          </Col>
          <Col md={8} className="profile-contents">
            <Card className="p-3 shadow-sm">
              <h5>ABOUT ME</h5>
              <p>{profile?.aboutMe || 'About Me'}</p>
            </Card>
            <Row className="mt-4">
              <Col md={7}>
                <Card className="p-3 shadow-sm">
                  <h5>INTERESTS-SKILLS</h5>
                  <p>{profile?.interests || 'Interests'}</p>
                </Card>
              </Col>

              <Col md={5}>
                <Card className="p-3 shadow-sm">
                  <h5>PROFESSIONAL PORTFOLIO</h5>
                  {profile?.portfolio ? <a href={profile.portfolio}>{profile.portfolio}</a> : <p>None provided</p>}
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default StudentProfile;
