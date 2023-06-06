import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCoffee, faSearch, faUser} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  // navbar 항목 리스트
  const menuList = [
                    '여성',
                    'Divided',
                    '남성',
                    '신생아',
                    '이동',
                    'H&M Home',
                    'Sale',
                    '지속가능성'
                  ];

  return (
    <div>
      <div className='login-button'>
        <FontAwesomeIcon icon={faUser}/>
        <div>로그인</div>
      </div>
      <div className='nav-section'>
        <img
           src={`${process.env.PUBLIC_URL}/image/hnm_logo.jpg`}
           className='hnm-logo'
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
