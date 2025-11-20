import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { ShopContext } from '../ShopContext/ShopContext'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="link">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Shop
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav_icon_wrapper">
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="nav_cart">
            <FaShoppingCart className="nav_icon" />
            {getTotalCartItems() > 0 && (
              <div className="nav_cart_amout">{getTotalCartItems()}</div>
            )}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
