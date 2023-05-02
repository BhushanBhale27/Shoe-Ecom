import React from 'react'
import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {

  const [products,setProducts] = useState([])
  const [cartCount,setCartCount] = useState(0)

  const addProduct = (data) => {
    setProducts((prevProduct) => [...prevProduct,data])
  }

  const addToCart = () => {
    setCartCount((prevCount) => prevCount+1)
  }

  return (
    <>
    <Header cartCount={cartCount}/>
    <Form addProduct={addProduct} addToCart={addToCart}/>
    <Products products={products} addToCart={addToCart} />
    </>
  );
}

export default App;