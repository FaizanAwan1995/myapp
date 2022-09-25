const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
let accountingData
const axios = require("axios");

app.use(express.json())
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.post("/decisionEngine", (req, res) => {
    // Form data received from backend after submission 
    const details = req.body.formDetails
    let accountingData = req.body.accountingData



    var profitLossVal = 0;
    var preAssessment = 20;
    var totalAssets = 0;
    avgAssets = 0;


    //To calculate Profit Loss value and Total Assests from Accounting Data
    for (var i = 0; i < accountingData.sheet.length; i++) {
        profitLossVal += accountingData.sheet[i].profitOrLoss;
        totalAssets += accountingData.sheet[i].assetsValue
    }
    //Average of Assets
    avgAssets = totalAssets / accountingData.sheet.length

    //Applyin rule with default preAssessment = 20
    if (Math.sign(profitLossVal) > 0) {
        preAssessment = 60
    }
    if (avgAssets > details.amount) {
        preAssessment = 100
    }

    var finalData = { "Business Details": { "Name": details.name, "Year Established": details.yearEst, "Summary of Profit & Loss": profitLossVal }, "preAssesment value in %": preAssessment };
    res.send(finalData)

})


app.listen(5054, () => { console.log("Accounting Software started on port 5054") })