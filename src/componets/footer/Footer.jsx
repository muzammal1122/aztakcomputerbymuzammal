

import './Footer.css'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className='footer-main'>
                <br />
                <br />


                <div className="main-div-footer">

                    <div className="search-footer">
                        <input placeholder='Newsletter' className='footer-input' type="text" />
                    </div>

                    <div className="icons-footer">
                        <div className="footer-icons-div">


                            <i class="fa-brands footerIcon fa-facebook-f"></i>
                        </div>
                        <div className="footer-icons-div">
                            <i class="fa-brands footerIcon fa-twitter"></i>
                        </div>
                        <div className="footer-icons-div">

                            <i class="fa-brands footerIcon fa-linkedin"></i>
                        </div>
                        <div className="footer-icons-div">
                            <i class="fa-solid footerIcon fa-wifi"></i>

                        </div>
                        <div className="footer-icons-div">
                            <i class="fa-solid footerIcon fa-tag"></i>

                        </div>

                    </div>
                    {/* <div className="Logo-footer">
                        <img src="foter.PNG" alt="" />
                    </div> */}
                </div>
                <br />
                <br />
                <br />
                <hr className='hr-wali-line'/>
                <br />
                <br />
                <div className="main-6-div-footer-text">
                    <div className="footer-text-1">
                        <h3 className='footer-text-1-heding1'>Other Sites</h3>
                        <a className='footer-a' href="https://www.techbuys.com/">techbuy</a>
                        <br />
                        <a className='footer-a' href="https://www.brokerden.com/">brokerden</a>
                        <br />
                        <a className='footer-a' href="https://www.ezreturnit.com/">ezreturnit</a>
                        <br />
                        <a className='footer-a' href="https://www.aztekservices.com/">aztek services</a>
                        <br />
                        <a  className='footer-a'href="https://www.aztekpc.com/">aztek pc</a>

                    </div>
                    <div className="footer-text-2">
                        <h3 className='footer-text-1-heding1'>Questions?</h3>
                        <a className='footer-a' href="https://www.forbes.com/advisor/business/why-your-website-needs-terms-of-use-agreement/">term and use</a>
                        <br />
                        <a className='footer-a' href="https://www.termsfeed.com/blog/privacy-policies-vs-terms-conditions/#:~:text=A%20Privacy%20Policy%20is%20legally,interact%20with%20their%20personal%20information.">Privicy and Policy</a>
                        <br />
                        <a className='footer-a' href="#">Return Policy</a>
                        <br />
                        <a className='footer-a' href="#">Correspondance</a>
                        <br />
                        <a className='footer-a' href="#">Our Customers</a>

                    </div>
                    <div className="footer-text-3">
                        <h3 className='footer-text-1-heding1'>Shipping</h3>
                        <a className='footer-a' href="#">Shipping Policy</a>
                        <br />
                        <a className='footer-a' href="#">Track Your Order</a>
                        <br />
                        

                    </div>
                    <div className="footer-text-4">
                        <h3 className='footer-text-1-heding1'>About Us</h3>
                        <a className='footer-a' href="#">About Us</a>
                        <br />
                        <a className='footer-a' href="#">Contact Us</a>
                        <br />
                        

                    </div>
                    <div className="footer-text-5">
                        <h3 className='footer-text-1-heding1'>Products</h3>
                        <a className='footer-a' href="#">Categories</a>
                        <br />
                        <a className='footer-a' href="#">Manufactures</a>
                        <br />
                        <a className='footer-a' href="#">Current Deals</a>
                        <br />
                        <a className='footer-a' href="#">Site Map</a>
                        <br />
                    </div>
                    <div className="footer-text-6">
                        <h3 className='footer-text-1-heding1'>Market Places</h3>
                        <a className='footer-a' href="#">GSA Advantage</a>
                        <br />
                        <a className='footer-a' href="#">Arceto</a>
                        <br />
                        <a className='footer-a' href="#">Sears</a>
                        <br />
                        <a className='footer-a' href="#">EBay</a>
                        <br />
                        <a className='footer-a' href="#">Newegg</a>
                        <br />
                        <a className='footer-a' href="https://moz.com/">Moz</a>
                        <br />
                    </div>
                </div>
                <div className="copyRight-footer">
                    <br />
                    <br />
                    <span className='copy-right-text'>Copyright © Aztek Computers, LLC. All Rights Reserved.</span>
                </div>
               
            </footer>
        </div>
    )
}
