import express, { Application } from "express";
import * as path from "path";
import dotenv from "dotenv";
import https from "https";
import cors from "cors";
import fs from "fs";

import {
  IP_ADDRESS,
  DEFAULT_PORT,
  DIRECTORY_SOURCE,
  PATH_SSL_KEY,
  PATH_SSL_CERT,
} from "./src/utility/constants/server";

import requestLogger from "./src/middleware/request-logger";
import responseLogger from "./src/middleware/response-logger";

import homeRouter from "./src/routes/home";

dotenv.config();

const options = {
  key: fs.readFileSync(PATH_SSL_KEY),
  cert: fs.readFileSync(PATH_SSL_CERT),
};

const app: Application = express();
const server: https.Server = https.createServer(options, app);
const PORT: number = parseInt(process.env.PORT || DEFAULT_PORT);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, DIRECTORY_SOURCE)));
app.use(requestLogger);
app.use(responseLogger);

// Routes
app.use("/", homeRouter);

// Server
server.on("error", (error: Error) => {
  console.error(`An error occurred: ${error}`);
});

server.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server URL: https://${IP_ADDRESS}:${PORT}`);
});
