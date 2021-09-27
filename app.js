const express = require('express')
const morgan = require("morgan")
const postRoutes = require('./routes/post')
const app = express()
const port = 8080

app.use(morgan("dev"))

app.use("/", postRoutes)

app.listen(port, ()=>{
    console.log(`A node js API is listening on ${port}`)
})