import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type CreateTodo = {
  name: string;
  status: string;
};

const add = async (req: Request, res: Response) => {
  const { name, status } = req.body as CreateTodo;
  try {
    const todo = await prisma.todos.create({
      data: {
        name,
        status,
      },
    });
    res.send(todo);
  } catch (error) {
    res.send(error);
  }
};

const getTodos = async (req: Request, res: Response) => {
  try {
    const todo = await prisma.todos.findMany();
    res.send(todo);
  } catch (error) {
    res.send(error);
  }
};

const deleteTodos = async (req: Request, res: Response) => {
  try {
    const todo = await prisma.todos.delete({ where: { id: req.body.id } });
    res.send(todo);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { add, getTodos, deleteTodos };
