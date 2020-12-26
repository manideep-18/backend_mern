var express = require('express')
const { signout } = require('../controllers/auth')
var router = express.Router()


// router.post("signup",signup)
router.get("/signout",signout)



module.exports=router