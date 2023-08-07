const express = require('express');
const app = express();
const cors = require('cors');
const chalk = require('chalk')
var jwt = require('jsonwebtoken');
var validator = require('validator');
const table = require('cakebase');
const { Signup } = require('./lib/signup');
const { Verify } = require('./lib/verify');
const { Login } = require('./lib/login');
require('dotenv').config()

const secret = process.env.SECRET
const port = 5000

app.use(cors())
app.use(express.json());
app.use(express.static('public'));

/*
app.get("/test", async (req, res) => {
    //console.log(req.header())
    res.header("Access-Control-Expose-Headers", "*")
    res.set("header_token", "take me !!!!!!!!!!!!!!!!!!!!!!!!!!!")
    res.send('Free node js host 🚀')
})

const VerifyUser = async (req, res) => {
    const result = await Verify(req.headers.token)
    if(result == undefined){
        res.send({
            "success": false,
            "data": false
        })
    }
    else{
        res.send(result)
    }
}

app.post("/signup", Signup);
app.post("/verify", VerifyUser)
app.post("/login", Login)
*/

app.get("/sdk", async (req, res) => {
    const list = await axios.get('https://angelhtml.github.io/json/upland1/coin.json')
    console.log(list)
    res.send("...")
})

app.listen(port, function(){
    console.log(chalk.white.bgGreen.bold(`express server is running on port https://worried-puce-shoe.cyclic.app/`));
}) 
