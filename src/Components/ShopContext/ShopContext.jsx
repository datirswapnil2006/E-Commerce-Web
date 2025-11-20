import React, { createContext, useState } from 'react'

// Create the context
export const ShopContext = createContext(null)

// Provider component
const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, id) => {
    const newProduct = { ...product, id: parseInt(id) }
    setCartItems((prev) => {
      // Check if product already exists in cart
      const existingItem = prev.find((item) => item.id === parseInt(id))
      if (existingItem) {
        // If exists, increase quantity
        return prev.map((item) =>
          item.id === parseInt(id)
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      } else {
        // If new, add with quantity 1
        return [...prev, { ...newProduct, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateCartItemCount = (newAmount, id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: newAmount }
          : item
      ).filter((item) => item.quantity > 0)
    )
  }

  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0)
  }

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartItems,
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
