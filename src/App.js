import React from 'react'; 
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom' 
import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
const App = () => { 
  return ( 
    <div > 
      <Header /> 
        <Routes> 
        <Route path="/" exact element={<HomeScreen/>} /> 
        <Route path='/product/:id'  element={<ProductScreen/>} /> 
        <Route path='/cart'  element={<h1>Cart</h1>} /> 
        </Routes>  
      <Footer/>
    </div> 
  ); 
}; 
export default App;