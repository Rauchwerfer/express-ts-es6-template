import express, { Express, Request, Response } from 'express';
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });

app.listen(3000)


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });