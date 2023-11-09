import { PrismaClient, Todo } from "@prisma/client";
const prisma = new PrismaClient();

let testId: string;

describe("todos", (): void => {
  // Setup ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  beforeEach(async (): Promise<void> => {
    const res = await prisma.todo.create({
      data: {
        title: "Test",
        description: "Test",
      },
    });
    testId = res.id;
  });

  // Teardown ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  afterEach(async (): Promise<void> => {
    await prisma.todo.deleteMany(); // Teardown
  });

  // Tests ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // CREATE
  it("should create a todo", async (): Promise<void> => {
    const res: Todo = await prisma.todo.create({
      data: {
        title: "Test",
        description: "Test",
      },
    });
    expect(res.title).toEqual("Test");
    testId = res.id;
  });

  // READ
  it("should get a todo", async (): Promise<void> => {
    const res: Todo | Todo[] | null = await prisma.todo.findUnique({
      where: {
        id: testId,
      },
    });
    expect(res?.id).toEqual(testId);
  });

  // UPDATE
  it("should update a todo", async (): Promise<void> => {
    const res: Todo = await prisma.todo.update({
      where: {
        id: testId,
      },
      data: {
        title: "Test2",
      },
    });
    expect(res.title).toEqual("Test2");
    expect(res.id).toEqual(testId);
  });

  // DELETE
  it("should delete a todo", async (): Promise<void> => {
    const res: Todo = await prisma.todo.delete({
      where: {
        id: testId,
      },
    });
    expect(res.id).toEqual(testId);
    const resVerify = await prisma.todo.findUnique({
      where: {
        id: testId,
      },
    });
    expect(resVerify).toEqual(null);
  });
});
