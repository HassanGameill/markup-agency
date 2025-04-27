//  ____________  Mangodb Database ______________
/*
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

*/




//  ____________  Database SQL ______________

import { PrismaClient } from '@prisma/client';

declare global {
  // Ensures the `prisma` instance is available on `global` in development
  var prisma: PrismaClient | undefined;
}

// Create a singleton PrismaClient instance
const prismadb = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prismadb;


export default prismadb;
