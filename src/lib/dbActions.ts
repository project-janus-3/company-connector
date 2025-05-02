'use server';

import { Job, PositionType, Role, StudentProfile, CompanyProfile } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Adds a new stuff to the database.
 * @param stuff, an object with the following properties: name, quantity, owner, jobtype.
 */
export async function addStuff(stuff: { name: string; quantity: number; owner: string; jobtype: string; }) {
  // console.log(`addStuff data: ${JSON.stringify(stuff, null, 2)}`);
  let jobtype: PositionType = 'internship';
  if (stuff.jobtype === 'both') {
    jobtype = 'both';
  } else {
    jobtype = 'permanent';
  }

  await prisma.job.create({
    data: {
      description: stuff.name,
      skills: stuff.jobtype,
      type: jobtype,
      openings: stuff.quantity,
      salary: '0', // Replace with appropriate salary value or logic
      company: '1', // Replace with the actual company ID or name as a string
      jobFrom: {
        connect: {
          id: 1, // Replace 1 with the actual ID of the related company profile
        },
      },
    },
  });
  // After adding, redirect to the list page
  redirect('/list');
}

/**
 * Edits an existing stuff in the database.
 * @param stuff, an object with the following properties: id, name, quantity, owner, jobtype.
 */
export async function editStuff(stuff: Job) {
  // console.log(`editStuff data: ${JSON.stringify(stuff, null, 2)}`);
  await prisma.job.update({
    where: { id: stuff.id },
    data: {
      description: stuff.description,
      skills: stuff.skills,
      type: stuff.type,
      openings: stuff.openings,
    },
  });
  // After updating, redirect to the list page
  redirect('/list');
}

/**
 * Deletes an existing stuff from the database.
 * @param id, the id of the stuff to delete.
 */
export async function deleteStuff(id: number) {
  // console.log(`deleteStuff id: ${id}`);
  await prisma.job.delete({
    where: { id },
  });
  // After deleting, redirect to the list page
  redirect('/list');
}

/**
 * Creates a new student user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createStudentUser(credentials: { email: string; password: string }) {
  // console.log(`createUser data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.create({
    data: {
      email: credentials.email,
      password,
      role: Role.STUDENT,
      studentProfile: {
        create: {
          firstName: '',
          lastName: '',
          location: '',
          aboutMe: '',
          major: '',
          portfolio: '',
          interests: '',
          profilePic: '',
        },
      },
    },
  });
}

/**
 * Creates a new company user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createCompanyUser(credentials: { email: string; password: string }) {
  // console.log(`createUser data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.create({
    data: {
      email: credentials.email,
      password,
      role: Role.COMPANY,
      companyProfile: {
        create: {
          name: '',
          overview: '',
          location: '',
          mainSite: '',
          contact: '',
          companyPic: '',
        },
      },
    },
  });
}

/**
 * Edits an existing student profile in the database.
 * @param profile, a student profile with respective properties.
 */
export async function editStudentProfile(profile: StudentProfile) {
  // console.log(`editStuff data: ${JSON.stringify(stuff, null, 2)}`);
  await prisma.studentProfile.update({
    where: { id: profile.id },
    data: {
      firstName: profile.firstName,
      lastName: profile.lastName,
      location: profile.location,
      aboutMe: profile.aboutMe,
      major: profile.major,
      portfolio: profile.portfolio,
      interests: profile.interests,
      profilePic: profile.profilePic,
    },
  });
  redirect('/student-profile');
}

/**
 * Edits an existing student profile in the database.
 * @param profile, a student profile with respective properties.
 */
export async function editCompanyProfile(profile: CompanyProfile) {
  // console.log(`editStuff data: ${JSON.stringify(stuff, null, 2)}`);
  await prisma.companyProfile.update({
    where: { id: profile.id },
    data: {
      name: profile.name,
      overview: profile.overview,
      location: profile.location,
      contact: profile.contact,
      companyPic: profile.companyPic,
    },
  });
  redirect('/company-profile');
}

/**
 * Changes the password of an existing user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  // console.log(`changePassword data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}
