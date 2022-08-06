const express = require('express');
const logger = require('../logger/logger.js');
const helper = require('../util/helper.js');
const formatter = require('../validator/formatter.js');
const router = express.Router();

router.get('/test-me', function (req, res) {
    
    res.send('Welcome to my application. I am mohd fayeem and a part of FunctionUp Plutonium cohort.')

    logger.welcome()
    helper.date()
    helper.month()
    helper.batchInfo()
    formatter.trim()
    formatter.lower()
    formatter.upper()

});


router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason