import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/landingPage/Navbar'
import ProductCard from '../components/ui/ProductCard'

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([])
  const [resultTotal, setResultTotal] = useState(0)
  const { searchItem } = useParams()

  useEffect(() => {
    fetchSearchResults()
  }, [searchItem])

  const fetchSearchResults = async () => {
    const api = await fetch(
      `https://dummyjson.com/products/search?q=${searchItem}`
    )
    const data = await api.json()
    setSearchResult(data.products)
    setResultTotal(data.total)
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="p-2 lg:px-[150px]">
        <h2 className="text-lg">
          Search results for:&nbsp;
          <span className="text-orange-500 font-bold">{searchItem}</span>
        </h2>
        <p>
          Total results:&nbsp;
          <span className="text-orange-500 font-bold">{resultTotal}</span>
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-3">
          {searchResult.map((item) => {
            return <ProductCard key={item.id} {...item} />
          })}
        </div>
      </main>
    </>
  )
}

export default SearchPage
