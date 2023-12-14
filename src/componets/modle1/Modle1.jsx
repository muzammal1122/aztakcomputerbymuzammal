
import './modle.css'
import React from 'react'
import { Link } from 'react-router-dom'
import HotProduct from '../HotProduct/HotProduct'

export default function Modle1() {
  return (
    <div>
        <div className="mainmodle1pics">
            <div className="modle1pics">
                <Link>
                <img src="12.jpg" alt="" />
                </Link>
            </div>
            <div className="modle1pics">
            <Link>
                <img src="13.jpg" alt="" />
                </Link>
            </div>
            <div className="modle1pics">
            <Link>
                <img src="14.jpg" alt="" />
                </Link>
            </div>
            <div className="modle1pics">
            <Link>
                <img src="15.jpg" alt="" />
                </Link>
            </div>
            <div className="modle1pics">
            <Link>
                <img src="16.jpg" alt="" />
                </Link>
            </div>
            <div className="modle1pics">
            <Link>
                <img src="17.jpg" alt="" />
                </Link>
            </div>
            <div className="modle1pics">
            <Link>
                <img src="18.jpg" alt="" />
                </Link>
            </div>
            <div className="modle1pics">
            <Link>
                <img src="19.jpg" alt="" />
                </Link>
            </div>
            <div className="modle1pics">
            <Link>
                <img src="20.jpg" alt="" />
                </Link>
            </div>
            <div className="modle1pics">
            <Link>
                <img src="21.jpg" alt="" />
                </Link>
            </div>
            <div className="modle1pics">
            <Link>
                <img src="22.jpg" alt="" />
                </Link>
            </div>
            <div className="modle1pics">
            <Link>
                <img src="23.jpg" alt="" />
                </Link>
            </div>
        </div>
        <br />
        <br />
        <br />
        <div className='hot-product-main-div'>

        <h3 className='hot-product'>Hot Products</h3>

        </div>
        <hr />
        <HotProduct></HotProduct>
    </div>
  )
}
