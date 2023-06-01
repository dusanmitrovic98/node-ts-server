import {
  IP_ADDRESS,
  DEFAULT_PORT,
  DIRECTORY_SOURCE,
  PATH_VIEW_INDEX,
  PATH_SSL_KEY,
  PATH_SSL_CERT,
} from "./src/utility/constants/server";
import express, { Application, Request, Response } from "express";
import * as path from "path";
import dotenv from "dotenv";
import https from "https";
import cors from "cors";
import fs from "fs";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, DIRECTORY_SOURCE)));

const options = {
  key: fs.readFileSync(PATH_SSL_KEY),
  cert: fs.readFileSync(PATH_SSL_CERT),
};

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, DIRECTORY_SOURCE, PATH_VIEW_INDEX));
});

// try {
//     let PORT: number = parseInt(process.env.PORT || DEFAULT_PORT, 10);

//     https.createServer(options, app).listen(PORT, IP_ADDRESS + "", (): void => {
//         console.log(`Server url: https://${IP_ADDRESS}:${PORT}`);
//     });
// } catch (error) {
//     console.error(`Error occurred: ${error}`);
// }
let PORT: number = parseInt(process.env.PORT || DEFAULT_PORT);
const server = https.createServer(options, app);

server.on("error", (error: Error) => {
  console.error(`An error occurred: ${error}`);
});

server.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server URL: https://${IP_ADDRESS}:${PORT}`);
});
