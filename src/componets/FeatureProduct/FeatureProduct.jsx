
import { useSelector } from 'react-redux'
import './FeatureProduct.css'

import React from 'react'
import NewArivals from '../newArivals/NewArivals';

export default function FeatureProduct() {

    let FeatureProductData = useSelector(function (store) {
        return store.featureproduc;
    })

    return (
        <div>

            <div className="featureproducttext">
                <h3 className='h3FeatueProduct'>Feature <span className='product'>Product</span></h3>
            </div>
            <hr />

            <div className='FeatureProduct-main-card-div'>

                {
                    FeatureProductData.map(function (feature) {
                        return <div className='FeatureProduct-card-div-under-wala'>

                            <div className="FeatureProduct-img">
                                <img src={feature.pic} alt="" />
                                <div className="FeatureProduct-text">
                                    <p className='title'>{feature.title}</p>
                                    <p className='price'> ${feature.price}</p>
                                    <div className="main-dec-din-hot-product">

                                        <span className='dec-fetureproduct'>MFG. Part: FDCAFOCUSWTW
                                            SKU: A01RW1Y76M</span>
                                    </div>
                                    <br />
                                    <br />
                                    {/* <i class="fa hotproductundrewaliicon fa-star" aria-hidden="true"></i> */}
                                    <i class="fa-sharp featurdproduct-icons fa-solid fa-star"></i>
                                    <i class="fa-sharp featurdproduct-icons fa-solid fa-star"></i>
                                    <i class="fa-sharp featurdproduct-icons fa-solid fa-star"></i>
                                    <i class="fa-sharp featurdproduct-icons fa-solid fa-star"></i>
                                    <i class="fa-sharp featurdproduct-icons fa-solid fa-star"></i>

                                    <br />
                                    <br />

                                    <div className="featurdproduct-btn-main">
                                        <div className="featurdproduct-btn">

                                            <i class="fa-solid featur-icon-btn fa-cart-shopping"></i>
                                        </div>
                                        <div className="featurdproduct-btn">
                                            <i class="fa-solid featur-icon-btn fa-heart"></i>

                                        </div>
                                        <div className="featurdproduct-btn">
                                            <i class="fa featur-icon-btn fa-eye" aria-hidden="true"></i>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    })
                }
            </div>

            <NewArivals></NewArivals>
        </div>

    )
}
