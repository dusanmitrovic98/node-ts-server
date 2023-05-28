import express, { Application, Request, Response } from "express";
import { ipv4 } from "./public/utility/network/ipv4-info";
import * as path from "path"

const app: Application = express();
const PORT = 3000;

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
    app.listen(PORT, (): void => {
        console.log(`Server url: https:// ${ipv4}:${PORT}`);
    });
} catch (error) {
    console.error(`Error occurred: ${error}`);
}