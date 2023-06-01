import { Request, Response, NextFunction, Send } from "express";

const responseLogger = (req: Request, res: Response, next: NextFunction) => {
  // Store the original res.send function
  const originalSend: Send = res.send;

  // Override the res.send function
  res.send = function (body?: any): any {
    // Log the response details
    console.log("Response:", {
      statusCode: res.statusCode,
      body,
    });

    // Call the original res.send function
    return originalSend.apply(res, arguments as any);
  };

  // Continue to the next middleware
  next();
};

export default responseLogger;
