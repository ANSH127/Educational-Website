const { time } = require("console");
const express= require("express");
const fs = require("fs");
const port=80
const path=require("path")
const app= express();



// EXPRESS SPECIFIC STUFF
// for serving static files
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
// set the template engine as pug
app.set('view engine', 'pug');

// set the views directory
app.set('views',path.join(__dirname,'views'))

//ENDSPOINT
app.get('/',(req,res)=>{
    res.status(200).render('index')
})

app.get('/contact',(req,res)=>{
    res.status(200).render('contact')
})

app.post('/con',(req,res)=>{
    name1=req.body.name1
    email=req.body.email
    sub=req.body.subject
    more=req.body.text
    console.log(name1)
    console.log(email)
    console.log(sub)
    console.log(more)
    res.send('<script>alert("Data Added Sucessfully")</script>')
    
    
})

app.listen(port,()=>{
    console.log(`the application started sucessfully on port ${port}`);
})
