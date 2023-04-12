import React, { useState, useEffect } from 'react'
import { TfiShiftLeftAlt, TfiShiftRightAlt, TfiTrash } from 'react-icons/tfi'
import { ProductContextCustom } from '../../components/context/ProductContext'
import { useNavigate } from 'react-router-dom'

const CartItem = (props) => {
  const { id, title, thumbnail, price } = props
  const { increasePrice, decreasePrice } = props
  const [count, setCount] = useState(1)
  const [itemPrice, setItemPrice] = useState()
  const { dispatch } = ProductContextCustom()
  const navigate = useNavigate()

  useEffect(() => {
    setItemPrice(price * count)
  }, [count])

  const increaseCount = () => {
    setCount(count + 1)
    increasePrice(price)
  }

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1)
      decreasePrice(price)
    }
  }

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
    decreasePrice(itemPrice)
  }

  const gotoDetailPage = () => {
    navigate(`/product/detail/${id}`)
  }

  return (
    <div className="flex justify-between p-3 items-center">
      <div className="flex gap-2 items-center">
        <TfiTrash
          className="hover:text-orange-500 active:scale-75"
          onClick={removeFromCart}
        />
        <img
          src={thumbnail}
          alt="product-img"
          className="w-[70px] h-[70px] object-cover p-1 border-2 border-orange-500"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold cursor-pointer" onClick={gotoDetailPage}>
            {title}
          </h1>
          <div className="flex items-center gap-2">
            <TfiShiftLeftAlt
              className={`${
                count > 1 ? 'text-orange-500' : 'text-gray-200'
              } active:scale-75  ${
                count > 1 ? 'cursor-pointer' : 'cursor-not-allowed'
              }`}
              onClick={decreaseCount}
            />
            <span>{count}</span>
            <TfiShiftRightAlt
              className="text-orange-500 active:scale-75 cursor-pointer"
              onClick={increaseCount}
            />
          </div>
        </div>
      </div>
      <p>
        $&nbsp;<span className="font-bold text-orange-500">{itemPrice}</span>
      </p>
    </div>
  )
}

export default CartItem
