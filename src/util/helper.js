let calender = new Date()
function date(){
    console.log("The current date is", calender.getDate());
}

function  month(){
    console.log("The current month is", calender.getMonth()+1)

}
function batchInfo(){
    console.log("Plutonium, W2D5, the today's topic was Nodejs module system")
}
module.exports.date = date
module.exports.month = month
module.exports.batchInfo = batchInfo