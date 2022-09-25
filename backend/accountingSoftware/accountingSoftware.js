const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
let accountingData = require('../accountingData.js')
const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/accountingSoftware", (req, res) => {
   // Form data received in backend after submission
   res.send(accountingData)  
})

app.listen(5007, () => { console.log("Accounting Software started on port 5007") })