import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const run = async () => {
  await prisma.todo.create({
    data: {
      title: "Setup Prisma",
      description:
        "Learn something new, break stuff, get angry, then feel accomplished",
    },
  });
};

run();
