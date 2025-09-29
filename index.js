import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import db from "./config/db.js";
import bcrypt from "bcrypt";

import authRoutes from "./src/routes/auth.routes.js";
import dashboardRoutes from "./src/routes/dashboard.routes.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 4000;
const saltRounds = 10;

// Middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);

app.set("view engine", "ejs");
// Tell Express where your views folder is
app.set("views", path.join(__dirname, "src/presentation/view"));
app.use(express.static(path.join(__dirname, "src/presentation/public")));

// Routes
app.use("/", authRoutes);
app.use("/", dashboardRoutes);


app.listen(port, () => {
console.log(`Listening on port ${port}`);
});
