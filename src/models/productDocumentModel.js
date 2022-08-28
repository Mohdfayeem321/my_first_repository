const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema( {

    name:String,
	category:String,
    price:{
        type:Number,
        required:true //mandatory property
    },
}, { timestamps: true });

module.exports = mongoose.model('productDoc', prodSchema)