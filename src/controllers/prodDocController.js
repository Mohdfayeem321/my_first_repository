const prodDoc = require('../models/productDocumentModel')


const createProd= async function (req, res) {
    let data= req.body
    let savedData = await prodDoc.create(data)
    res.send({status:true, msg: savedData})
}

module.exports.createProd=createProd