
import { useSelector } from 'react-redux'
import './NewArivals.css'

import React from 'react'
import TopBrand from '../TopBands/TopBrand';

export default function NewArivals() {

    let meraNewAriValsData = useSelector(function (store) {
        return store.newAriVaLas;
    })

    return (<div>
        <br />
        <div className="NewAriVal-heading-text">
            <h1><span className="new">New</span> Arrivals</h1>
        </div>
         <div className="mainNewAriValsDiv">
            {
                meraNewAriValsData.map(function (arivals) {
                    return <div>
                        <div className="NewAriValsdiv-1">
                            <img src={arivals.pic} alt="" />
                            <div className="newArivalsTitle">
                                <p className='arrivals-title'>{arivals.title}</p>
                                <p className='arivals-price'>${arivals.price}</p>
                                <p className="dec-newArivals">MFG. Part: TG0010SKU: A0FAEZOAOS</p>

                                <i class="fa-sharp newAriVals-icons fa-solid fa-star"></i>
                                <i class="fa-sharp newAriVals-icons fa-solid fa-star"></i>
                                <i class="fa-sharp newAriVals-icons fa-solid fa-star"></i>
                                <i class="fa-sharp newAriVals-icons fa-solid fa-star"></i>
                                <i class="fa-sharp newAriVals-icons fa-solid fa-star"></i>


                                <div className="newArivals-btn-main">
                                    <div className="newArivals-btn">

                                        <i class="fa-solid arivals-icon-btn fa-cart-shopping"></i>
                                    </div>
                                    <div className="newArivals-btn">
                                        <i class="fa-solid arivals-icon-btn fa-heart"></i>

                                    </div>
                                    <div className="newArivals-btn">
                                        <i class="fa arivals-icon-btn fa-eye" aria-hidden="true"></i>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        <TopBrand></TopBrand>
    </div>
    )
}
