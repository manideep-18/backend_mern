const express = require('express')
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth')
const { getOrderById, createOrder, getAllOrders, getOrderStatus, updateStatus } = require('../controllers/order')
const { updateStock } = require('../controllers/product')
const { getUserById, pushOrderInPurchaseList } = require('../controllers/user')
const router  = express.Router()

//params
router.param("userId",getUserById)
router.param("orderId",getOrderById)

//routes
router.post("/order/create/:userId",isSignedIn,isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder)

router.get("/order/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrders)

//status of order
router.get("/order/status/:userId",isSignedIn,isAuthenticated,isAdmin,getOrderStatus)
router.get("/order/:orderId/status/:userId",isSignedIn,isAuthenticated,isAdmin,updateStatus)

module.exports=router