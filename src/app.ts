import express, { Application } from "express";
import * as path from "path";
import cors from "cors";

import { DIRECTORY_NAME_SOURCE } from "./utility/constants/const-path";

import loggerResponse from "./middleware/logger-response";
import loggerRequest from "./middleware/logger-request";

import homeRouter from "./routes/home";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, DIRECTORY_NAME_SOURCE)));
app.use(loggerResponse);
app.use(loggerRequest);

// Routes
app.use("/", homeRouter);

export default app;
