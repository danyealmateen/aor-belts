import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectToDatabase from "../db/db";
import getStudents from "./get";
import putRoute from "./put";
import path from "path";
import login from "./login";
import addNewKid from "./post";
dotenv.config();

const pathToBuildFolder = path.join(
  __dirname,
  "../../../frontend/fe-aor-belts/build"
);

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: [
      "https://aor-belts-main.onrender.com",
      "http://localhost:3001",
      "http://localhost:3000",
      "http://localhost:3000/api/login",
      "http://localhost:3000/api/students/:id",
      "https://aor-belts-main.onrender.com/api/students/",
      "https://aor-belts-main.onrender.com/api/addkid",
    ],
  })
);

app.use(bodyParser.json());
app.use(express.static(pathToBuildFolder));
app.use("/api", login);
app.use("/api", getStudents);
app.use("/api", putRoute);
app.use("/api", addNewKid);
app.get("*", (req, res) => {
  res.sendFile(path.join(pathToBuildFolder, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening to port: ${PORT}`);
});

connectToDatabase();
