const express = require('express');
const lodash = require('lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
    
    res.send('Welcome to my application. I am mohd fayeem and a part of FunctionUp Plutonium cohort.')
    let months = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"]
    let result = lodash.chunk(months, 4);
    console.log(result)
    let oddNum = [1,3,5,7,9,11,13,15,17,19]
    let result2 = lodash.tail(oddNum);
    console.log(result2)
    console.log(lodash.union([2,3], [1,2], [8,9], [10,12], [10,11]));

    let obj = ([["Horror", "The shining"], ["Drama", "Titanic"], ["Thriller", "Shuttler Island"], ["Fantasy", "Pans labyrinth"]]);
    console.log(lodash.fromPairs(obj))


});


router.get('/give-me-students-data',function(req, res){

})
module.exports = router;