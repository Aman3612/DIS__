const express = require('express')
const cors = require("cors")

const app = express()
//const customerRouter = require("..client/")

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("Server open on port 3000")
})