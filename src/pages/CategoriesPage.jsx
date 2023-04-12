import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/landingPage/Navbar'
import ProductCard from '../components/ui/ProductCard'

const CategoriesPage = () => {
  const { category } = useParams()
  const [checkCategoryValid, setCheckCategoryValid] = useState(true)
  const [categoriesList, setCategoriesList] = useState([])
  const [categoryProducts, setCategoryProducts] = useState([])
  const [resultTotal, setResultTotal] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchCategoryProducts()
    if (categoriesList.includes(category)) {
      setCheckCategoryValid(true)
    } else {
      setCheckCategoryValid(false)
    }
  }, [category])

  const fetchCategories = async () => {
    const api = await fetch('https://dummyjson.com/products/categories')
    const data = await api.json()
    setCategoriesList(data)
  }

  const fetchCategoryProducts = async () => {
    const api = await fetch(
      `https://dummyjson.com/products/category/${category}`
    )
    const data = await api.json()
    setCategoryProducts(data.products)
    setResultTotal(data.total)
  }

  const changeCategory = (e) => {
    e.preventDefault()
    navigate(`/products/categories/${e.target.value}`)
  }

  return (
    <>
      <Navbar />
      <main className="p-2 lg:px-[150px]">
        <div className="flex justify-between">
          {checkCategoryValid ? (
            <h2>
              Showing from&nbsp;
              <span className="text-orange-500 capitalize">{category}</span>
            </h2>
          ) : (
            <h2>There is no such category.</h2>
          )}
          <select className="outline-none text-sm" onChange={changeCategory}>
            {categoriesList.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              )
            })}
          </select>
        </div>
        <p>
          Total results:&nbsp;
          <span className="text-orange-500 font-bold">{resultTotal}</span>
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-3">
          {categoryProducts.map((item) => {
            return <ProductCard key={item.id} {...item} />
          })}
        </div>
      </main>
    </>
  )
}

export default CategoriesPage
