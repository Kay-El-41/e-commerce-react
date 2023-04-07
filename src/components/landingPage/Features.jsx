import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../ui/ProductCard'
import { Link } from 'react-router-dom'

const Features = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchCategoriesAPI()
  }, [])

  const fetchCategoriesAPI = async () => {
    const api = await fetch('https://dummyjson.com/products?limit=20')
    const data = await api.json()
   setProducts(data.products)
  }
  return (
    <section id="features" className="p-2 lg:px-[150px] mb-10">
      <div className="flex justify-between">
        <h2>Featured Products</h2>
        <Link className="text-sm hover:font-bold text-orange-500 select-none cursor-pointer">
          Browse All
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {products.map((item) => {
          return <ProductCard key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Features
