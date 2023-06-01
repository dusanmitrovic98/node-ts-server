import dotenv from "dotenv";
import https from "https";
import fs from "fs";

import { PATH_SSL_KEY, PATH_SSL_CERT } from "./src/utility/constants/const-ssl";
import { serverConfig } from "./configuration/config-server";
import app from "./src/app";

dotenv.config();

const options = {
  key: fs.readFileSync(PATH_SSL_KEY),
  cert: fs.readFileSync(PATH_SSL_CERT),
};

const server: https.Server = https.createServer(options, app);

server.on("error", (error: Error) => {
  console.error(`An error occurred: ${error}`);
});

server.listen(serverConfig.port, serverConfig.ipAddress, () => {
  console.log(`Server: https://${serverConfig.ipAddress}:${serverConfig.port}`);
});

//
