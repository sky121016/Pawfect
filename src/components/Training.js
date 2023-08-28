import React from 'react'
import './training.css'
import trainerImg from '../assets/icons/trainerImg.png';
import star from '../assets/icons/star.png';

const Training = () => {


  return (
    <div id="training">
        <h1>1:1 훈련사 매칭</h1>
        <p>반려동물 다이어트 전문가와의 훈련으로 <br />
            보다 효과적인 다이어트 솔루션을 제공합니다. </p>

        <div className="trainer-container">
            <h2><span>훈련사</span> 배정</h2>
            <div className="filter">
                <ul>
                    <li><a href="#">별점</a>
                        <ul>
                            <li><input type="checkbox" />5</li>
                            <li><input type="checkbox" />4</li>
                            <li><input type="checkbox" />3</li>
                            <li><input type="checkbox" />2</li>
                            <li><input type="checkbox" />1</li>
                        </ul>
                    </li>

                    <li><a href="#">지역</a></li>

                    <li><select name="sorting" id="sorting">
                        <option value="popular">인기순</option>
                        <option value="popular">최신순</option>
                        <option value="popular">리뷰순</option>
                        </select>
                    </li>
                </ul>
            </div>


            <div className="trainer-list">
                <div className="trainer-card">
                    <div className="trainer-info">
                        <img src={trainerImg} alt="훈련사" />
                        <div className="trainer-title">

                            <h3 className='trainer-name'>홍길동</h3>
                            <div className="stars">
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                            </div>
                        </div>
                    </div>
                    <div className="tag">
                        <ul>
                            <li>#산책</li>
                            <li>#독스포츠</li>
                            <li>#어질리티</li>
                        </ul>
                    </div>
                </div>
                <div className="trainer-card">
                    <div className="trainer-info">
                        <img src={trainerImg} alt="훈련사" />
                        <div className="trainer-title">

                            <h3 className='trainer-name'>홍길동</h3>
                            <div className="stars">
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                            </div>
                        </div>
                    </div>
                    <div className="tag">
                        <ul>
                            <li>#산책</li>
                            <li>#독스포츠</li>
                            <li>#어질리티</li>
                        </ul>
                    </div>
                </div>
                <div className="trainer-card">
                    <div className="trainer-info">
                        <img src={trainerImg} alt="훈련사" />
                        <div className="trainer-title">

                            <h3 className='trainer-name'>홍길동</h3>
                            <div className="stars">
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                            </div>
                        </div>
                    </div>
                    <div className="tag">
                        <ul>
                            <li>#산책</li>
                            <li>#독스포츠</li>
                            <li>#어질리티</li>
                        </ul>
                    </div>
                </div>
                <div className="trainer-card">
                    <div className="trainer-info">
                        <img src={trainerImg} alt="훈련사" />
                        <div className="trainer-title">

                            <h3 className='trainer-name'>홍길동</h3>
                            <div className="stars">
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                                <img src={star} alt="별점" />
                            </div>
                        </div>
                    </div>
                    <div className="tag">
                        <ul>
                            <li>#산책</li>
                            <li>#독스포츠</li>
                            <li>#어질리티</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training