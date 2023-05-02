import React from 'react'
import './Style.css'

const Header = ({cartCount}) => {
  return (
    <>
    <div className='header'>
    
      <h1>MaxShoes</h1>
      <div className='headercart'>
      <i className="fa-solid fa-cart-shopping"></i>
      <p>{cartCount}</p>
      </div>
      </div>
    </>
  )
}

export default Header