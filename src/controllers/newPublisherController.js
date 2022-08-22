const publisher = require('../models/newPublisher.js')

const newPublisher = async function(req, res){
    let data = req.body
    let b = await publisher.create(data)
    res.send({status:true, msg:b})
}

module.exports.newPublisher=newPublisher
