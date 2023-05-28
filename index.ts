import express, { Application, Request, Response } from "express";
import { PORT } from "./public/utility/constants/server";
import * as path from "path"

const app: Application = express();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get(
    "/",
    async (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
);

try {
    app.listen(PORT, ipv4 + "", (): void => {
        console.log(`Server url: https://${ipv4}:${PORT}`);
    });
} catch (error) {
    console.error(`Error occurred: ${error}`);
}