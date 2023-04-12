import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SearchPage from './pages/SearchPage'
import AllProducts from './pages/AllProducts'
import CategoriesPage from './pages/CategoriesPage'
import ProductDetailPage from './pages/ProductDetailPage'
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/products/page/:page" element={<AllProducts />}></Route>
        <Route
          path="/products/categories/:category"
          element={<CategoriesPage />}
        ></Route>
        <Route path="/search/:searchItem" element={<SearchPage />}></Route>
        <Route
          path="/product/detail/:id"
          element={<ProductDetailPage />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  )
}

export default App
