import { PrismaClient } from "@prisma/client";

export async function customSeed() {
  const client = new PrismaClient();
  
  const user = await client.user.create({
    data: {
      username: "admin",
      password: "admin",
      age: 20,
      bio: "I am the admin",
      birthDate: new Date(),
      email: "sample@sample.com",
      name: "Admin",
      extendedProperties: {},
      isCurious: true,
      location: "Earth",
      priority: "low",
      roles: {},
      score: 0,
    },
  });

  console.log(user);

  client.$disconnect();
}
