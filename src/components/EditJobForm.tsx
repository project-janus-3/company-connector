/* eslint-disable import/extensions */

'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { Job } from '@prisma/client';
import { EditJobSchema } from '@/lib/validationSchemas';
import { editJob } from '@/lib/dbActions';

const onSubmit = async (data: Job) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await editJob(data);
  swal('Success', 'Your item has been updated', 'success', {
    timer: 2000,
  });
};

const EditJobForm = ({ job }: { job: Job }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Job>({
    resolver: yupResolver(EditJobSchema),
  });

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center">
            <h2>Edit Job</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={job.id} />
                <input type="hidden" {...register('jobId')} value={job.jobId} />
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Position</Form.Label>
                      <input
                        type="text"
                        defaultValue={job.position}
                        {...register('position')}
                        className={`form-control ${errors.position ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.position?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Skills</Form.Label>
                      <input
                        type="text"
                        defaultValue={job.skills}
                        {...register('skills')}
                        className={`form-control ${errors.skills ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.skills?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Position Type</Form.Label>
                      <select
                        {...register('type')}
                        className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                        defaultValue={job.type}
                      >
                        <option value="internship">Internship</option>
                        <option value="permanent">Permanent</option>
                        <option value="both">Both</option>
                      </select>
                      <div className="invalid-feedback">{errors.type?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Salary</Form.Label>
                      <input
                        type="number"
                        defaultValue={job.salary}
                        {...register('salary')}
                        className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.salary?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Openings</Form.Label>
                      <input
                        type="number"
                        defaultValue={job.openings}
                        {...register('openings')}
                        className={`form-control ${errors.openings ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.openings?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <textarea
                    {...register('description')}
                    defaultValue={job.description}
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.description?.message}</div>
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

export default EditJobForm;
