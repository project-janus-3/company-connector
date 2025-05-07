/* eslint-disable import/extensions */

'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import { redirect, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { CompanyProfile } from '@prisma/client';
import { AddJobSchema } from '@/lib/validationSchemas';
import { addJob } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';

const onSubmit = async (data: any, callback: () => void) => {
  await addJob(data);
  swal('Success', 'Job added successfully', 'success', { timer: 2000 });
  callback();
};

const AddJobForm = ({ company }: { company: CompanyProfile }) => {
  const { data: status } = useSession();
  const router = useRouter();
  // const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddJobSchema),
  });

  if (!status) {
    return <LoadingSpinner />;
  }

  if (status?.user === null) {
    return redirect('/auth/signin');
  }

  const handleFormSubmit = (data: any) => {
    onSubmit(data, () => {
      reset(); // Reset form
      router.refresh(); // Refresh page to show new job
    });
  };

  return (
    <Card>
      <Card.Header>Add New Job</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <Form.Group>
            <Form.Label>Position</Form.Label>
            <input
              type="text"
              {...register('position')}
              className={`form-control ${errors.position ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.position?.message}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Skills</Form.Label>
            <input
              type="text"
              {...register('skills')}
              className={`form-control ${errors.skills ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.skills?.message}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <select {...register('type')} className={`form-control ${errors.type ? 'is-invalid' : ''}`}>
              <option value="internship">Internship</option>
              <option value="permanent">Permanent</option>
              <option value="both">Both</option>
            </select>
            <div className="invalid-feedback">{errors.type?.message}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Salary</Form.Label>
            <input
              type="number"
              {...register('salary')}
              className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.salary?.message}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Openings</Form.Label>
            <input
              type="number"
              {...register('openings')}
              className={`form-control ${errors.openings ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.openings?.message}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <textarea
              {...register('description')}
              className={`form-control ${errors.description ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.description?.message}</div>
          </Form.Group>
          <input type="hidden" {...register('jobId')} value={company.id} />
          <Row className="pt-3">
            <Col>
              <Button type="submit" variant="primary">Submit</Button>
            </Col>
            <Col>
              <Button type="button" variant="warning" onClick={() => reset()}>Reset</Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddJobForm;
