import express, { json } from "express";
import connectDB from "./database/connect_db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.port || 5000;
const mongoUri = process.env.MONGODB_URI;

connectDB(mongoUri);

// Body Parser
app.use(express.urlencoded({ extended: true }));

// generate static files:
app.use(express.static("src/public"));

// ejs setup:
app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/", (req, res) => {
  res.render("index", req.query);
});

app.listen(port, () => console.log(`server started: http://localhost:${port}`));
