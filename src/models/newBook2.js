const mongoose = require('mongoose')
const Object_id = mongoose.Schema.Types.ObjectId


const newBook2Schema = new mongoose.Schema({
	name:String,
    author_id:{
        type: Object_id,
        ref:"newAuthor"
    },
        price:Number,
        rating:Number,

       publisher_id:{
            type: Object_id,
            ref:"newPublisher"
        },
        isHardCover:{
            type:Boolean,
            default:false
        }

}, {timestamps:true})

module.exports = mongoose.model('newBook2', newBook2Schema)