import express from "express";

const app = express();
const url =
  "mongodb+srv://Reed:wFAUB3d1eliYbxJT@cluster0.cw2cigc.mongodb.net/?retryWrites=true&w=majority";

const port = 3000;

app.get("/", (_, res) => {
  res.status(200).send("Zima backend is live!");
});

app.listen(port, () => console.log(`App running on port ${port}`));
