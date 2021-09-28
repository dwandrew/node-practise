const express = require('express')
const morgan = require("morgan")
const mongoose = require("mongoose")
const postRoutes = require('./routes/post')
const app = express()
const port = 8080

const MONGO_URI = "mongodb://localhost/nodeapi"

mongoose.connect(MONGO_URI, {})
.then(()=> console.log("DB connected"))

mongoose.connection.on("error", err=> console.log(`DB connection error: ${err}`))

app.use(morgan("dev"))

app.use("/", postRoutes)

app.listen(port, ()=>{
    console.log(`A node js API is listening on ${port}`)
})