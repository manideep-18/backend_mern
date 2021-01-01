const express=require('express')
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth')
const { getProductById } = require('../controllers/product')
const { getUserById } = require('../controllers/user')
const router=express.Router()

router.param('userId',getUserById)
router.param('productId',getProductById)

router.post('/product/create/:userId',isSignedIn,isAuthenticated,isAdmin,createProduct)

module.exports=router