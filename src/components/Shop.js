import React from 'react'
import './shop.css'
import Image1 from "../assets/image1.png"
import Image2 from "../assets/image2.png"
import cart from "../assets/icons/cart.svg"
import chartArrow from "../assets/icons/chart-arrow.svg"

const Shop = () => {
    const Data = [
        {
            id:1,
            title:"씽크라이크펫 노견 보양식 영양식 생식",
            originPrice:"26,300원",
            salePrice:"",
            image:Image1
        },
        {
            id:2,
            title:"도그랑 개사료 진도골드 10kg(1+1)",
            originPrice:"26,300원",
            salePrice:"13,300원",
            image:Image2
        },
    ];

  return (
    <>
        <div id="shop">
            <h1>맞춤형 식단 추천</h1>
            <p>섭취량과 소모량을 분석해 적절한 식단을 추천해드립니다. </p>

            <div className="nutrient">
                <h2>단백질 섭취를 <span>23%</span> 늘려야해요</h2>
                <div className="nutrient-chart">
                    <div className="chart1">
                        <div className="slice slice1"><p>지방</p></div>
                        <div className="slice slice2"><p>단백질</p></div>
                        <div className="slice slice3"><p>탄수화물</p></div>
                    </div>

                    {/* arrow */}
                    <img src={chartArrow} alt="차트" />

                    <div className="chart2">
                        <div className="slice slice1"><p>지방</p></div>
                        <div className="slice slice2"><p>단백질</p></div>
                        <div className="slice slice3"><p>탄수화물</p></div>
                    </div>
                </div>
            </div>


            <div className="product">
                <h2><span>여름이 </span>맞춤형 추천 상품</h2>
                <div className="product-list">
                    {Data.map((product) => {
                        return (
                            <div className="product-item" key={product.id}>
                                <div className="product-img">
                                    <img src={product.image} alt="이미지" />
                                    <div className="cart"><img src={cart} alt="장바구니" /></div>
                                </div>

                                <p className='product-title'>{product.title}</p>
                                {product.salePrice ? (
                                    <div className="price">
                                        <p className='originPrice strikethrough'>{product.originPrice}</p>
                                        <p>{product.salePrice}</p>
                                    </div>
                                ) : (
                                    <div className="price">
                                        <p>{product.originPrice}</p>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Shop