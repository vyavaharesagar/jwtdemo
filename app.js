const express = require("express")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")
const app = express();
const port = 3500
const secret = "sagar#303";

app.use(bodyParser.json())

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
        jwt.sign(payload,secret,{expiresIn: 2456897},(err,token)=>{
            res.status(200).json(
                    {
                        token,
                        isLoggedIn:true
                    }
                )
        })
        console.log("login successful!")
        
    }
    else{
        // return 401
        res.status(401).json({
            error:"invalid username or password"
    })
    }
})

app.post("/messages",(req,res)=>{
    //decode the jwt

    const decodedToken = jwt.decode(req.headers['Authorization']);
   
    // use the decoded token to extract the information and process the request further
})

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})