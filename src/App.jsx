import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Compoents/Header'
import Home from './Pages/Home'
import AddProduct from './Pages/AddProduct'
import Products from './Pages/Products'
import Edit from './Pages/Edit'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/edit-product/:id" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App