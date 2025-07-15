const express=require("express");
const app=express();
const path=require("path");
const projects=require("./data/data.json");
// const { v4: uuidv4 } = require('uuid');
// const methodOverride = require('method-override')

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
 app.use(express.static(path.join(__dirname,"public")));
// app.use(methodOverride('_method'))

let port=3000;
app.listen(port,()=>{
    console.log(`app is listening at port ${port}`)
})
//home page
app.get("/projects",(req,res)=>{
    res.render("home.ejs",{projects});
})
//as a student
app.get("/projects/student",(req,res)=>{
      res.render("student.ejs",{projects});
})
//student apply
app.get("/projects/student/apply",(req,res)=>{
       res.render("apply.ejs");
})
app.post("/projects/student/apply/success",(req,res)=>{
  
    res.render("applySuccess.ejs");
})
//as a company
app.get("/projects/company",(req,res)=>{
     res.render("company.ejs",{projects});
})
//form for add
app.get("/projects/new",(req,res)=>{
    res.render("new.ejs");
})
// redirect to company
app.post("/projects",(req,res)=>{
     let {title,description}=req.body;
     projects.push({title,description});
     res.redirect("/projects/company");
  
})