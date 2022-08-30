

//<<<-------------------Token check ----------------->>>

const middleware = async function(req,res,next){
    try{
    let token = req.headers["x-auth-token"]
    if (!token) return res.status(403).send({ status: false, msg: "Authentication failed" })
    next()
    } catch(error){
        res.status(500).send({status:false, msg:error.message})
    }
}

module.exports.middleware=middleware