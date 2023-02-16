const mongoose =require("mongoose")


const awsSchema=new mongoose.Schema({
    "name" : {
        type : String
    },
    "count" :{
        type : Number
    } 
})

const awsModel=mongoose.model("awsmodel",awsSchema)


module.exports={
    awsModel
}