import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import helmet from "helmet";
import path from "path";
import cors from "cors";
import config from "./config/config.js";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(compress());
app.use(cookieParser());

// connecting to the database
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.info(`Running on ENV: ${process.env.NODE_ENV}`);
    console.info(`Connected to MongoDB`);
  })
  .catch((error) => {
    console.error(`Unable to connect.`);
    console.error(error);
  });

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Zima backend is live!");
});

app.listen(config.server.port, () =>
  console.log(`App running on port ${config.server.port}`)
);

export default app;
