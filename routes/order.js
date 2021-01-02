const express = require('express')
const { isSignedIn, isAuthenticated } = require('../controllers/auth')
const { getOrderById, createOrder } = require('../controllers/order')
const { updateStock } = require('../controllers/product')
const { getUserById, pushOrderInPurchaseList } = require('../controllers/user')
const router  = express.Router()

//params
router.param("userId",getUserById)
router.param("orderId",getOrderById)

//routes
router.post("/order/create/:userId",isSignedIn,isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder)

module.exports=router