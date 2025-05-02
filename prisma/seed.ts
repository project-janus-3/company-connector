import { PrismaClient, Role, positionType } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding the database');
  const password = await hash('changeme', 10);
  config.defaultAccounts.forEach(async (account) => prisma.user
    .upsert({
      where: { email: account.email },
      update: {},
      create: {
        email: account.email,
        password,
        role: (account.role as Role) || Role.USER,
      },
    })
    .then(() => console.log(
      `  Creating user: ${account.email} with role: ${
        (account.role as Role) || Role.USER
      }`,
    )));

  for (const data of config.defaultData) {
    const type = (data.type as positionType) || positionType.internship;
    console.log(`  Adding stuff: ${JSON.stringify(data)}`);
    // eslint-disable-next-line no-await-in-loop
    await prisma.job.upsert({
      where: { id: config.defaultData.indexOf(data) + 1 },
      update: {},
      create: {
        description: data.description,
        skill: Array.isArray(data.skill) ? data.skill : [data.skill],
        type,
        openings: data.openings,
        salary: data.salary,
        owner: data.owner,
      },
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
