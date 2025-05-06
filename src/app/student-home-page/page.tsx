import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '../../../prisma/prisma';

const StudentHomePage = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  const companies = await prisma.companyProfile.findMany({
    take: 3, // limit to 3
  });

  const student = await prisma.studentProfile.findUnique({
    where: { studentId: Number(userId) },
  });

  const profileViews = Math.floor(Math.random() * 20) + 1; // 1 to 20

  return (
    <main className="container my-5">
      <div className="text-center mb-4">
        <h1>
          Welcome,&nbsp;
          {student?.firstName || 'Student'}
          !
        </h1>
        <p className="lead">Explore opportunities tailored to your skills and interests.</p>
      </div>
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="card p-3 shadow-sm">
            <h5>Preferred Location</h5>
            <p>{student?.location || 'N/A'}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 shadow-sm">
            <h5>Interested Skills</h5>
            <p>{student?.interests || 'N/A'}</p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h4>Suggested Companies</h4>
        <div className="list-group">
          <div className="list-group">
            {companies.map((company) => ( // empty until company database is filled
              <button
                key={company.id}
                type="button"
                className="list-group-item list-group-item-action"
              >
                {company.name}
                –
                {company.overview}
              </button>
            ))}
          </div>
          <button type="button" className="list-group-item list-group-item-action">
            Company B - Software Engineer Co-op
          </button>
          <button type="button" className="list-group-item list-group-item-action">
            Company C - UX Research Assistant
          </button>
        </div>
      </div>
      <div className="mb-5">
        <h4>Messages or Announcements</h4>
        <ul>
          <li>Company X is hiring!</li>
          <li>
            Your profile has been viewed&nbsp;
            {profileViews}
            &nbsp;times this week.
          </li>
        </ul>
      </div>
      <div className="text-center">
        <Link href="/student-profile">
          <button type="button" className="btn btn-success mx-2">
            Edit Profile
          </button>
        </Link>
        <button type="button" className="btn btn-outline-secondary mx-2">Saved Companies</button>
        <Link href="/browsing-page">
          <button type="button" className="btn btn-outline-dark mx-2">
            Browse All
          </button>
        </Link>
      </div>
    </main>
  );
};

export default StudentHomePage;
