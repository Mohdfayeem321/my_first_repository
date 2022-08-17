// Assignment :
// Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory
//     field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags
//     array, authorName, totalPages , stockAvailable ( true false)


const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String, unique:true },
    authorName: String, 
    tags: [String],
    prices: {
        indianPrice: String,
        europeanPrice: String,
    },
    year: Number,
    totalPages: Number,
    stockAvailable:Boolean,
}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
