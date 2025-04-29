'use server';

import { Job, positionType } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Adds a new stuff to the database.
 * @param stuff, an object with the following properties: name, quantity, owner, jobtype.
 */
export async function addStuff(stuff: { name: string; quantity: number; owner: string; jobtype: string; }) {
  // console.log(`addStuff data: ${JSON.stringify(stuff, null, 2)}`);
  let jobtype: positionType = 'internship';
  if (stuff.jobtype === 'both') {
    jobtype = 'both';
  } else {
    jobtype = 'permanent';
  }

  await prisma.job.create({
    data: {
      description: stuff.name,
      skill: [stuff.jobtype],
      type: jobtype,
      openings: stuff.quantity,
      owner: stuff.owner,
      salary: '0', // Replace with appropriate salary value or logic
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
      skill: stuff.skill,
      type: stuff.type,
      openings: stuff.openings,
      owner: stuff.owner,
      salary: stuff.salary,
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
      role: 'STUDENT',
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
      role: 'COMPANY',
    },
  });
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
