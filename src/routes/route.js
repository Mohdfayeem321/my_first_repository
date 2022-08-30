const express = require('express');
const router = express.Router();
// const userController= require("../controllers/userController")
const user2Controller = require("../controllers/userController2")

const middle = require("../middleware/auth.js")
const auth = require("../middleware/authorisation")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser2", user2Controller.createUser2)

router.post("/login", user2Controller.login)

router.get("/getUserData/:userId",auth.authorisation, middle.middleware, user2Controller.getUserData)

router.get("/updateData/:userId", auth.authorisation, middle.middleware, user2Controller.updateData)

router.get("/deleteData/:userId", middle.middleware, user2Controller.deleteData)

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

//The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

module.exports = router;