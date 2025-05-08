'use client';

/* eslint-disable import/extensions */

import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const CompaniesBrowse = ({ companies }: { companies: any[] }) => (
  <Row>
    {companies.map((company) => (
      <Col key={company.id} md={4} className="mb-4">
        <Card>
          <Card.Img
            variant="top"
            src={company.companyPic}
            alt={`${company.name} logo`}
            style={{ height: '150px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>{company.name}</Card.Title>
            <Card.Text>
              <strong>Overview:</strong>
              <br />
              {company.overview}
            </Card.Text>
            <Row>
              <Col>
                <strong>Location:</strong>
                <br />
                {company.location}
              </Col>
              <Col>
                <strong>Contact:</strong>
                <br />
                {company.contact}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default CompaniesBrowse;
