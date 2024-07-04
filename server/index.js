import express from "express";
import bodyParser from "body-parser";
import COURSES from "./courses.js";
import cors from "cors";
const app = express();
const jsonParser = bodyParser.json();
app.use(cors());
app.use(jsonParser);

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
      msg: "hello world",
    });
  });

app.get("/courses", (req, res) => {
    res.json({
      courses: COURSES,
    });
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});