'use client';

import { Card, ListGroup } from 'react-bootstrap';
import { Job } from '@prisma/client';

const JobCard = ({ job }: { job: Job }) => (
  <ListGroup.Item>
    <Card>
      <Card.Header>
        <Card.Title>{job.position}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {job.type}
          {' '}
          &middot;
          {' $'}
          {job.salary}
          {' '}
          &middot;
          {' '}
          {' '}
          {job.openings}
          {' openings ' }
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>Skills:</strong>
          {job.skills}
        </Card.Text>
        <Card.Text>{job.description}</Card.Text>
      </Card.Body>
    </Card>
  </ListGroup.Item>
);

export default JobCard;
