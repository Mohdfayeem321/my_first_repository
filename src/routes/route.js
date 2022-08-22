const express = require('express');
const router = express.Router();
const authorModel2Controller = require('../controllers/authorModel2Controller.js')
const newPulisherController = require('../controllers/newPublisherController.js')
const newBook2Controller = require('../controllers/newBook2Controller.js')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createAuthor2", authorModel2Controller.createAuthor2)

router.post("/newPublisher", newPulisherController.newPublisher)

router.post("/newBook2", newBook2Controller.newBook2)

router.get("/getAllBooksByTheirId", newBook2Controller.getAllBooksByTheirId)

router.get("/updateData", newBook2Controller.updateData)

module.exports = router;