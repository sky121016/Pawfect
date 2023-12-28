import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { useState } from 'react';

const ProductDetail = () => {
    const {title} = useParams();
    const {state} = useLocation();

    const [cartCount, setCartCount] = useState(1);

    

  return (
    <div className="page-container">
      <div className='product-detail-container'>
          <img className='product-detail-img' src={state.image} alt="productImg" />

          <div className="product-detail">

            
            {state.tag!="" && (<div className="product-tag">
                {state.tag.map((t, index)=>(
                    <span key={index}>{t.label}</span>
                ))}
                </div>)}
              <h2 className='detail-title'>{title}</h2>
              {state.salePrice ? (
                <div className="detail-price">
                    <p className="originPrice strikethrough">
                        {state.originPrice}
                    </p>
                    <p className='finalPrice'><span>{state.percentage} </span>{state.salePrice}</p>
                </div>
            ) : (
                <div className="detail-price">
                    <p className='finalPrice'>{state.originPrice}</p>
                </div>
            )}

            <div className="add-cart">
              <button className='cart-count-btn' onClick={()=>{cartCount > 1 && setCartCount(cartCount-1)}}>-</button>
              <div className="cart-count">{cartCount}</div>
              <button className='cart-count-btn'  onClick={()=>{setCartCount(cartCount+1)}}>+</button>
            </div>
            <button className='cart-btn'>장바구니 담기</button>
          </div>
      </div>
    </div>
  )
}

export default ProductDetail