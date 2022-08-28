const orderDoc = require('../models/orderDocumentModel.js')
const userDocModel = require("../models/userDocumentModel.js")
const prodDocModel= require("../models/productDocumentModel.js")

const createOrder= async function (req, res) {
    let Ids = req.body
    let userIdSave = await userDocModel.findById(Ids.userId)
    let prodId = await prodDocModel.findById(Ids.productId)
    if(!Ids.userId){
        return res.send({status:false, msg:" UserId is mandatory"})
    }
    else if(!userIdSave){
        return res.send({status:false, msg:" Please use a valid userId"})
    }
    else if(!Ids.productId){
        return res.send({status:false, msg:" ProductId is mandatory"})
    }
    else if(!prodId){
        return res.send({status:false, msg:" Please use a valid product Id"})
    }
    if(req.headers.isfreeappuser=="true"){
        req.body.amount = 0;
        let savedData = await orderDoc.create(Ids)
            res.send({status:true, msg:savedData})
    }
    else if(req.headers.isfreeappuser=="false"){
        req.body.amount=prodId.price;
        if(userIdSave.balance>=prodId.price){
            let deductBal = await userDocModel.findOneAndUpdate({_id:Ids.userId},
                 {$set:{balance:userIdSave.balance-prodId.price}}, {new:true})

            let savedData = await orderDoc.create(Ids)
            res.send({status:true, msg: [savedData, deductBal]})
        }
        else
        {res.send("The user has insufficient balance")}
    } 
}
module.exports.createOrder=createOrder

    // const userBalance = await userDocModel.find()
    // const orderAmount = await orderDoc.find(amount)
    // if(req.body.headers==true){
    //     {$set:{{userBalance:{balance:balance}}{orderAmount:{amount:0}}{orderAmount:{isfreeappuser:true}}}}
    // let data= req.body
    


// For every purchase we save an order document in the orders collection. isFreeAppUser property in an Order document depends on the header **isFreeAppUser**. If the **isFreeAppUser** header is true then the balance of the user is not deducted and the amount in order is set to 0 as well the attribute in order **isFreeAppUser** is set to true. If this header has a false value then the product’s price is checked. This value is deducted from the user’s balance and the order amount is set to the product’s price as well as the attrbiute **isFreeAppUser** is set to false in order document.
// - Update the logic in middleware to set the **isFreeAppUser** attribute in req. Use this attribute in the route handler for setting the isFreeAppUser attributes of User and Order collection. 