const userDoc = require('../models/userDocumentModel.js')

const createUserDoc= async function (req, res) {
    let data= req.body
    let savedData = await userDoc.create(data)
    return res.send({status:true, msg: savedData})
}

const middle = async function (req, res, next){
    let isfreeappuser  = req.headers.isfreeappuser
    if(isfreeappuser){
        if(isfreeappuser=="true"){
            req.body.isFreeAppUser=true
        }
        else if(isfreeappuser=="false"){
            req.body.isFreeAppUser=false
        }; next()
    }
    
   else if(!isfreeappuser){
        res.send("isFreeAppUser is mandatory")
    }
   
}

module.exports={createUserDoc,middle}



// let a = {
//     name:"faheem",
//     key:"value",
//     fruits:"mango"
// }
// console.log(a.name)
// console.log(a["name"])
// let {key, fruits, name} = a
// console.log(key)