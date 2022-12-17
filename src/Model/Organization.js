const mongoose = require("mongoose")
const organizationSchema = new mongoose.Schema({
       organization :{
        type:String,
        require:true
       },
       property:{
        type:String,
        require:true
       },
       region:{
        type:String,
        require:true
       },
       field:{
        type:String
       }
       
},{timestamps:true})



module.exports = mongoose.model('Organization',organizationSchema)