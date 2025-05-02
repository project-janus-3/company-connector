'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditStuffSchema } from '@/lib/validationSchemas';
import { editStuff } from '@/lib/dbActions';

type Job = {
  id: number;
  description: string;
  type: 'internship' | 'permanent' | 'both';
  openings: number;
  salary: string;
  skill: (string | undefined)[];
  owner: string;
  jobId: number;
  company: string;
  skills: string;
};

const onSubmit = async (data: Job) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await editStuff(data);
  swal('Success', 'Your item has been updated', 'success', {
    timer: 2000,
  });
};

const EditStuffForm = ({ stuff }: { stuff: Job }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Job>({
    resolver: yupResolver(EditStuffSchema),
  });
  // console.log(stuff);

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Edit Job</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={stuff.id} />
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <input
                    type="text"
                    {...register('description')}
                    defaultValue={stuff.description}
                    required
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.description?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Skill
                  </Form.Label>
                  <input
                    type="number"
                    {...register('skill')}
                    defaultValue={stuff.skill.filter((s): s is string => s !== undefined)}
                    className={`form-control ${errors.skill ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.skill?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Type</Form.Label>
                  <select
                    {...register('type')}
                    className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                    defaultValue={stuff.type}
                  >
                    <option value="internship">Internship</option>
                    <option value="permanent">Permanent</option>
                    <option value="both">Both</option>
                  </select>
                  <div className="invalid-feedback">{errors.type?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Salary</Form.Label>
                  <input
                    type="text"
                    {...register('salary')}
                    defaultValue={stuff.salary}
                    required
                    className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.salary?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Openings</Form.Label>
                  <input
                    type="text"
                    {...register('openings')}
                    defaultValue={stuff.openings}
                    required
                    className={`form-control ${errors.openings ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.openings?.message}</div>
                </Form.Group>
                <input type="hidden" {...register('owner')} value={stuff.owner} />
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

export default EditStuffForm;
