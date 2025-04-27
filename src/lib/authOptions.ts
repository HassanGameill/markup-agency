// import { NextAuthOptions } from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import prisma from "./prismaDB/prismadb";

// export const authOptions: NextAuthOptions = {
//   // Prisma Adapter for connecting NextAuth with your Prisma DB
//   adapter: PrismaAdapter(prisma),

//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),

//     FacebookProvider({
//       clientId: process.env.FACEBOOK_CLIENT_ID as string,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
//     }),

//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials.password) {
//           throw new Error("Invalid email or password");
//         }

//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials.email,
//           },
//         });

//         if (!user || !user?.hashedPassword) {
//           throw new Error("Invalid email or password");
//         }

//         const isCorrectPassword = await bcrypt.compare(
//           credentials.password,
//           user.hashedPassword,
//         );

//         if (!isCorrectPassword) {
//           throw new Error("Invalid email or password");
//         }

//         return { id: user.id, email: user.email, name: user.name }; // Include necessary fields
//       },
//     }),
//   ],

//   pages: {
//     signIn: "/sign-in",
//   },

//   debug: process.env.NODE_ENV === "development",
//   session: {
//     strategy: "jwt",
//   },

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id; // Add userId to the token
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token?.id) {
//         session.user.id = token.id; // Add userId to the session
//       }
//       return session;
//     },
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// };
