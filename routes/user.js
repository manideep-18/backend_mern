const express=require('express')
const { isSignedIn, isAuthenticated } = require('../controllers/auth')
const { getUserById, getUser, updateUser } = require('../controllers/user')
const router=express.Router()

router.param('userId',getUserById)

router.get("/user/:userId",isSignedIn,isAuthenticated,getUser)

router.put("/user/:userId",isSignedIn,isAuthenticated,updateUser)


module.exports=router
