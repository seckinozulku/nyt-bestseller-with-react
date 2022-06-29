import './App.css';
import Card from './Components/Card';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './Components/Details';
const axios = require('axios').default;


const App = () => {

  const [dataBestSeller, setDataBestSeller] = useState(null)
  const [date, setDate] = useState("2022-05-17")
  const [loader, setLoader] = useState("block")

  


  // fetch(`https://api.nytimes.com/svc/books/v3/lists/${date}/hardcover-fiction.json?api-key=Dn5PTqs4Gd1irM9bD0vcm9NNFauJaEpn`)
  // .then((response) => response.json())
  // .then(res => setDataBestSeller(res))

  useEffect(() => {
    axios.get(`https://api.nytimes.com/svc/books/v3/lists/${date}/hardcover-fiction.json?api-key=Dn5PTqs4Gd1irM9bD0vcm9NNFauJaEpn`)
     .then(res => setDataBestSeller(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoader("none"));
  }, [date])

  const handleChange = (e) => {
    setDate(e.target.value)
  }
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
          <>
            <Header handleChange={handleChange} date={date} />
            <div className="books-container">
              <div style={{ display: loader }} className="loader"></div>
              <div className="books-box">
                <Card data={dataBestSeller} />
              </div>
            </div>
          </>
        }>

        </Route>
        <Route path='/details' element={
          <Details />
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

