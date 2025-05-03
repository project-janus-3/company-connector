import { Job } from '@prisma/client';
import Link from 'next/link';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const StuffItemAdmin = ({ job }: { job: Job }) => {
  const { id, company, description, skills, type, openings, salary } = job;

  return (
    <tr>
      <td>{description}</td>
      <td>{type}</td>
      <td>{skills}</td>
      <td>{openings}</td>
      <td>{salary}</td>
      <td>{company}</td>
      <td>
        <Link href={`/edit/${id}`}>Edit</Link>
      </td>
    </tr>
  );
};

export default StuffItemAdmin;
