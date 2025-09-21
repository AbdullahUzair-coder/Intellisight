import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import db from "./config/db.js";
import { error } from "console";

const app = express();
const port = process.env.PORT || 4000;
//../a
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


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
    res.render("auth/login",{ error: null, emailError: false, passwordError: false });


})
app.post("/register",async (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    try{
         const checkResult = await db.query("SELECT * from users where email = $1 ",
            [email]
        );
        if(checkResult.rows.length > 0 ){
        res.send("Email already exists . Try loggings in.");
        }else{
            const result = await db.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
                [name,email,password]
            );
            console.log(result);
            res.render("auth/login",{ error: null, emailError: false, passwordError: false });
        }

        }catch(err){
         console.log(err);
    }
});

app.post("/login",async (req,res)=>{
    let email = req.body.email;
    let password = req.body.password
    try{
        const result = await db.query("SELECT * from users where email = $1 ",
            [email]
        );
        if(result.rows.length > 0){
            console.log(result.rows);
            console.log(result.rows[0]);
            let user = result.rows[0];
            let strongpassword = user.password;
            if(password===strongpassword){
                res.render("dashboard/dashboard");
            }else{
                res.render("auth/login",{
                    error: "Incorrect email or password", 
                    emailError: true, 
                    passwordError: true
                });
            }

        }else{
            res.render("auth/login",{
                error:"User not found",
                emailError: true, 
                passwordError: false
            });
        }

    }catch(err){
        console.log(err);
        res.render("login", { 
            error: "Something went wrong. Try again later.", 
            emailError: false, 
            passwordError: false 
        });
    }
});

app.get("/auth/signup",(req,res)=>{
    res.render("auth/signup");
})

app.get("/auth/forgotpassword",(req,res)=>{
    res.render("auth/forgotpassword");
})

app.get("/dashboard",(req,res)=>{
    res.render("dashboard/dashboard");
})

app.get("/students",(req,res)=>{
    res.render("students/student");
})

app.get("/teachers",(req,res)=>{
    res.render("teachers/teachers");
})

app.get("/zones",(req,res)=>{
    res.render("zones/zones");
})

app.get("/logs",(req,res)=>{
    res.render("logs/logs");
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})