import React from 'react';
import './home.css';
import Header from './Header';
import Services from './Home/Services';
import Record from './Home/Record';
import Shop from './Home/Shop';
import Training from './Home/Training';
import Community from './Home/Community';




const Home = () => {


  return <>
    <div id="home">
        <main id='main'>
            <div className='gradient'></div>
            <div className='home-title'>

                <h1 className="slogan">체중까지<br />완벽한<br />반려동물을 위해</h1>
                <div className='description'>맞춤형 다이어트 솔루션 제공 서비스</div>
                <h2 className="logo">Pawfect Body</h2>
                <a href='#home' className='startBtn'>다운로드</a>
            </div>

        </main>
        <Services/>
        <Record/>
        <Shop/>
        <Training/>
        <Community/>

        
    </div>
  </>;
}

export default Home