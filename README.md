# Prisma Sandbox

Just a simple sandbox for basic setup of Prisma and Prisma Studio with Postgres.

## Getting Started

### Prerequisites

1. Docker
2. Node.js (>= 14)
3. Binci (`npm i -g binci`)

### Running

1. `binci install` Run the install script to install dependencies inside the container
2. `binci prisma:studio` Run scripts to setup Prisma, generate client, and run Prisma Studio

Once running you can access Prisma Studio at http://localhost:5555

Additionally tests have been setup for CRUD ops and can be tested with `binci test` or `binci test:watch`.

Prisma works on the convention of compiling the client from the schema. This can be done with the task `binci prisma:generate`. Additionally, Prisma requires that tables and collections are available in the database on intilization. This can be done with the task `binci prisma:migrate`. Migration files are only generated if Prisma's engine detects a change in the schema.

## Notes

I used [Binci](https://www.npmjs.com/package/binci) to run the Docker orchestration because
(while I love Docker-Compose), Binci is a bit easier to create multiple tasks and run dev environments
ephemerally without needing multiple configs. Yes, I wrote Binci, so I'm biased.

Prisma does not play well with standalone MongoDB instances. It requires a replica set which is a really
tiring thing to setup which is why I didn't do it. If we have the need for a standalone MongoDB instance
we can look into it further.
