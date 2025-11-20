import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { FaTrash } from 'react-icons/fa'

const CartDetails = ({ data }) => {
  const { removeFromCart, updateCartItemCount } = useContext(ShopContext)

  return (
    <div className="cart_item">
      <div className="product_details">
        <img src={data.image} alt={data.title} />
        <div className="product_info">
          <h3>{data.title}</h3>
          <p>${data.price}</p>
          <button onClick={() => removeFromCart(data.id)}>
            <FaTrash /> Remove
          </button>
        </div>
      </div>
      <div className="quantity">
        <button onClick={() => updateCartItemCount(data.quantity - 1, data.id)}>
          -
        </button>
        <span>{data.quantity}</span>
        <button onClick={() => updateCartItemCount(data.quantity + 1, data.id)}>
          +
        </button>
      </div>
      <div className="total">
        ${(data.price * data.quantity).toFixed(2)}
      </div>
    </div>
  )
}

export default CartDetails
