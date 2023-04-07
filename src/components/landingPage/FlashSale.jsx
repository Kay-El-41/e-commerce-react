import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function FlashSale() {
  const [items, setItems] = useState([])
  const [time, setTime] = useState([])

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

  return (
    <section id="flash-sale" className="p-2 md:px-5 lg:px-[150px]">
      <div className="flex justify-between mb-2">
        <h2>
          Flash Sale <span className="text-orange-500">&#40;10% off&#41;</span>{' '}
        </h2>
        <p className="text-sm text-orange-500 select-none cursor-pointer">
          Use code "<span className="font-bold">flash10off</span>"
        </p>
      </div>

      <div>
        <Swiper slidesPerView={'auto'} grabCursor={true} spaceBetween={10}>
          {items?.map((item) => {
            return (
              // without style width: auto, this carousel sucks
              <SwiperSlide key={item.id} style={{ width: 'auto' }}>
                <div className="h-[150px] w-[130px] border-orange-500 border p-1">
                  <img
                    src={item.thumbnail}
                    className="h-[100px] object-cover"
                  />
                  <h3 className="text-sm truncate select-none">{item.title}</h3>
                  <p className="text-xs flex justify-between select-none">
                    <span className=" line-through">$ {item.price}</span>
                    <span className="text-orange-500">
                      $ {(item.price - item.price * 0.1).toFixed()}
                    </span>
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
