/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/extensions */

'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { StudentProfile } from '@prisma/client';
import { EditStudentProfileSchema } from '@/lib/validationSchemas';
import { editStudentProfile } from '@/lib/dbActions';

const onSubmit = async (data: StudentProfile) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await editStudentProfile(data);
  swal('Success', 'Your item has been updated', 'success', {
    timer: 2000,
  });
};

const EditStudentProfileForm = ({ studentProfile }: { studentProfile: StudentProfile }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentProfile>({
    resolver: yupResolver(EditStudentProfileSchema),
  });
  // console.log(stuff);

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Edit Profile</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit, (e) => console.log('Validation failed:', e))}>
                <input type="hidden" {...register('id')} value={studentProfile.id} />
                <input type="hidden" {...register('studentId')} value={studentProfile.studentId} />
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <input
                        type="text"
                        {...register('firstName')}
                        defaultValue={studentProfile.firstName}
                        required
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.firstName?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <input
                        type="text"
                        {...register('lastName')}
                        defaultValue={studentProfile.lastName}
                        required
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.lastName?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Location</Form.Label>
                      <input
                        type="text"
                        {...register('location')}
                        defaultValue={studentProfile.location}
                        required
                        className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.location?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Major</Form.Label>
                      <input
                        type="text"
                        {...register('major')}
                        defaultValue={studentProfile.major}
                        required
                        className={`form-control ${errors.major ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.major?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>About Me</Form.Label>
                  <textarea
                    {...register('aboutMe')}
                    defaultValue={studentProfile.aboutMe}
                    className={`form-control ${errors.aboutMe ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.aboutMe?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Interests</Form.Label>
                  <textarea
                    {...register('interests')}
                    defaultValue={studentProfile.interests}
                    className={`form-control ${errors.interests ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.interests?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Portfolio</Form.Label>
                  <input
                    type="text"
                    {...register('portfolio')}
                    defaultValue={studentProfile.portfolio}
                    className={`form-control ${errors.portfolio ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.portfolio?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Profile Picture</Form.Label>
                  <input
                    type="text"
                    {...register('profilePic')}
                    defaultValue={studentProfile.profilePic}
                    className={`form-control ${errors.profilePic ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.profilePic?.message}</div>
                </Form.Group>
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditStudentProfileForm;
