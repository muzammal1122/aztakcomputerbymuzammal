
import Nav from '../nav/nav'
import Nav2 from '../nav2/Nav2'
import './topNav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Topnav() {
  return (
    <div>
        <nav className='topNavBar'>
            <ul className='TopNavBArUl'>
                <i class="fa iconTopNav fa-home" aria-hidden="true"></i>
                <li className="meriLi">
                 <Link className='topNavTextA' to="/">Home</Link>
                </li>
                <i class="fa iconTopNav fa-phone" aria-hidden="true"></i>
                <li className="meriLi">
                 <Link className='topNavTextA' to="#">Contect Us</Link>
                </li>
                <i class="fa-solid iconTopNav fa-square-poll-horizontal"></i>
                <li className="meriLi">
                 <Link className='topNavTextA' to="#">Sell On Aztek</Link>
                </li>
            </ul>
            <ul>
                <li id='meriLiCall' className="meriLi">
                  <Link className='topNavTextA'>Call:800-511-7525</Link>
                </li>
            </ul>
        </nav>
        <Nav2></Nav2>
        <Nav></Nav>
    </div>
  )
}
