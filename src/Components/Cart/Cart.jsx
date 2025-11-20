import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import CartDetails from './CartDetails'
import './Cart.css'

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)

  return (
    <div className="cart_container">
      <div className="cart_left">
        <h1>Your Cart Items</h1>
        {cartItems.length === 0 ? (
          <div>
            <h2>Your Cart is Empty</h2>
            <p>Add some items to your cart to see them here.</p>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartDetails key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
      <div className="cart_right">
        <h2>Cart Summary</h2>
        <div className="summary_item">
          <span>Subtotal</span>
          <span>${getTotalCartAmount().toFixed(2)}</span>
        </div>
        <div className="summary_item">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="summary_item total_cost">
          <span>Total</span>
          <span>${getTotalCartAmount().toFixed(2)}</span>
        </div>
        <button className="checkout_btn">Checkout</button>
      </div>
    </div>
  )
}

export default Cart
