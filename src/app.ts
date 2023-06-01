import express, { Application } from "express";
import * as path from "path";
import cors from "cors";

import { DIRECTORY_SOURCE } from "./utility/constants/server-constants";

import requestLogger from "./middleware/request-logger";
import responseLogger from "./middleware/response-logger";

import homeRouter from "./routes/home";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, DIRECTORY_SOURCE)));
app.use(requestLogger);
app.use(responseLogger);

// Routes
app.use("/", homeRouter);

export default app;
