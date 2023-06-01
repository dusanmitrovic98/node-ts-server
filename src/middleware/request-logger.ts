import { Request, Response, NextFunction } from "express";

const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { method, url, params, query, body } = req;

  console.log("Request:");
  console.log("Method:", method);
  console.log("URL:", url);
  console.log("Params:", params);
  console.log("Query:", query);
  console.log("Body:", body);

  next();
};

export default requestLogger;
