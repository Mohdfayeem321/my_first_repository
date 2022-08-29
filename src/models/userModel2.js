const mongoose = require("mongoose")

const createUser2 = new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobile : Number,
    emailId : String,
    password : String,
    gender : {
        type:String,
        enum : ["male", "female", "others"]
    },
	isDeleted: {
        type:Boolean,
        default:false
    },
    age : Number
}, { timestamps: true });

module.exports = mongoose.model('TokenUser2', createUser2)