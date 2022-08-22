const book2 = require('../models/newBook2.js')
const authorModel2 = require('../models/authorModel2.js')
const newPublisher = require('../models/newPublisher.js')

const newBook2 = async function (req,res){
    let data = req.body
    let authorBookId = await authorModel2.findById(data.author_id)
    let publisherId = await newPublisher.findById(data.publisher_id)
    if(!data.author_id){
        return res.send({msg:"author detail is required"})
    }
    else if(!authorBookId){
        return res.send({msg: " author Id is invalid"})
    }
    else if(!data.publisher_id){
        return res.send({msg: "publisher detail is rquired"})
    }
    else if(!publisherId){
        return res.send({msg: "publisher Id is invalid"})
    }
    let createNewBook2 = await book2.create(data)
    return res.send({msg:createNewBook2})
    }
const getAllBooksByTheirId = async function(req,res){
    let allBooks = await book2.find().populate(['author_id','publisher_id'])
    res.send({msg:allBooks})
}

const updateData = async function(req, res){
    let bookPublishedUpdate = await newPublisher.find({name:{$in:["Penguin","HarperCollinse"]}})
    let bookBymodel = await book2.find({publisher_id:bookPublishedUpdate}).updateMany({$set:{isHardCover:true, new:true}})
    let authorRating = await authorModel2.find({rating:{$gt:3.5}})
    let updatePrice = await book2.find({author_id:authorRating}).updateMany({$inc:{price:+10}})
    res.send({updatedBooks:[bookBymodel, updatePrice]})
}
module.exports={newBook2,getAllBooksByTheirId,updateData}

// a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
// b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)
   

// const listOfAll= async function (req, res){
//     let wholeDetail= await bookModel.find().populate(['author','publisher'])
//     res.send({list:wholeDetail})
// }


// const getdata= async function (req, res) {
//     let allBooks= await publishModel.find({name:{$in:["HarperCollins","penguin"]}})
//     let kitab = await bookModel.updateMany({publisher:allBooks},{$set:{isHardCover:true}})
//     let authorbooks= await authorModel.find({rating:{$gt:3.5}})
//     let updateprice= await bookModel.updateMany({author:authorbooks},{$inc:{price:+10}})
//      res.send ({MSG:[kitab,updateprice]})
// }
