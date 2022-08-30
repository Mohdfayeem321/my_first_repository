const userModel2 = require("../models/userModel2");
const jwt = require("jsonwebtoken");
//<<<-------------------Create User.----------------->>

const createUser2 = async function (req, res) {
    try {
        let data = req.body
        console.log(data)
        if (Object.keys(data).length != 0) {
            let user = await userModel2.create(data)
            res.status(201).send({ status: true, msg: user })
        }
        else res.status(400).send({ msg: "BAD REQUIST" })

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
};

//<<<-------------------Login Id.----------------->>

const login = async function (req, res) {
    try {
        let userName2 = req.body.emailId
        if (!userName2) return res.status(401).send({ status: false, msg: "" })
        let password = req.body.password
        if (!password) return res.status(401).send({ status: false, msg: "Please use userId" })

        let check = await userModel2.findOne({ emailId: userName2, password: password })
        if (!check) return res.status(401).send({ status: false, msg: "UserId or password are invalid" })
        let token = jwt.sign(
            {
                userId: check._id.toString(),
                batch: "plutonium",
                organisation: "FunctionUp",
            },
            "functionup-plutonium-very-very-secret-key"
        );
        res.setHeader("x-auth-token", token);
        res.status(200).send({ status: true, token: token });
    } catch (error) {

    }

}

//<<<-------------------Get User Data.----------------->>

const getUserData = async function (req, res) {
    try {
        let userId = req.params.userId
        if (!userId) return res.status(401).send({ status: false, msg: "Please use userId" })
        let userDetails = await userModel2.findById(userId)
        if (!userDetails) return res.status(404).send({ status: false, msg: "There is no data for this userId" })
        res.status(200).send({ status: true, msg: userDetails })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })

    }
}


//<<<-------------------Update Data.----------------->>

const updateData = async function (req, res) {
    try{
    let userId = req.params.userId
    if (!userId) return res.status(401).send({ status: false, msg: "Please use userId" })
    let findAndUpdate = await userModel2.findOneAndUpdate({ _id: userId }, { $set: { firstName: "Aryan", lastName: "Afridi" } }, { new: true });
    res.status(201).send({ status: true, msg: findAndUpdate })
    }catch(error){
        return res.status(500).send(error.message)

    }

}

//<<<-------------------Delete User Data.----------------->>

const deleteData = async function (req, res) {
    try{
    let userId = req.params.userId
    if (!userId) return res.status(401).send({ status: false, msg: "Please use userId" })
    let findAndUpdate = await userModel2.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
    res.status(201).send({ status: true, msg: findAndUpdate })
    }catch(error){
        return res.status(500).send(error.messege)
    }
}

module.exports = { createUser2, login, getUserData, updateData, deleteData }
// Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.


// let token = req.headers["x-auth-token"]
    // if (!token) return res.send({ status: false, msg: "token must be present" })
    // let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    // if (!decodedToken)
    //     return res.send({ status: false, msg: "token is invalid" });


