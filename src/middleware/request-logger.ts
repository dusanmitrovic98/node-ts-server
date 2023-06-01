import { Request, Response, NextFunction } from "express";

const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { method, url, params, query, body } = req;

  // Log the request information
  console.log("Request:");
  console.log("Method:", method);
  console.log("URL:", url);
  console.log("Params:", params);
  console.log("Query:", query);
  console.log("Body:", body);

  // Proceed to the next middleware or route handler
  next();
};

export default requestLogger;
