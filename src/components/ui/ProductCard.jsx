import React from 'react'

const ProductCard = (props) => {
  const { thumbnail, price, title } = props
  return (
    <div className="w-[150px] h-[200px] shadow p-5 cursor-pointer hover:border-orange-500 hover:border-2">
      <img src={thumbnail} className="h-[130px] object-cover py-3" />
      <p className="text-sm truncate">{title}</p>
      <p className="text-sm">
        $ <span className="text-orange-500 font-bold">{price}</span>
      </p>
    </div>
  )
}

export default ProductCard
