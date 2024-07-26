import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    
        <div className="features">
          <div className="feature">
            <img src="free-shipping-icon.png" alt="Free Shipping" />
            <h3>Free Shipping</h3>
            <p>Free for $50+ orders</p>
          </div>
          <div className="feature">
            <img src="easy-returns-icon.png" alt="Easy Returns" />
            <h3>Easy Returns</h3>
            <p>14 Days easy return</p>
          </div>
          <div className="feature">
            <img src="fast-support-icon.png" alt="Fast Support" />
            <h3>Fast Support</h3>
            <p>24/7 Customer support</p>
          </div>
          <div className="feature">
            <img src="member-discount-icon.png" alt="Member Discount" />
            <h3>Member Discount</h3>
            <p>Discount for elite members</p>
          </div>
        </div>
      
  )
}

export default Banner