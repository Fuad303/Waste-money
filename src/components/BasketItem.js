import React from 'react'

export default function BasketItem({ item, product }) {
  return (
    <div>
      <div>{product.title} * {item.amount}</div>
    </div>
  )
}
