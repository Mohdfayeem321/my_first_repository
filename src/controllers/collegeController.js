const collegeModel = require("../models/collegeModel");
const regexUrl = /(https?:\/\/[^\s]+)/g;
const collegeReg = /^[a-zA-Z ,'-]+$/;

// =====================================  create college ==============================================

const collegeCreate = async (req, res) => {
    try {

    let data = req.body;
    let { name, fullName, logoLink } = data;

    if(Object.keys(data).length<3) return res.status(400).send({status:false, message:"please fill required value which is mandatory"})

    if (!name==name || name=="" ) {
        return res.status(400).send({ status: false, msg: 'Please fill name'});
    }
    if (!fullName==fullName || fullName=="") {
        return res.status(400).send({ status: false, msg: 'Please fill fullName'});
    }

    if(fullName.length<10) return res.status(400).send({status:false, message:"please use full college name"});
    
    let collegeName = collegeReg.test(name);
    let collegeFullName = collegeReg.test(fullName);

    if (collegeName == false || collegeFullName == false) {
        return res.status(400).send({
            status: false,
            message: "Please enter valid name or fullName, don't enter any special characters or digits"
        })
    }

    let checkCollege = await collegeModel.findOne({fullName:fullName})
    if(checkCollege) return res.status(400).send({status:false,message:"This college fullName already exist"})

    let checkName = await collegeModel.findOne({name:name})
    if(checkName) return res.status(400).send({status:false,message:"This abbrevation name already exist"})

    if (!logoLink==logoLink || logoLink=="") {
        return res.status(400).send({ status: false, msg: 'Please fill logo link' })
    }
    if (!regexUrl.test(logoLink.trim()))  return res.status(400).send({ status: false, message: "Provide valid url logolink in request..." })
    
    let collegeData = await collegeModel.create(data);

    let isDeleted = collegeData.isDeleted;

    data = {name, fullName, logoLink, isDeleted}
    

    res.status(201).send({status:true, data: data })

} catch (error) {
    return res.status(500).send({status:false, message:error.message})
        
}
}

module.exports = { collegeCreate }