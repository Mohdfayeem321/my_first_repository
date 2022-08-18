const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema( {
      
        name:String,
        author_id:{type:Number,
            requred:true},
        price:Number,
        ratings:Number

    }, { timestamps: true });
    
    module.exports = mongoose.model('bokCollection', booksSchema)


    // const result = model.find({author_id :$eq : chetan bhagat})
    // bookmodel.find(author_id:{$eq:result.author_id})






    