const express = require('express');
const router = express.Router();

router.get('/sol1', function (req, res) {
    let arr = [1,2,3,5,6,7]
    let len = arr.length
    let sum = 0;
    for (var i in arr)
    sum += arr[i]
    let firstNum = arr[0]
    let lastNum = arr.pop()
    let sumFirstplusLastNum = firstNum+lastNum;
    let missNum = (len+1)*(sumFirstplusLastNum)/2-sum;
    res.send({data:missNum});

});

router.get('/sol2', function (req, res) {
    let arr = [33,34,35,37,38];
    let len = arr.length
    let sum = 0;
    for (var i in arr)
    sum += arr[i]
    let firstNum = arr[0]
    let lastNum = arr.pop()
    let sumFirstplusLastNum = firstNum+lastNum;
    let missNum = (len+1)*(sumFirstplusLastNum)/2-sum;
    res.send({data:missNum});

});



    
    // res.send('Welcome to my application. I am mohd fayeem and a part of FunctionUp Plutonium cohort.')
    // let months = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"]
    // let result = lodash.chunk(months, 4);
    // console.log(result)
    // let oddNum = [1,3,5,7,9,11,13,15,17,19]
    // let result2 = lodash.tail(oddNum);
    // console.log(result2)
    // console.log(lodash.union([2,3], [1,2], [8,9], [10,12], [10,11]));

    // let obj = ([["Horror", "The shining"], ["Drama", "Titanic"], ["Thriller", "Shuttler Island"], ["Fantasy", "Pans labyrinth"]]);
    // console.log(lodash.fromPairs(obj))





router.get('/give-me-students-data',function(req, res){

})
module.exports = router;