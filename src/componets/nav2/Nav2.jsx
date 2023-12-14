
import './nav2.css'
import React from 'react'

export default function Nav2() {
  return (
    <div>
        <nav className="nav2Navbar">
            
                
                    <img className='nav2logo' src="https://azratec.com/cdn/shop/files/Azra_logo2_notagtest_1200x1200.png?v=1614405859" alt="" />
                
            
            <ul className="nav2Ul">
                <li className="nav2Li">
                <input placeholder='Search....' className='serchedNav2' type="search" />
                </li>
            </ul>
            <ul  className="nav2Ul">
                <li className="nav2Li nav2li-Login-Wishlist">Login</li>
                <li className="nav2Li nav2li-Login-Wishlist">Wishlist</li>
                <li className="nav2Li nav2li-Login-Wishlist">0 Items</li>
            
            </ul>
        </nav>
    </div>
  )
}
