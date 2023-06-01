import { Request, Response, NextFunction } from "express";

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  // Log request details, such as method, URL, request body, headers, etc.
  // This can be logged to the console, a file, or a logging service
  next();
}
