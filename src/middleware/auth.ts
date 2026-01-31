import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  try {
    const payload: any = jwt.verify(token, process.env.JWT_SECRET!);
    req.userId = payload.userId;
    next();
  } catch {
    return res.sendStatus(403);
  }
};
