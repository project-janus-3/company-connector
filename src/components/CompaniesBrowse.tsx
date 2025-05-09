'use client';

/* eslint-disable import/extensions */

// import { Row } from 'react-bootstrap';
import { CompanyProfile } from '@prisma/client';
import CompanyBrowseCard from './CompanyBrowseCard';

const CompaniesBrowse = ({ companies }: { companies: CompanyProfile[] }) => (
  <>
    {companies.map((company) => (
      <CompanyBrowseCard key={company.id} company={company} />
    ))}
  </>
);

export default CompaniesBrowse;
