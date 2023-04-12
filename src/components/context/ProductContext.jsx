import { useState } from 'react'
import { createContext, useContext, useReducer, useEffect } from 'react'
import { reducer } from './reducer'

const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {
  // const [productList, setProductList] = useState([])

  // useEffect(() => {
  //   fetchData()
  // }, [])

  // const fetchData = async () => {
  //   const api = await fetch(
  //     'https://dummyjson.com/products?limit=100&select=title,price,id,thumbnail'
  //   )
  //   const { products } = await api.json()
  //   setProductList(products)
  // }

  const initialState = {
    cart: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const data = { state, dispatch }

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  )
}

export const ProductContextCustom = () => useContext(ProductContext)
