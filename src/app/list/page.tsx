import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import StuffItem from '@/components/StuffItem';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

/** Render a list of stuff for the logged in user. */
const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const owner = (session && session.user && session.user.email) || '';
  const jobs = await prisma.job.findMany({
    where: {
      owner, // Shorthand syntax
    },
  });

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1>Stuff</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Job</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Openings</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <StuffItem key={job.id} job={job} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ListPage;
