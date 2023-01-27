const express=require("express")

const Randomstring= express.Router()

const strings ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ~';

function generateString(length) {
    let ans = '';
    
    for ( let i = 0; i < length; i++ ) {
        ans += strings.charAt(Math.floor(Math.random() * strings.length));
    }

    return ans;

}


Randomstring.get("/",(req,res)=>{


var generatedString;

if(req.query.diff=="medium"){
    generatedString=generateString(6)
}else if(req.query.diff=="low"){
    generatedString=generateString(4)
}else if(req.query.diff=="high"){
    generatedString=generateString(7)
}else{
    generatedString=generateString(5)
}


res.send({"randomString":generatedString})
})



module.exports={Randomstring}