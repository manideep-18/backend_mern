var express = require('express')
const { signout, signup } = require('../controllers/auth')
var router = express.Router()


router.post("/signup",signup)
router.get("/signout",signout)



module.exports=router