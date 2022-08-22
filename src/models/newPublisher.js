const mongoose = require('mongoose')

const newPublisher = new mongoose.Schema({
    name:String,
    headQuarter: String
    
}, {timstamps:true})

module.exports = mongoose.model('newPublisher', newPublisher)