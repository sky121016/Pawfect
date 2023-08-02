import React from 'react';
import './home.css';

const Home = () => {
  return <>
    <div id="home">
        <main id='main'>
            <div className='gradient'></div>
            <div className='title'>

                <h1 className="slogan">체중까지<br />완벽한<br />반려동물을 위해</h1>
                <div className='description'>맞춤형 다이어트 솔루션 제공 서비스</div>
                <h2 className="logo">Pawfect Body</h2>
                <button className='startBtn'>시작하기</button>

            </div>

        </main>
    </div>
  </>;
}

export default Home