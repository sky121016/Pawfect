import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <>
        <header id="header">
            <div id="header-container">
                <div className="logo">
                    <Link to={'/'}><h1>Pawfect Body</h1></Link>
                </div>
                <nav className='nav'>
                    <ul className='navList'>
                        <li><Link className='header-nav-item' to='/'>홈</Link></li>
                        <li><Link className='header-nav-item' to='/shopping'>식단</Link></li>
                        <li><Link className='header-nav-item' to='/trainer'>훈련</Link></li>
                        <li><Link className='header-nav-item' to='/communitypage'>커뮤니티</Link></li>
                        <li><Link className='header-nav-item' to='/mypage'>마이</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header