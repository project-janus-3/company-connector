/* eslint-disable import/extensions */
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { Job } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditJobForm from '@/components/EditJobForm';

export default async function EditJobPage({ params }: { params: { id: string | string[] } }) {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );

  const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);
  // console.log(id);
  const job: Job | null = await prisma.job.findUnique({
    where: { id },
  });
  // console.log(stuff);
  if (!job) {
    return notFound();
  }

  return (
    <main>
      <EditJobForm job={job} />
    </main>
  );
}
