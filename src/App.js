import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/themecontext';
import { Home } from './routes/Home';
import {Signin} from './routes/Signin'
import {Signup} from './routes/Signup'
import {Account} from './routes/Accounts'
import {CoinPage} from './routes/CoinPage'

import axios from 'axios'
import Footer from './components/Footer';
import { AuthContextProvider } from './context/AuthContext';
 
function App() {

// use for useEffect and axios API call
const [coins,setCoins] = useState([])

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'

useEffect(() => {
  axios.get(url).then((response) => {
    setCoins(response.data)
    console.log(response.data)
  })
}, [url])

  return (
  <ThemeProvider>
    <AuthContextProvider>

    <Navbar />
    <Routes> 
       <Route path='/' element={<Home coins={coins}/>} />
       <Route path='/signin' element={<Signin />} />
       <Route path='/signup' element={<Signup />} />
       <Route path='/Accounts' element={< Account />} />
       <Route path='/' element={<Home />} />
       <Route path='/coin/:coinId' element={<CoinPage/>} />
        <Route path='/:coinId'/>
    </Routes>
    <Footer /> 
    </AuthContextProvider>
  </ThemeProvider>
  );
}

export default App;
