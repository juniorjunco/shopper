import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
          <p>Classic yet stylish, this men's T-shirt combines comfort and fashion effortlessly.
             Crafted from soft, breathable fabric, it features a versatile design that seamlessly
              transitions from casual to smart-casual occasions.The perfect wardrobe essential for
              a laid-back yet polished look.</p>
          <p>
             Classic yet stylish, this men's T-shirt combines comfort and fashion effortlessly.
             Crafted from soft
          </p>
        </div>
    </div>
  )
}

export default DescriptionBox