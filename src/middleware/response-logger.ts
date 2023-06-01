import { Request, Response, NextFunction } from "express";

const responseLogger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const originalSend = res.send;
};
