const express = require('express');
const router = express.Router();
const moment = require('moment');


const raza = require('../middlewares/faheem.js')

let amir = function (req, res) {
    let now = moment();
    const ipAddress =req.ip
    const url=req.originalUrl
    console.log(now.format('MMMM Do YYYY, h:mm:ss a'),",", ipAddress,",",url);
}
router.get("/faheem", raza.faheem, raza.aryan, raza.deep, amir)





// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
// const commonMW = require ("../middlewares/commonMiddlewares")

// // router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })




    // console.log(now)
    // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    // console.log(moment().format('dddd'))
    // console.log(moment().format("MMM Do YY"))
    // console.log(moment("19600212", "YYYYMMDD").fromNow())
    // console.log(moment().startOf('day').fromNow())
    // console.log(moment().subtract(10, 'days').calendar())
    //console.log()
    // console.log(moment().subtract(6, 'days').calendar())
    // console.log(moment().add(3, 'days').calendar())

    
    // console.log(ipAddress)
   
    // console.log(f)
   



// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)





// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)



// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




module.exports = router;