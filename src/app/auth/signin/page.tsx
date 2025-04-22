'use client';

import { signIn } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row, CardGroup } from 'react-bootstrap';

/** The sign in page. */
const SignIn = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    const result = await signIn('credentials', {
      callbackUrl: '/company',
      email,
      password,
    });

    if (result?.error) {
      console.error('Sign in failed: ', result.error);
    }
  };

  return (
    <main>
      <Container>
        <Row className="justify-content-center">
          <Col xs={5}>
            <h1 className="text-center text-font">Welcome to Project Janus</h1>
            <br />
            <CardGroup>
              <Card>
                <Card.Body>
                  <h3 className="text-center text-font">Sign In</h3>
                  <Form method="post" onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="text-font">Email</Form.Label>
                      <input name="email" type="text" className="form-control" />
                    </Form.Group>
                    <Form.Group>
                      <br />
                      <Form.Label className="text-font">Password</Form.Label>
                      <input name="password" type="password" className="form-control" />
                    </Form.Group>
                    <Button type="submit" className="mt-3 text-font" variant="success">
                      Sign In
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              <Card className="green-bg white-text">
                <Card.Body>
                  <br />
                  <br />
                  <h3 className="text-center text-font">Don&apos;t have an account?</h3>
                  <Card.Text className="text-center text-font">
                    <Button variant="light" href="/auth/signup">
                      Sign Up
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SignIn;
