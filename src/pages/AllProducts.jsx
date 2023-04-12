import React, { useEffect, useState } from 'react'
import Navbar from '../components/landingPage/Navbar'
import { useParams, useNavigate } from 'react-router-dom'
import ProductCard from '../components/ui/ProductCard'

const AllProducts = () => {
  const { page } = useParams()
  const [displayProducts, setDisplayProducts] = useState([])
  const toSkipCount = [0, 20, 40, 60, 80]
  const pagination = [1, 2, 3, 4, 5]
  const navigate = useNavigate()

  useEffect(() => {
    fetchDisplayProducts()
  }, [page])

  const goToAnotherPage = (number) => {
    navigate(`/products/page/${number}`)
  }

  const fetchDisplayProducts = async () => {
    const api = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${toSkipCount[page - 1]}`
    )
    const data = await api.json()
    setDisplayProducts(data.products)
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="p-2 lg:px-[150px] mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {displayProducts?.map((product) => {
            return <ProductCard key={product.id} {...product} />
          })}
        </div>
      </main>
      <footer className="flex flex-wrap justify-center gap-5 mb-10">
        {pagination.map((pageNo) => {
          return (
            <button
              key={pageNo}
              className={`${pageNo == page && 'text-orange-500'}`}
              onClick={() => goToAnotherPage(pageNo)}
            >
              {pageNo}
            </button>
          )
        })}
      </footer>
    </>
  )
}

export default AllProducts
