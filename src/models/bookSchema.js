const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    // with bookName, authorName, category and year .
    bookName: String,
    authorName: String,
    category: {
        type: String,
        unique: true,
        required: true
    },
    
    publishYear: Number,

}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)

    // firstName: String,
    // lastName: String,
    // mobile: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    // emailId: String,
    // gender: {
    //     type: String,
    //     enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    // },
    // age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
 //users





// On similar lines as above(today’s mongodb session APIs), complete this
// assignment and submit explainer video for the same : Create a bookSchema
// with bookName, authorName, category and year . Create same 2 api's for books i.e. : 1
// api to create a new book and another api to get the list of all books.