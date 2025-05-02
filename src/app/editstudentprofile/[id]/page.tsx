import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { StudentProfile } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditStudentProfile from '@/components/EditStudentProfile';

export default async function EditStudentProfilePage({ params }: { params: { id: string | string[] } }) {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(session as { user: { email: string; id: string; randomKey: string } } | null);

  const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);
  const studentProfile: StudentProfile | null = await prisma.studentProfile.findUnique({
    where: { id },
  });

  if (!studentProfile) {
    return notFound();
  }

  return (
    <main>
      <EditStudentProfile studentProfile={studentProfile} />
    </main>
  );
}
