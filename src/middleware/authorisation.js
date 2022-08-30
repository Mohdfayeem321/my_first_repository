const jwt = require("jsonwebtoken");

const authorisation = async function(req, res, next){
    let token = req.headers["x-auth-token"]
    let verify = jwt.verify(token, "functionup-plutonium-very-very-secret-key")
    let userIdToken = verify.userId
    let auth = req.params.userId
    if(auth!==userIdToken) return res.send({status:false, msg:"This operation won't be execute"})
    next()
}
module.exports.authorisation=authorisation