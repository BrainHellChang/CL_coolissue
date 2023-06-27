import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCoffee, faSearch, faUser} from "@fortawesome/free-solid-svg-icons"
import {useLocation, useNavigate} from "react-router-dom"

const Header = () => {
  const locationNow = useLocation();  
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  }
  // navbar 항목 리스트
  const menuList = [
    'menu1',
    'menu2',
    'menu3',
    'menu4',
    'menu5',
    'menu5',
    'menu6'
  ];
  if (locationNow.pathname === "/login"
    ||locationNow.pathname === "/join") {
      return null;
  }
  return (
    <div>
      <div className='header-ad-link-1'>
        <div>광고 자리입니다.</div>
      </div>
      <div className='to-login' onClick={toLogin}>
        <FontAwesomeIcon icon={faUser}/>
        <div>로그인</div>
      </div>
      <div className='nav-section'>
        <img
           src={`${process.env.PUBLIC_URL}/image/CL_logo.jpg`}
           className='CL-logo'
        />
      </div>
      <div className='menu-area'>
          <ul className='menu-list'>
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
        <div>
          <div class="search">
              <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
              <button type="submit" class="searchButton">
                <FontAwesomeIcon icon={faSearch}/>
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
