import dotenv from "dotenv";
import https from "https";
import fs from "fs";

import {
  IP_ADDRESS,
  DEFAULT_PORT,
  PATH_SSL_KEY,
  PATH_SSL_CERT,
} from "./src/utility/constants/server";
import app from "./src/app";

dotenv.config();

const options = {
  key: fs.readFileSync(PATH_SSL_KEY),
  cert: fs.readFileSync(PATH_SSL_CERT),
};

const server: https.Server = https.createServer(options, app);
const PORT: number = parseInt(process.env.PORT || DEFAULT_PORT);

server.on("error", (error: Error) => {
  console.error(`An error occurred: ${error}`);
});

server.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server URL: https://${IP_ADDRESS}:${PORT}`);
});
