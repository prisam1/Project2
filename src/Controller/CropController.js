const Crop = require("../Model/Crop")
//const { create } = require("../Model/Organisation")


const createcrop = async function(req,res)
{

cropdata= await Crop.create(req.body)
 
return res.send({message:"Crop Created", data:cropdata})

}

const getcrop =async function(req,res)
{


let cdata= await Crop.find()

return res.send({data:cdata})

}

module.exports={createcrop,getcrop}