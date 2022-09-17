const express = require('express');
const router = express.Router();
const internController =require("../controllers/internController");
const collegeController = require("../controllers/collegeController");



router.post('/functionup/colleges',collegeController.collegeCreate);


router.post("/functionup/interns", internController.createIntern);


router.get("/functionup/collegeDetails",internController.getInternByCollege);



router.all("/**",  (req, res) => {
    res.status(404).send({ status: false, msg: "The api you request is not available" })
});


module.exports = router;


