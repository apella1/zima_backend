import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(compress());
app.use(cookieParser());
// setting up mongoose
mongoose.Promise = global.Promise;
const url = "mongodb+srv://Reed:wFAUB3d1eliYbxJT@cluster0.cw2cigc.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);
mongoose.connection.on("error", () => {
    throw new Error(`Unable to connect to database: ${url}`);
});
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.status(200).send("Zima backend is live!");
});
app.listen(port, () => console.log(`App running on port ${port}`));
export default app;
//# sourceMappingURL=index.js.map