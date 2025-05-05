'use client';

/* eslint-disable import/extensions */

import Card from 'react-bootstrap/Card';
import { Job } from '@prisma/client';
import ListGroup from 'react-bootstrap/ListGroup';
import JobCard from './JobCard';

const JobListings = ({ jobs }: { jobs: Job[] }) => (
  <Card className="p-3 shadow-sm text-center">
    <Card.Header>
      <Card.Title>
        Job listings for UH Students
      </Card.Title>
    </Card.Header>
    <Card.Body className="p-0" style={{ maxHeight: '400px', overflowY: 'auto', overflowX: 'hidden' }}>
      <ListGroup variant="flush">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ListGroup>
    </Card.Body>
  </Card>
);

export default JobListings;
