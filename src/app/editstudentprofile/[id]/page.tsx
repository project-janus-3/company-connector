/* eslint-disable import/extensions */
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { StudentProfile } from '@prisma/client';
import { authOptions } from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditStudentProfile from '@/components/EditStudentProfile';

export default async function EditStudentProfilePage({ params }: { params: { id: string | string[] } }) {
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
  const studentProfile: StudentProfile | null = await prisma.studentProfile.findUnique({
    where: { id },
  });
  // console.log(stuff);
  if (!studentProfile) {
    return notFound();
  }

  return (
    <main>
      <EditStudentProfile studentProfile={studentProfile} />
    </main>
  );
}
