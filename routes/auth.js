var express = require('express')
const { check } = require('express-validator');
const { signout, signup, signin, isSignedIn } = require('../controllers/auth')
var router = express.Router()


router.post("/signup",[
    check("name","name should be more than 3 char").isLength({min:3}),
    check("email","email is Required").isEmail(),
    check("password","password should be atleast 3 char").isLength({min:3})
],signup)

router.post("/signin",[
    check("email","email is Required").isEmail(),
    check("password","password should be atleast 3 char").isLength({min:3})
],signin)

router.get("/signout",signout)

// router.get("/testroute",isSignedIn,(req,res)=>{
//     res.send("protected route")
// })


module.exports=router