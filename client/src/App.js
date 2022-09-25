import React, { useState } from 'react'
import { JsonToTable } from "react-json-to-table";
import axios from 'axios';

const App = () => {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [clickedButton, setClicked] = useState("");

  const [details, setDetails] = useState({
    name: "",
    email: "",
    yearEst: "",
    amount: "",
    accountProvider: ""

  })


  const handleChange = (evnt) => {
    const { name, value } = evnt.target;
    setDetails((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (evnt) => {
    evnt.preventDefault()
    if (clickedButton === "firstButton") {

      async function getData2() {
        try {
           let res = await axios.post( 'http://localhost:5000/api/submitFormBackend',{details: details})
            if(res.status == 200){
                console.log(res.data)
                setData(res.data)
            }     
            return res.data
        }
        catch (err) {
            console.error(err);
        }
    }
    
    getData2().then(data)

    }

    else if (clickedButton === "secondButton") {

      async function getData3() {
        try {
           let res = await axios.post( 'http://localhost:5000/api/submitFinalDecision',{details:details})
            if(res.status == 200){
                console.log(res.data)
                setData2(res.data)
            }      
            return res.data
        }
        catch (err) {
            console.error(err);
        }
    }
    
    getData3().then(data2)
    }
  }


  return <form key={1} onSubmit={handleSubmit}>

    <h3>Company Name: </h3> <input type="text" name="name" onChange={handleChange} />
    <h3>Email: </h3> <input type="text" name="email" onChange={handleChange} />
    <h3>Year Established: </h3> <input type="number" name="yearEst" onChange={handleChange} />
    <h3>Loan Amount: </h3> <input type="number" name="amount" onChange={handleChange} />
    <h3>Select Accounting Providor: </h3>

    <select name="accountProvider" onChange={handleChange} >
      <option value="Telenor">Telenor</option>
      <option value="MYOB">MYOB</option>
      <option value="Xero">Xero</option>
    </select>

    <br /><br />
    <br /><br />
    <div> <h3>Review Accounting Sheet </h3>  <JsonToTable json={data} /></div>
    <button onClick={() => { setClicked("firstButton") }} left id="submit1" type="submit" >Request Balance Sheet new</button>
    <br /><br />
    <div> <h3>Review Final Sheet </h3> <JsonToTable json={data2} /></div>
    <button onClick={() => { setClicked("secondButton") }} right id="submit2" type="submit" >Request Final Sheet new</button>
  </form>

}


export default App
