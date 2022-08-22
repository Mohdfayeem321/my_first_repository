const authorModel2Controller = require('../models/authorModel2.js')

const createAuthor2 = async function(req, res){
let data = req.body
let createData = await authorModel2Controller.create(data)
res.send({status:true, msg:createData})
}
module.exports.createAuthor2=createAuthor2