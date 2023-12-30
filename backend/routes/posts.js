const express= require('express')
const router= express.Router()
const User=require('../models/User')
const bcrypt = require('bcrypt')
const Post = require("../models/Post") 
const Comment = require("../models/Comment") 
const { info } = require('console')
const verifyToken = require('../verifyToken')

//CREATE
router.post("/create",async(req,res)=>{
    try{
        const newPost= new Post(req.body)
        const savedPost= await newPost.save()
        res.status(200).json(savedPost)
    }
    catch(err){
        res.status(200).json(err)
    }
})

//UPDATE
router.put("/:id",verifyToken,async(req,res)=>{
    try{
        const updatedUser=await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//DELETE
router.delete("/:id",verifyToken,async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Post has been deleted!")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET POST DETAILS
router.get("/",async(req,res)=>{
    const query= req.query;
    try{
        const searchFilter={
            title:{$regex:query.search,$options:"i"}   
        }
        const posts= await Post.find(query.search?searchFilter:null)
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports=router
//