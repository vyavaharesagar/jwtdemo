const express = require("express")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")
const app = express();
const port = 4500

app.use(bodyParser.jaon())

app.post("/login",(req,res)=>{
    const { username,
            password} = req.body;

            //logic to connect to database and verify the user
    if (username == "admin" && password == "admin"){
        //generate the token
        const payload = {
            name:"sagar",
            email:"vyavaharesagar303@gmail.com",
            course:"nodejs"
        }
        jwt.sign()
        console.log("login successful!")
    }
    else{
        // return 401
        res.status(401).json({
            error:"invalid username or password"
    })
    }
})

app.listen(port,()=>{
    console.log()
})