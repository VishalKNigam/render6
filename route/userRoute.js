const express = require("express");
const { UserModel } = require("../model/usermodel");
const userRouter = express.Router();

module.exports = {userRouter};

userRouter.post("/add" , async(req, res)=> {
   const {name,email,phone,label} = req.body;
    try {
       const user = new UserModel({name,email,phone,label}) 
       await user.save();
       res.status(200).send({"msg" : "new user added" , "user" : req.body})
    } catch (error) {
        res.status(400).send({"error" : error})
    }
})


userRouter.get( "/" ,async(req , res)=>{
    try {
        const books = await UserModel.find();
        res.status(200).send(books)
    } catch (error) {
        res.status(400).send({"error" : error})
    }
})

userRouter.delete("/delete/:id" , async(req,res)=> {
   const {id} = req.params;
   try {
    const data = await UserModel.findByIdAndDelete({_id: id})
    res.status(200).send({"msg" : "user has been deleted"})
   } catch (error) {
    res.status(400).send({"error" : error})
   }
})


userRouter.patch("/update/:id" , async(req,res)=> {
    const {id} = req.params;
    try {
     const data = await UserModel.findByIdAndUpdate({_id: id } , req.body)
     res.status(200).send({"msg" : "user has been Updated"})
    } catch (error) {
     res.status(400).send({"error" : error})
    }
 })
 