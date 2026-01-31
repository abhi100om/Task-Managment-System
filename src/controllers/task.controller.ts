import { Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (req: any, res: Response) => {
  const { page = 1, search = "", status } = req.query;

  const tasks = await prisma.task.findMany({
    where: {
      userId: req.userId,
      title: { contains: search },
      completed: status ? status === "true" : undefined
    },
    skip: (page - 1) * 10,
    take: 10
  });

  res.json(tasks);
};

export const createTask = async (req: any, res: Response) => {
  const task = await prisma.task.create({
    data: { title: req.body.title, userId: req.userId }
  });
  res.status(201).json(task);
};

export const toggleTask = async (req: any, res: Response) => {
  const task = await prisma.task.findUnique({ where: { id: +req.params.id } });

  if (!task) return res.sendStatus(404);

  const updated = await prisma.task.update({
    where: { id: task.id },
    data: { completed: !task.completed }
  });

  res.json(updated);
};
