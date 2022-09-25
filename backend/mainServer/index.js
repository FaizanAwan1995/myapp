const express = require('express')
const axios = require("axios");
const bodyParser = require('body-parser')
const cors = require('cors')
let accountingData
const app = express()
var formDetails
var finalData


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))


app.post("/api/submitFormBackend", (req, res) => {
    // Form data received in backend after submission
    const details = req.body.details
    formDetails = details
    //displaying in console
    console.log(JSON.stringify(details))
    //getting data from accounting software
    async function getData() {
        try {
            let res = await axios({
                url: 'http://localhost:5007/accountingSoftware',
                method: 'get',
                headers: {
                    'Content-Type': 'text/plain'
                },
            })
            if (res.status == 200) {
                // assigning val to accountingdata
                accountingData = res.data
            }
            return res.data
        }
        catch (err) {
            console.error(err);
        }
    }

    getData()
    //sending data back as response
    res.send(accountingData)
})

app.post("/api/submitFinalDecision", (req, res) => {

    const details = req.body.details

    async function getDatatest() {
        try {
           let res = await axios.post( 'http://localhost:5054/decisionEngine',{formDetails: formDetails, accountingData: accountingData })
            if(res.status == 200){
                console.log(res.data)
                finalData=res.data
            }     
            return res.data
        }
        catch (err) {
            console.error(err);
        }
    }
    getDatatest().then(finalData)
    res.json(finalData)
})

app.get("/api", (req, res) => {
    res.status(200).send('<h1>This is the Home API window</h1>')
})

app.listen(5000, () => { console.log("Server started on port 5000") })