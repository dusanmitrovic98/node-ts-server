import express, { Application, Request, Response } from "express";
import * as path from "path"

const app: Application = express();
const port = 3000;

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
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occurred: ${error}`);
}
