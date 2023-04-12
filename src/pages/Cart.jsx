import React, { useState } from 'react'
import Navbar from '../components/landingPage/Navbar'
import { ProductContextCustom } from '../components/context/ProductContext'
import CartItem from '../components/ui/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {
    state: { cart },
  } = ProductContextCustom()
  const { dispatch } = ProductContextCustom()

  const total = cart?.reduce((pv, cv) => pv + cv.price, 0)
  const [mainTotal, setMainTotal] = useState(total)

  const increasePrice = (price) => {
    setMainTotal(mainTotal + price)
  }

  const decreasePrice = (price) => {
    setMainTotal(mainTotal - price)
  }

  const cleanCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="p-2 lg:px-[150px] mb-10">
        <h2 className="text-center text-xl my-5">Your Cart:</h2>
        {cart.length > 0 ? (
          <>
            <div>
              {cart?.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    {...item}
                    increasePrice={increasePrice}
                    decreasePrice={decreasePrice}
                  />
                )
              })}
            </div>
            <hr />
            <div className="flex justify-between p-3">
              <h2>Total</h2>
              <p>
                $&nbsp;
                <span className="text-orange-500 font-bold">{mainTotal}</span>
              </p>
            </div>
            <div className="absolute left-0 bottom-5 px-5 w-full flex justify-between gap-2">
              <button
                className="bg-slate-500 hover:opacity-90 active:scale-95 text-white rounded-xl w-1/2 lg:w-1/3 p-2 text-sm"
                onClick={cleanCart}
              >
                Clear Cart
              </button>
              <button className="bg-orange-500 hover:opacity-90 active:scale-95 text-white rounded-xl w-1/2 lg:w-1/3 p-2 text-sm">
                Confirm Order
              </button>
            </div>
          </>
        ) : (
          <div className=" flex flex-col items-center">
            <h2>Your Cart is Empty.</h2>
            <Link to="/products/page/1" className="text-sm text-orange-500">
              Go Shop Now
            </Link>
          </div>
        )}
      </main>
    </>
  )
}

export default Cart
