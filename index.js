const express = require("express")
const cors = require("cors")
const { dbConnection } = require("./db")
const { awsModel } = require("./model/awsmodel")


const app = express()

app.use(cors())

app.get("/", async (req, res) => {

    let data = await awsModel.find()

    res.status(200).send(data)

    await awsModel.insertMany([{
        name: (Math.random() + 1).toString(36).substring(7),
        count: Math.floor(
            Math.random() * (200 - 10 + 1) + 10
        )
    }])
})

app.get("/delete", async (req, res) => {
    try {
        await awsModel.find({}).limit(1).exec((err, result) => {
            if (result.length > 0) {
                awsModel.findOneAndDelete({ _id: result[0]._id }, (err, deleted) => {
                    if (err) throw err;
                    res.send(deleted)
                });
            }
        })
    }
    catch (err) {
        console.log("errr ==>",err)
    }   

})


app.listen(3000, () => {
    dbConnection()
    console.log("server is running")
})