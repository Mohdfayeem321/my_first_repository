const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const booksapi = require('../controllers/booksapi.js')

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createBook", booksapi.createBook  )

router.get("/getBookList", booksapi.getBookList  )

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;


// On similar lines as above(today’s mongodb session APIs), complete this
// assignment and submit explainer video for the same : Create a bookSchema
// with bookName, authorName, category and year . Create same 2 api's for books i.e. : 1
// api to create a new book and another api to get the list of all books.