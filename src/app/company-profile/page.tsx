import Head from 'next/head';
import Image from 'next/image';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const CompanyPage = () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="Company Profile for Project Janus" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Company Profile - Project Janus</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
      />
    </Head>
    <main>
      <Container>
        <Row className="mt-4" />
        <Row className="d-flex justify-content-between align-items-center">
          <Col md={4} className="d-flex justify-content-center">
            <Card className="p-3 shadow-sm profile-sidebar-content">
              <Image
                src="https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689652.jpg?semt=ais_hybrid&w=740"
                alt="Company logo"
                className="img-fluid rounded-circle me-3"
                style={{ width: 150, height: 150 }}
                width={150}
                height={150}
              />
            </Card>
          </Col>
          <Col md={8}>
            <p className="mb-1 fw-bold">COMPANY NAME</p>
            <p className="mb-0">Location: Foo</p>
            <Card className="p-3 shadow-sm">
              <h5>OVERVIEW</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Card>
          </Col>
        </Row>
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
    <footer className="navbar navbar-expand-sm navbar-light mt-4 fixed-bottom bg-light">
      <Container className="d-flex justify-content-between align-items-center">
        <section className="link">
          <a
            href="https://project-janus-3.github.io/project-janus.github.io/"
            className="gray-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://project-janus-3.github.io/project-janus.github.io/
          </a>
        </section>
        <Form className="mt-2">
          <Form.Control type="text" placeholder="Your message" className="mb-2" />
          <Button type="submit" variant="primary" className="form-control">
            Send
          </Button>
        </Form>
      </Container>
    </footer>
  </>
);

export default CompanyPage;
