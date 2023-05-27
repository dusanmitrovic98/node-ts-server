import express, { Express, Request, Response } from 'express';
import path from 'path';

const app: Express = express();
const PORT: number = 3000;

app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'public', 'src/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});