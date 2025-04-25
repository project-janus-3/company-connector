/* eslint-disable max-len */

'use client';

import { Container, Col, Button, Row, Card } from 'react-bootstrap';

/** The sign up page. */
const SignUp = () => (
  <Container>
    <Row className="justify-content-center">
      <Col xs={5} className="text-center py-3">
        <h2>Welcome to Project Janus</h2>
        <br />
        <Card>
          <Card.Body>
            <h3 className="text-center">Sign Up</h3>
            <p className="text-center">Please select your account type.</p>
            <Row className="justify-content-center">
              <Col>
                {/* Send User to the Student Sign Up page */}
                <Button variant="success" href="/auth/signup/studentsignup">
                  Student
                </Button>
              </Col>
              <Col>
                {/* Send User to the Company Sign Up page */}
                <Button variant="success" href="/auth/signup/companysignup">
                  Company
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default SignUp;
