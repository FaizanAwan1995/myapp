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

    // Business Logic
    // If a business has made a profit in the last 12 months. The final value to be sent with a field "preAssessment": "60" which means the Loan is favored to be approved 60% of the requested value. 
    // If the average asset value across 12 months is greater than the loan amount then "preAssessment": "100"
    // Default value to be used 20


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
    
    //finalData Summary is prepared here
    var finalData = { "Business Details": { "Name": details.name, "Year Established": details.yearEst, "Summary of Profit & Loss": profitLossVal }, "preAssesment value in %": preAssessment, "Approved Loan: ": ((details.amount)*(preAssessment/100))};
    res.send(finalData)

})


app.listen(5054, () => { console.log("Accounting Software started on port 5054") })
