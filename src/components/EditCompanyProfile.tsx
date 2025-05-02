/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/extensions */

'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { CompanyProfile } from '@prisma/client';
import { EditCompanyProfileSchema } from '@/lib/validationSchemas';
import { editCompanyProfile } from '@/lib/dbActions';

const onSubmit = async (data: CompanyProfile) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await editCompanyProfile(data);
  swal('Success', 'Your item has been updated', 'success', {
    timer: 2000,
  });
};

const EditCompanyProfileForm = ({ companyProfile }: { companyProfile: CompanyProfile }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CompanyProfile>({
    resolver: yupResolver(EditCompanyProfileSchema),
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
                <input type="hidden" {...register('id')} value={companyProfile.id} />
                <input type="hidden" {...register('companyId')} value={companyProfile.companyId} />
                <Form.Group>
                  <Form.Label>Company Name</Form.Label>
                  <input
                    type="text"
                    {...register('name')}
                    defaultValue={companyProfile.name}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.name?.message}</div>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Location</Form.Label>
                      <input
                        type="text"
                        {...register('location')}
                        defaultValue={companyProfile.location}
                        className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.location?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Main Site</Form.Label>
                      <input
                        type="text"
                        {...register('mainSite')}
                        defaultValue={companyProfile.mainSite || ''}
                        className={`form-control ${errors.mainSite ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.mainSite?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>Overview</Form.Label>
                  <textarea
                    {...register('overview')}
                    defaultValue={companyProfile.overview}
                    className={`form-control ${errors.overview ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.overview?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>List Contacts</Form.Label>
                  <textarea
                    {...register('contact')}
                    defaultValue={companyProfile.contact}
                    className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.contact?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Company Picture</Form.Label>
                  <input
                    type="text"
                    {...register('companyPic')}
                    defaultValue={companyProfile.companyPic}
                    className={`form-control ${errors.companyPic ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.companyPic?.message}</div>
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

export default EditCompanyProfileForm;
