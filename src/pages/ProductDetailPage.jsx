import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/landingPage/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { ProductContextCustom } from '../components/context/ProductContext'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [images, setImages] = useState([])
  const [product, setProduct] = useState([])
  const [cartProduct, setCartProduct] = useState([])
  const [originalPrice, setOriginalPrice] = useState(0)
  const { dispatch } = ProductContextCustom()

  useEffect(() => {
    fetchDetail()
  }, [id])

  const fetchDetail = async () => {
    try {
      const api = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await api.json()
      setProduct(data)
      setImages(data.images)
      setCartProduct({
        id: data.id,
        title: data.title,
        price: data.price,
        thumbnail: data.thumbnail,
      })
      setOriginalPrice(
        data.price + (data.price * data.discountPercentage) / 100
      )
    } catch (err) {
      console.log('Error Fetching Data')
    }
  }

  const addToCart = async () => {
    if (cartProduct) {
      dispatch({ type: 'ADD_TO_CART', payload: cartProduct })
    }
  }

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="p-2 px-5 md:px-[100px] lg:px-[150px] flex flex-col gap-3 lg:flex-row lg:gap-10 h-[90vh] lg:justify-center lg:items-center">
        <div className="lg:w-2/3">
          <Swiper
            slidesPerView={'auto'}
            grabCursor={true}
            spaceBetween={10}
            centeredSlides={true}
          >
            {images?.map((image, idx) => {
              return (
                <SwiperSlide key={idx} style={{ width: 'auto' }}>
                  <img
                    src={image}
                    className="w-[500px] h-[300px] object-scale-down lg:object-scale-down"
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        <div className="flex flex-col justify-center gap-3 lg:w-1/2">
          <div className="flex justify-between lg:flex-col">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-orange-500 font-bold">$&nbsp;{product.price}</p>
          </div>
          <div>
            <p>
              Original Price:&nbsp;{' '}
              <span className="text-orange-500 font-bold">
                ${originalPrice}
              </span>
            </p>
            <p className="text-sm">
              Discount Percentage&nbsp;
              <span className="text-orange-500 font-bold">
                {product.discountPercentage}%
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-lg text-orange-500">Description</h3>
            <p className="text-sm">{product.description}</p>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <h4 className="text-orange-500">Brand</h4>
              <p className="text-sm">{product.brand}</p>
            </div>
            <div>
              <h4 className="text-orange-500">Rating</h4>
              <p className="text-sm">{product.rating} out of 5</p>
            </div>
          </div>

          <div className="absolute lg:static bottom-0 left-0 p-5 lg:p-0 w-full">
            <div className="flex gap-2">
              <button className="bg-slate-500 hover:opacity-90 text-white rounded-xl w-1/2 lg:w-1/3 p-2 text-sm">
                Message Supplier
              </button>
              <button
                className="bg-orange-500 hover:opacity-90 active:scale-95 text-white rounded-xl w-1/2 lg:w-1/3 p-2 text-sm"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductDetailPage
