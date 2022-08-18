// const { count } = require("console")
const BookModel= require("../models/booksModel.js")
const AuthorModel= require("../models/authorModel.js")
// const authorModel = require("../models/authorModel.js")
                    ///  1  ///
const createBooks= async function (req, res) {
    let dataOne= req.body
    let authorId = dataOne.author_id 
    if(!authorId){
        return res.send ({status: false, msg: "The author id must be present"})
    }
    let savedDataOne= await BookModel.create(dataOne)
    res.send({msg: savedDataOne})
}

         //   2   //

const createAuthors= async function (req, res) {
    let dataTwo= req.body

    let savedDataTwo= await AuthorModel.create(dataTwo)
    res.send({msg: savedDataTwo})
}

               /// 3 ///
    const listBooksByChetan= async function (req, res) {

    // let result= await Authormodel.find({authorName : "Chetan Bhagat" })
    // let result2 = await BookModel.find({author_id:{$eq:result[0].author_id}})
    // res.send({msg: result2})

    let result= await AuthorModel.findOne({authorName : "Chetan Bhagat" })
    let result2 = await BookModel.find({author_id:{$eq:result.author_id}})
    res.send({msg: result2})
}
                //  4  //
const authorOfTwoStates = async function (req, res) {

    let result1= await BookModel.findOneAndUpdate(
        {name: "Two states"},
        {$set: {price:100}},
        {new:true}
    )
    let result2 = await AuthorModel.find({author_id:{$eq:result1.author_id}})
    res.send({msg: result2})
}

                     //  5   //
const authorNameWithCostBooks = async function (req, res) {

    let result1= await BookModel.find({price:{$gte:50, $lte:100}})
    // let a=result1.map(x=>x.author_id)
    // let result2= await authorModel.find({author_id:a}).select({authorName:1,_id:0})

    let bookStore1 = []
    for(let i=0;i<result1.length;i++){
        let bookStore = result1[i].author_id
        bookStore1.push(bookStore)
    }
   let result2 = await AuthorModel.find({author_id:bookStore1}).select({authorName:1, _id:0})
    res.send({msg: result2})
}

module.exports.createBooks= createBooks
module.exports.createAuthors= createAuthors
module.exports.listBooksByChetan=listBooksByChetan
module.exports.authorNameWithCostBooks= authorNameWithCostBooks
module.exports.authorOfTwoStates= authorOfTwoStates



// find the author of “Two states” and update the book price to 100; Send back the author_name
// and updated price in response. ( This will also need 2 queries- 1st will be a findOneAndUpdate.
// The second will be a find query aith author_id from previous query)
// ● Find the books which costs between 50-100(50,100 inclusive) and respond back with the author
// names of respective books..
// bookModel.find( { price : { $gte: 50} , price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach)
// loop and get all the authorName corresponding to the authorId’s ( by querying authorModel






// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first
//     query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with
//     that author_id )
    

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    // //  )
    // let allBooks= await BookModel.findOneAndUpdate( 
    //     { authorName: "ABC"} , //condition
    //     { $set: data }, //update in data
    //     { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
    //  )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE




// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
