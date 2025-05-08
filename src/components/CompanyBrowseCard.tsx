'use client';

import { Card, Col, Row } from 'react-bootstrap';
import { CompanyProfile } from '@prisma/client';

const CompanyBrowseCard = ({ company }: { company: CompanyProfile }) => (
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
);

export default CompanyBrowseCard;
