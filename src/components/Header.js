import React from 'react';
import './header.css';

const Header = () => {
  return (
    <>
        <header id="header">
            <div id="header-container">
                <div className="logo">
                    <a href="#home"><h1>Pawfect Body</h1></a>
                </div>
                <nav className='nav'>
                    <ul className='navList'>
                        <li><a href="#home">홈</a></li>
                        <li><a href="#record">식단</a></li>
                        <li><a href="#">훈련</a></li>
                        <li><a href="#">커뮤니티</a></li>
                        <li><a href="#">마이</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header