import { Request, Response, NextFunction, Send } from "express";

const loggerResponse = (req: Request, res: Response, next: NextFunction) => {
  const originalSend: Send = res.send;

  res.send = function (body?: any): any {
    console.log("Response:", {
      statusCode: res.statusCode,
      body,
    });

    return originalSend.apply(res, arguments as any);
  };

  next();
};

export default loggerResponse;
