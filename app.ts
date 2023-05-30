import { IP_ADDRESS, DIRECTORY_SOURCE, PATH_VIEW_INDEX, PATH_SSL_KEY, PATH_SSL_CERT } from "./src/utility/constants/server";
import express, { Application, Request, Response } from "express";
import * as path from "path"
import https from 'https';
import cors from "cors";
import fs from 'fs';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, DIRECTORY_SOURCE)));

const options = {
    key: fs.readFileSync(PATH_SSL_KEY),
    cert: fs.readFileSync(PATH_SSL_CERT),
  };

app.get(
    "/",
    async (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, DIRECTORY_SOURCE, PATH_VIEW_INDEX));
    }
);

try {
    let PORT: number = parseInt(process.env.PORT || '3000', 10);

    https.createServer(options, app).listen(PORT, IP_ADDRESS + "", (): void => {
        console.log(`Server url: https://${IP_ADDRESS}:${PORT}`);
    });
} catch (error) {
    console.error(`Error occurred: ${error}`);
}