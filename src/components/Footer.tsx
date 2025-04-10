import { Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light footer-text footer-style">
    <Container>
      <Row>
        <Col xs={2} className="text-center">
          Contact Us
        </Col>
        <Col xs={8} className="text-center">
          <a href="https://github.com/project-janus-3">GitHub Page</a>
        </Col>
        <Col>
          &copy;
          {new Date().getFullYear()}
          &nbsp;Project Janus
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
