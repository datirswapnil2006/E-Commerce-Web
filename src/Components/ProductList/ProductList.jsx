import React, { useContext } from 'react'
import { productsData } from '../../data'
import './ProductList.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../ShopContext/ShopContext'

const ProductList = () => {
  const { addToCart } = useContext(ShopContext)

  return (
    <div className="product_list">
      <h2>Our Products</h2>
      <div className="product_grid">
        {productsData.map((product) => (
          <div key={product.id} className="product_card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className="product-img" />
              <div className="product_info">
                <h4>{product.title}</h4>
                <p>${product.price}</p>
              </div>
            </Link>
            <button 
              className="add-to-cart" 
              onClick={(e) => {
                e.preventDefault()
                addToCart(product, product.id)
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
