var jwt = require('jsonwebtoken');
require('dotenv').config()

const secret = process.env.SECRET

const Verify = async (usertoken) => {
    try{
        if(!usertoken){
            return {success:false, message: "Error! Token was not provided."}
        }
        else{
            const decoded = jwt.verify(usertoken, secret)
            console.log({success:true, data:{name:decoded.name, email:decoded.email}})
            return {success:true, data:{name:decoded.name, email:decoded.email}}
            //if(decoded == undefined){console.log("nope")}
            //return {success:true, msg: decoded}
        }
        //const userToken = req.params.Token
        //if(!userToken){
        //    res.status(200).json({success:false, message: "Error! Token was not provided."});
        //}
        //const decoded = await jwt.verify(userToken, secret)
        //console.log(decoded)
        //res.send({userToken: userToken, decoded: decoded})
    } 
    catch(err){ new Error(err)}
}

exports.Verify = Verify