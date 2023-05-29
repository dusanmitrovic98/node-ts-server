import { PORT, IP_ADDRESS, DIRECTORY_NAME_PUBLIC, PATH_VIEW_INDEX, PATH_SSL_KEY, PATH_SSL_CERT } from "./public/utility/constants/server";
import express, { Application, Request, Response } from "express";
import * as path from "path"
import https from 'https';
import fs from 'fs';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, DIRECTORY_NAME_PUBLIC)));

const options = {
    key: fs.readFileSync(PATH_SSL_KEY),
    cert: fs.readFileSync(PATH_SSL_CERT),
  };

app.get(
    "/",
    async (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, DIRECTORY_NAME_PUBLIC, RELATIVE_PATH_VIEW_INDEX));
    }
);

try {
    https.createServer(options, app).listen(PORT, IP_ADDRESS + "", (): void => {
        console.log(`Server url: https://${IP_ADDRESS}:${PORT}`);
    });
} catch (error) {
    console.error(`Error occurred: ${error}`);
}