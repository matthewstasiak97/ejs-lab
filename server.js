import express from "express";
import logger from "morgan";

const app = express();
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("Hello There!");
});

app.listen(3000, () => {
  console.clear();
  console.log("running on port 3000");
});
