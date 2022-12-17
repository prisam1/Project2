//const crop = require("../Model/Crop")
const Organization = require("../Model/Organization")

const jwt = require("jsonwebtoken")





const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length > 0) return true;
    return false;
  };
  

  const isValidEmail = function (value) {
    const regexForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regexForEmail.test(value)
}
const isValidRequest = function (object) {
    return Object.keys(object).length > 0
}


const isValidPassword = function (password) {
    return (/^[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(password))
}



const createOrganization = async function(req,res)
{
     
let Organizationdata= await Organization.create(req.body)
 
return res.send({message:"Organisation Created", data:Organizationdata})

}

const login = async function (req, res) {
        const data = req.body
       
        if (!isValidRequest(data)) { return res.status(400).send({message: "data is required" }); }

        const email = data.email
        const password = data.password


        if (!isValid(email)) { return res.status(400).send({message: "Email is required" }) }
        if (!isValidEmail(email)) { return res.status(400).send({message: "enter a valid email address" }) }

        if (!isValid(password)) { return res.status(400).send({message: "Password is required" }) }
        if (!isValidPassword(password)) { return res.status(400).send({message: "Password should be in right format" }) }

        const userdata = await Organization.findOne({ email: email, password: password });
        if (!userdata) { return res.status(404).send({message: "No user found " }) }

        
        let token = jwt.sign({
            userId: userdata._id.toString()
        },
            "project"
        )

        res.header("trap", token);
        return res.status(200).send({message: "Login Successfully", data: token })
 
}


module.exports = { createuser, login} 


module.exports={createOrganization}