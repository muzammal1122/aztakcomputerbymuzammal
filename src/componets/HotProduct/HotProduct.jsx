

import { useSelector } from 'react-redux'
import './HotProduct.css'


import React from 'react'
import FeatureProduct from '../FeatureProduct/FeatureProduct'

export default function HotProduct() {

    let meryWalaHotProduct = useSelector(function (store) {

        return store.HotTProduct

    })

    return (
        <div className='hotproductMaindiv'>



            {
                meryWalaHotProduct.map(function (hot) {
                    return <div>

                        <div className="hotproductundrewalidiv">
                            <img src={hot.pic} alt="" />
                            <div className="hotproductundrewaliTitle">
                                <span>{hot.title}</span>
                                <br />
                                <br />
                                <span className='hotproductundrewaliPrice'>${hot.price}</span>
                                <br />

                                <i class="fa hotproductundrewaliicon fa-star" aria-hidden="true"></i>
                                <i class="fa hotproductundrewaliicon fa-star" aria-hidden="true"></i>
                                <i class="fa hotproductundrewaliicon fa-star" aria-hidden="true"></i>
                                <i class="fa hotproductundrewaliicon fa-star" aria-hidden="true"></i>
                                <i class="fa hotproductundrewaliicon fa-star" aria-hidden="true"></i>

                                <div className="hotproductundrewalyBtn">
                                    <div className="hotproductundrewalyBtn1">

                                        <i class="fa-solid fontBtn fa-cart-shopping"></i>
                                    </div>
                                    <div className="hotproductundrewalyBtn1">
                                        <i class="fa-solid fontBtn fa-heart"></i>

                                    </div>
                                    <div className="hotproductundrewalyBtn1">
                                        <i class="fa fontBtn fa-eye" aria-hidden="true"></i>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                })
            }





            <FeatureProduct></FeatureProduct>

        </div>
    )
}
