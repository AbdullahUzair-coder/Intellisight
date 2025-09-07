import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
//../a
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);

app.set("view engine", "ejs");
// Tell Express where your views folder is
app.set("views", path.join(__dirname, "src/presentation/view"));

app.use(express.static(path.join(__dirname, "src/presentation/public")));

app.get("/", (req, res) => {
    // Just give the filename (without extension if using .ejs)
    res.render("layouts/main"); 
});

app.get("/auth/login",(req,res)=>{
    res.render("auth/login");

})

app.get("/auth/signup",(req,res)=>{
    res.render("auth/signup");
})

app.get("/auth/forgotpassword",(req,res)=>{
    res.render("auth/forgotpassword");
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})