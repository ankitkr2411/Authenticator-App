const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const data = require('../database/data.json')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')


app.use(cors({origin:true,credentials:true}));
app.use(cors({
    origin: "http://localhost:3000",
}))
app.use(cookieParser());
app.use(express.json()); 

dotenv.config({path:'./config.env'});

const secret = process.env.SECRET_KEY;

app.post("/generate",async (req,res)=>{
    try{


        const token = jwt.sign({id:"thisisid"},secret);

    res.cookie("token",token,{
        expires:new Date(Date.now()+10000)
    });
    return res.status(200).json(data)
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({mess:"Server Error"})
    }
    
})


app.post("/check",async (req,res)=>{
    try{
    
        const token = req.cookies.token;
    const id = jwt.verify(token,secret);
    return res.status(200).json({mess:"Done"})
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({mess:"Server Error"})
    }
    
})

app.listen(5000,()=>{ 
    console.log("Server Started")
})