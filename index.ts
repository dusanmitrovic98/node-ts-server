import express, { Application, Request, Response } from "express";
import { PORT, IP_ADDRESS } from "./public/utility/constants/server";
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
    app.listen(PORT, IP_ADDRESS + "", (): void => {
        console.log(`Server url: https://${IP_ADDRESS}:${PORT}`);
    });
} catch (error) {
    console.error(`Error occurred: ${error}`);
}