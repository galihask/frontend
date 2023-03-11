import React, {useState} from 'react';
import {BrowserRouter, Route, Link, Routes, useParams} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Product from "./components/Product";
import Cart from "./components/cart/Cart";

export const BACK_END_SERVER_URL = 'ec2-16-171-23-217.eu-north-1.compute.amazonaws.com'
const App = () => {

  const [isLogged, setIsLogged] = useState(false)
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [productsInCart, setProductsInCart] = useState([]);


  return ( 
    <div > 
      <Header isLogged={isLogged} />
        <Routes> 
        <Route path="/" exact element={<HomeScreen/>} /> 
        <Route path='/product/:id'  element={<Product
            product={products.find(product => product._id === selectedProductId)}
            productsInCart={productsInCart}
            setProductsInCart={setProductsInCart}

        />} />
        <Route path='/cart'  element={<Cart productsInCart={productsInCart} setProductsInCart={setProductsInCart} />} />
        <Route path='/products'  element={<Products products={products} setProducts={setProducts} setSelectedProductId={setSelectedProductId}/>} />
          <Route path='/signup' element={<Signup setIsLogged={setIsLogged}/>} />
          <Route path='/login' element={<Login setIsLogged={setIsLogged}/>} />
        </Routes>
      <Footer/>
    </div> 
  ); 
}; 
export default App;