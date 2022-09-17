const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")

// =============================Using regex==============================================

const mobileNub = /[6 7 8 9][0-9]{9}/
const checkName = /^[a-z\s]+$/i
const emailMatch = /[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/

// ===================================create intern data=================================

const createIntern = async function (req, res) {
    try {

        let data = req.body;

        let { name, mobile, email, collegeName } = data;

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "please use data to create intern" })
        if (Object.keys(data).length < 4) return res.status(400).send({ status: false, message: " please enter mandatory data" })

//========================= Name Validations =============================================

        if (!name == name || name == "") return res.status(400).send({ status: false, message: "please use name" })
        if (!checkName.test(name)) return res.status(400).send({ status: false, message: "please use correct name" })
        const Name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        name = Name;

//================================== Mobile validation ====================================

        if (!mobile == mobile || mobile == "") return res.status(400).send({ status: false, message: "please put mobile number" })
        if (!mobileNub.test(mobile)) return res.status(400).send({ status: false, message: "please use correct mobile number" })
        if (mobile.length > 10 || mobile.length < 10) return res.status(400).send({ status: false, message: "please use valid mobile number" })

//============================= Email validation ===========================================

        if (!email == email || email == "") return res.status(400).send({ status: false, message: "please use email" })
        if (!emailMatch.test(email)) return res.status(400).send({ status: false, message: "please use correct email" })

//=================================== Data existing validation ==============================

        let validateMobile = await internModel.findOne({ mobile: mobile });
        if (validateMobile) return res.status(400).send({ status: false, message: "This mobile number already registered" })
        
        let validEmail = await internModel.findOne({ email: email });
        if (validEmail) return res.status(400).send({ status: false, message: "this emailId already registered" })

//==================================== College validation ====================================

        if (!collegeName == collegeName || collegeName == "") return res.status(400).send({ status: false, message: "please use correct collegeName" })
        if (!checkName.test(collegeName)) return res.status(400).send({ status: false, message: "please use correct college name" })

        let existCollegeName = await collegeModel.findOne({ name: collegeName })
        if (!existCollegeName) return res.status(404).send({ status: false, message: "this college is not exist" })

//============================== Data creating ===============================================

        let collegeId = existCollegeName._id

        let isDeleted = existCollegeName.isDeleted

        data = { name, mobile, email, collegeId, isDeleted }

        await internModel.create(data)

        return res.status(201).send({ status: true, data: data })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


//=========================== Get Interns Data =================================================

let getInternByCollege = async function (req, res) {
    try {

        let collegeName = req.query.collegeName;

//=========================== Check college name validation ====================================

        if (!collegeName) return res.status(404).send({ status: false, message: "please provide collegeName" });
        const data = await collegeModel.findOne({ name: collegeName, isDeleted: false })

        if (!data) return res.status(404).send({ status: false, message: `college: ${collegeName} not found...` })

//======================================== Get intern data =====================================

        let collegeId = data._id

        let intern = await internModel.find({ collegeId: collegeId, isDeleted: false }).select({ _id: 1, name: 1, email: 1, mobile: 1 })

        return res.status(200).send({
            status: true,
            data: {
                name: data.name,
                fullName: data.fullName,
                logoLink: data.logoLink,
                interns: intern
            }
        })

    } catch (err) { return res.status(500).send({ status: false, message: err.message }) }
}


module.exports = { createIntern, getInternByCollege }