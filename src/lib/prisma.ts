// Original prisma.ts file from the Next.js sample app

import { PrismaClient } from '@prisma/client';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// eslint-disable-next-line import/prefer-default-export, operator-linebreak
export const prisma =
  // eslint-disable-next-line operator-linebreak
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // CAM: is this the right level of logging?
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Proposed Changes to Project Janus' prisma.ts file
/*
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma
  || new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
*/
