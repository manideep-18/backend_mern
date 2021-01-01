const Product = require('../models/product')
const formidable = require('formidable')
const _ =require('lodash')
const fs = require('fs')

exports.getProductById=(req,res,next,id)=>{
    Product.findById(id)
    .populate("category")
    .exec((err,product)=>{
        if(err && !product){
            return res.status(400).json({
                error:'No product found in DB'
            })
        }
        res.product=product
        next()
    })
}

exports.createProduct=(req,res)=>{
    let form = new formidable.IncomingForm();
    form.keepExtensions=true

    form.parse(req,(err,fields,files)=>{
        if(err){
            return res.status(400).json({
                error:'Problem with image'
            })
        }
        //destructuring the fields
        const {name,description,price,category,stock} = fields

        if(!name ||
            !description ||
            !price ||
            !category ||
            !stock
            ){
                return res.status(400).json({
                    error:'Please include all fields'
                })
            }
        
        
        let product = new Product(fields)

        //handle file here
        if(files.photo){
            if(files.photo.size>3000000){
                return res.status(400).json({
                    error:'file size too big'
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path)
            product.photo.contentType = files.photo.type
        }
        // save to the DB
        product.save((err,product)=>{
            if(err){
            return res.status(400).json({
                error:'Saving tshirt in DB failed'
            })
        }
        res.json(product)
        })

    })
}