const userModel2 = require("../models/userModel2");
const jwt = require("jsonwebtoken");

const createUser2 = async function(req,res){
    let data = req.body
    let user = await userModel2.create(data)
    res.send({status:true, msg:user})
};

const login = async function(req,res){
    let userName2 = req.body.emailId
    let password = req.body.password

    let check = await userModel2.findOne({emailId:userName2, password:password})
    if(!check) return res.send({status:false, msg: "UserId or password are invalid"})
    let token = jwt.sign(
        {
          userId: check._id.toString(),
          batch: "plutonium",
          organisation: "FunctionUp",
        },
        "functionup-plutonium-very-very-secret-key"
      );
      res.setHeader("x-auth-token", token);
      res.send({ status: true, token: token });

    }

const getUserData = async function (req, res) {
    let token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "token must be present" })
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });
    let userId = req.params.userId
    let userDetails = await userModel2.findById(userId)
    if (!userDetails) return res.send({ status: false, msg: "User Details are invalid" })
    res.send({status:true, msg:userDetails})
    }

const updateData = async function (req, res){
    let userId = req.params.userId
    let findAndUpdate = await userModel2.findOneAndUpdate({_id:userId}, {$set:{firstName:"Aryan", lastName:"Afridi"}}, {new:true});
    res.send({status:true, msg:findAndUpdate})

}

const deleteData = async function(req,res){
    let userId = req.params.userId
    let findAndUpdate = await userModel2.findOneAndUpdate({_id:userId}, {$set:{isDeleted:true}}, {new:true});
    res.send({status:true, msg:findAndUpdate})
}
// Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
module.exports={createUser2,login,getUserData,updateData,deleteData}
