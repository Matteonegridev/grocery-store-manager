import express, { json } from "express";
import connectDB from "./database/connect_db.js";
import dotenv from "dotenv";
import itemsRoute from "./routes/itemsRoute.js";
import createItemsRoute from "./routes/createItems.js";
import sanitize from "express-mongo-sanitize";
import categories from "./routes/categories.js";

dotenv.config();

const app = express();
const port = process.env.port || 5000;
const mongoUri = process.env.MONGODB_URI;

connectDB(mongoUri);
app.use(sanitize());

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// generate static files:
app.use(express.static("src/public"));

// ejs setup:
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.render("index", req.query);
});

// Items Route:
app.use("/items", itemsRoute);
app.use("/items/add", createItemsRoute);

// Category route:
app.use("/categories", categories);

app.listen(port, () => console.log(`server started: http://localhost:${port}`));
