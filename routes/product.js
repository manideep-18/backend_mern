const express=require('express')
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth')
const { getProductById, createProduct, getProduct, photo, updateProduct, deleteProduct, getAllProducts } = require('../controllers/product')
const { getUserById } = require('../controllers/user')
const router=express.Router()

router.param('userId',getUserById)
router.param('productId',getProductById)

router.post('/product/create/:userId',isSignedIn,isAuthenticated,isAdmin,createProduct)

router.get('/product/:productId',getProduct)
router.get('/product/photo/:productId',photo)

router.delete("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,deleteProduct)

router.put("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,updateProduct)

//listing route
router.get("/products",getAllProducts)


module.exports=router