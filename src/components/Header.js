import React from 'react';
import './header.css';

const Header = () => {
  return (
    <>
        <header id="header">
            <div className="logo">
                <h1>Pawfect Body</h1>
            </div>
            <nav className='nav'>
                <ul className='navList'>
                    <li><a href="#">홈</a></li>
                    <li><a href="#">식단</a></li>
                    <li><a href="#">훈련</a></li>
                    <li><a href="#">커뮤니티</a></li>
                    <li><a href="#">마이</a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header