const express = require("express")
const router = express.Router()

const {createcrop,getcrop}= require("../Controller/CropController")
const {createOrganization}= require("../Controller/OrganizationController")




router.post("/CreateCrop",createcrop)
router.post("/CreateOrganization", createOrganization)
router.get("/GetCrop", getcrop)



 
module.exports=router
