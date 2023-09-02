import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div id="footer">
        <div className="policy">
            <ul>
                <li><a href="#footer">Agreement</a></li>
                <li><a href="#footer">Privacy</a></li>
                <li><a href="#footer">입점 제안 문의</a></li>
                <li><a href="#footer">마케팅 제휴 문의</a></li>
                <li><a href="#footer">이용약관</a></li>
                <li><a href="#footer"><b>개인정보처리방침</b></a></li>
            </ul>
        </div>
        <div className="app-name">
            <p>포펙트 바디 Pawfect Body - 반려동물 다이어트 서비스</p>
        </div>
        <div className="copyright">
            <p>
                Copyright ⓒ 2023 포펙트 바디 Pawfect Body - 반려동물 다이어트 서비스 All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer