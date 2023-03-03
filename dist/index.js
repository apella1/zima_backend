import express from "express";
const app = express();
const port = 3000;
app.get("/", (_, res) => {
    res.status(200).send("Zima backend is live!");
});
app.listen(port, () => console.log(`App running on port ${port}`));
//# sourceMappingURL=index.js.map