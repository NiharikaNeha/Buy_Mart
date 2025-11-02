import React, { useEffect } from 'react'
import { useState } from 'react'

const Cart = () => {
  const [cart, setCart] = useState([])
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const fixedCart = storedCart.map(item => ({
      ...item,
      Price: parseFloat(item.Price),
      quantity: item.quantity || 1,
    }))
    setCart(fixedCart)
  }, [])

  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map(item => {
      if(item.Id === id) {
        const newQty = Math.max(1, item.quantity + delta)
        return {...item, quantity: newQty}
      }
      return item
    })
    setCart(updatedCart)
    localStorage.setItem('cartItems',JSON.stringify(updatedCart))
  }
  return (
    <div>Cart</div>
  )
}

export default Cart