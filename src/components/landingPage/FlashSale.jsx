import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useNavigate } from 'react-router-dom'

function FlashSale() {
  const [items, setItems] = useState([])
  const [time, setTime] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const api = await fetch(
      'https://dummyjson.com/products?limit=10&select=title,price,thumbnail'
    )
    const data = await api.json()
    setItems(data.products)
  }

  const goToDetailPage = (id) => {
    navigate(`/product/detail/${id}`)
  }

  return (
    <section id="flash-sale" className="p-2 md:px-5 lg:px-[150px]">
      <h2 className="mb-2">
        Flash Sale{' '}
        <span className="text-orange-500">&#40;Super Discount Sales&#41;</span>{' '}
      </h2>

      <div>
        <Swiper slidesPerView={'auto'} grabCursor={true} spaceBetween={10}>
          {items?.map((item) => {
            return (
              // without style width: auto, this carousel sucks
              <SwiperSlide key={item.id} style={{ width: 'auto' }}>
                <div
                  className="h-[150px] w-[130px] border-orange-500 border p-1"
                  onClick={() => goToDetailPage(item.id)}
                >
                  <img
                    src={item.thumbnail}
                    className="h-[100px] object-cover"
                  />
                  <h3 className="text-sm truncate select-none">{item.title}</h3>
                  <p className="text-xs flex justify-between select-none">
                    <span className=" line-through">
                      $ {(item.price + item.price * 0.1).toFixed()}
                    </span>
                    <span className="text-orange-500">$ {item.price}</span>
                  </p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default FlashSale
