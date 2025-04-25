/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */

import { getServerSession } from 'next-auth';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import { Row, Col, Card, Container } from 'react-bootstrap';
/** Render a list of stuff for the logged in user. */
const StudentProfile = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  return (
    <main>
      <Container>
        <Row className="mb-5 mt-5">
          <Col md={4} className="profile-sidebar">
            <Card className="p-3 shadow-sm profile-sidebar-content">
              <img src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png" alt="Profile Picture" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
              <p>{session?.user?.name || 'Guest'}</p>
              <p>XYZ Major</p>
              <p>PREFERRED GEOGRAPHIC LOCATION</p>
              {/* Will Link to Edit Profile */}
              <a href="#">Edit Profile</a>
            </Card>
          </Col>
          <Col md={8} className="profile-contents">
            <Card className="p-3 shadow-sm">
              <h5>ABOUT ME</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Card>
            <Row className="mt-4">
              <Col md={7}>
                <Card className="p-3 shadow-sm">
                  <h5>INTERESTS-SKILLS</h5>
                  <p>Lorem ipsum</p>
                </Card>
              </Col>

              <Col md={5}>
                <Card className="p-3 shadow-sm">
                  <h5>PROFESSIONAL PORTFOLIO</h5>
                  <a href="#">Lorem ipsum</a>
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
