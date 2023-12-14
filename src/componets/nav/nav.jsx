
import './nav.css'

import React, { useState } from 'react'

export default function Nav() {

  let [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <nav className='navWala'>
        <ul className='myUL'>
          <li id='MyLi' className={openMenu ? "open" : ""}>
            <a href="#">Computers

              {/* <ul className="My-Under-Wala-ul">
                <li className="my-Li-Under-Wali">
                  <a href="#">
                    <div className="computersDiv">
                      <img className='computer1img' src="1.jpg" alt="" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                    </div>
                  </a>
                </li>
                <li className="my-Li-Under-Wali">
                  <a href="#">
                    <div className="computersDiv">
                      <img className='computer1img' src="2.jpg" alt="" />

                    </div>
                  </a>
                </li>
                <li className="my-Li-Under-Wali">
                  <a href="#">
                    <div className="computersDiv">
                      <img className='computer1img' src="3.jpg" alt="" />

                    </div>
                  </a>
                </li>
                <li className="my-Li-Under-Wali">
                  <a href="#">
                    <div className="computersDiv">
                      <img className='computer1img' src="4.jpg" alt="" />

                    </div>
                  </a>
                </li>
                <li className="my-Li-Under-Wali">
                  <a href="#">
                    <div className="computersDiv">
                      <img className='computer1img' src="5.jpg" alt="" />

                    </div>
                  </a>
                </li>
              </ul> */}

            </a>
          </li>
          <li id='MyLi' className={openMenu ? "open" : ""}>
            <a href="#">Electronics


              {/* <ul className="My-Under-Wala-ul">
                <li className="my-Li-Under-Wali">
                  <a href="#">
                    <div className="computersDiv">
                      <img className='computer1img' src="6.jpg" alt="" />

                    </div>
                  </a>
                </li>
                <li className="my-Li-Under-Wali">
                  <a href="#">
                    <div className="computersDiv">
                      <img className='computer1img' src="7.jpg" alt="" />

                    </div>
                  </a>
                </li>
                <li className="my-Li-Under-Wali">
                  <a href="#">
                    <div className="computersDiv">
                      <img className='computer1img' src="8.jpg" alt="" />

                    </div>
                  </a>
                </li>
                <li className="my-Li-Under-Wali">
                  <a href="#">
                    <div className="computersDiv">
                      <img className='computer1img' src="9.jpg" alt="" />

                    </div>
                  </a>
                </li>
                <li className="my-Li-Under-Wali">
                  <a href="#">
                    <div className="computersDiv">
                      <img className='computer1img' src="10.jpg" alt="" />

                    </div>
                  </a>
                </li>
              </ul>  */}

            </a>
          </li>
          <li id='MyLi' className={openMenu ? "open" : ""}>
            <a href="#">Office Supplies</a>
          </li>
          <li id='MyLi' className={openMenu ? "open" : ""}>
            <a href="#">Cameras</a>
          </li>
          <li id='MyLi' className={openMenu ? "open" : ""}>
            <a href="#">Cell Phones</a>
          </li>
          <li id='MyLi' className={openMenu ? "open" : ""}>
            <a href="#">Video Games</a>
          </li>
          <li id='MyLi' className={openMenu ? "open" : ""}>
            <a href="#">Music</a>
          </li>
          <li id='MyLi' className={openMenu ? "open" : ""}>
            <a href="#">Sporting Goods</a>
          </li>
          <li id='MyLi' className={openMenu ? "open" : ""}>
            <a href="#">More Categories</a>
          </li>

        </ul>
      </nav>
      <img className='logo' src="https://png.pngtree.com/png-vector/20221128/ourmid/pngtree-modern-m-logo-design-png-image_6483910.png" alt="" />
      <i onClick={function () {
        setOpenMenu(!openMenu)
      }} class="menuBar fa-solid fa-bars"></i>
    </div>
  )
}
