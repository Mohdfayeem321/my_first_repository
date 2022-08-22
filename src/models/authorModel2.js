const mongoose = require("mongoose")


const createAuthor2 = new mongoose.Schema({
    authorName: String,
    age: Number,
    address: String,
    rating: Number

}, {timestamps:true})

 module.exports=mongoose.model('newAuthor', createAuthor2)