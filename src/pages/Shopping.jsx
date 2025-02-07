import React from 'react'
import {products} from '../components/ProductDummy.js';

import Product from '../components/Product.jsx';


const Shopping = () => {
  // const Data = [
  //   {
  //       id:1,
  //       title:"씽크라이크펫 노견 보양식 영양식 생식",
  //       originPrice:"26,300원",
  //       salePrice:"",
  //       image:Image1
  //   },
  //   {
  //       id:2,
  //       title:"도그랑 개사료 진도골드 10kg(1+1)",
  //       originPrice:"26,300원",
  //       salePrice:"13,300원",
  //       image:Image2
  //   },
// ];
  // const Product = styled.div`
  // background-color: #eee;
  // width: 160px;
  // height: 200px;
  // `
  return (
    <div className="page-container">
      <nav className="shop-header">
          <span className='shop-header-item category'>카테고리</span>
        <ul>
          <li className='shop-header-item active'>추천</li>
          <li className='shop-header-item'>신상품</li>
          <li className='shop-header-item'>베스트</li>
          <li className='shop-header-item'>특가</li>
        </ul>
      </nav>

      <div className="best-item-container">

      </div>

      <div className="product-container">
          {products.map((product)=>{
            return(
              <Product key={product.id} product={product}></Product>
            )

          })}
      </div>


    </div>
  )
}

export default Shopping