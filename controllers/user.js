const User= require("../models/user")

exports.getUserById  = (req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err && !user){
            return res.status(400).json({
                 error:"No user find in DB"
            })
        }
        req.profile=user
        next()
    })
}

exports.getUser=(req,res)=>{
    req.profile.salt=undefined
    req.profile.encry_password=undefined
    return res.json(req.profile)
}

exports.getUsersDetails=(req,res)=>{
    User.find().exec((err,users)=>{
        if(err || !users){
            return res.status(403).json({
                error:'No users found'
            })
        }
       return res.json(users)

    })
}