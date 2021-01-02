const express = require('express')
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth')
const { getOrderById, createOrder, getAllOrders } = require('../controllers/order')
const { updateStock } = require('../controllers/product')
const { getUserById, pushOrderInPurchaseList } = require('../controllers/user')
const router  = express.Router()

//params
router.param("userId",getUserById)
router.param("orderId",getOrderById)

//routes
router.post("/order/create/:userId",isSignedIn,isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder)

router.get("/order/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrders)

module.exports=router