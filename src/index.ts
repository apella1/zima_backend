import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

dotenv.config();

const app: Express = express();
const url =
  "mongodb+srv://Reed:wFAUB3d1eliYbxJT@cluster0.cw2cigc.mongodb.net/?retryWrites=true&w=majority";

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Zima backend is live!");
});

app.listen(port, () => console.log(`App running on port ${port}`));
