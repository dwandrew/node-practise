const express = require('express')

const app = express()
const port = 8080

app.get("/", (req, res)=>{
 res.send("testing")
})

app.listen(port, ()=>{
    console.log(`A node js API is listening on ${port}`)
})