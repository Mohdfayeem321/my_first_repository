const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    lastName: String,
    balance:{
        type:Number,
        default:100
    },
    address:String,
    age:Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isFreeAppUser:Boolean
}, { timestamps: true });

module.exports = mongoose.model('UserDoc', userSchema)

// name: "Sabiha Khan",
// 	balance:100, // Default balance at user registration is 100
// 	address:"New delhi",
// 	age: 90,
//  	gender: “female” // Allowed values are - “male”, “female”, “other”
// 	isFreeAppUser: false // Default false value.