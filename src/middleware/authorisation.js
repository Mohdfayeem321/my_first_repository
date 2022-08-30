//<<<-------------------User Authorisation.----------------->>
const jwt = require("jsonwebtoken");
const authorisation = async function(req, res, next){
    try{
    let token = req.headers["x-auth-token"]
    if (!token) return res.status(403).send({ status: false, msg: "Authentication failed"})
    let verify = jwt.verify(token, "functionup-plutonium-very-very-secret-key")
    if(!verify) return res.status(401).send("Authentication missing")
    let userIdToken = verify.userId
    let auth = req.params.userId
    if(auth!==userIdToken) return res.status(401).send({status:false, msg:"Authentication failed for matching of userId and TokenId"})
    next()
    } catch(error){
        res.status(500).send(error.message)
    }
}
module.exports.authorisation=authorisation