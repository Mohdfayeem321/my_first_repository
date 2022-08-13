const bookSchema= require("../models/bookSchema.js")

const createBook= async function (req, res) {
    let data= req.body
    let bookStored= await bookSchema.create(data)
    res.send({msg: bookStored})
}

const getBookList= async function (req, res) {
    let bookList= await bookSchema.find()
    res.send({msg: bookList})
}

module.exports.createBook= createBook
module.exports.getBookList= getBookList