const mongoose = require('mongoose');
const Object_id = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId:Object_id,
    productId:Object_id,
	amount: Number,
	isFreeAppUser:Boolean,
	date:String,
}, { timestamps: true });

module.exports = mongoose.model('OrderDoc', orderSchema)