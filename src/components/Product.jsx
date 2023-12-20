import React from "react";
import cart from "../assets/icons/cart.svg"
import chartArrow from "../assets/icons/chart-arrow.svg"

const Product = (props) => {
    const {id, title, originPrice, salePrice, percentage, image, tag} = props.product;
    return (
        <div className="product-item" key={id}>
            <div className="product-img">
                <img src={image} alt="이미지" />
                <div className="cart">
                    <img src={cart} alt="장바구니" />
                </div>
            </div>

            {tag!="" && (<div className="product-tag">
                {tag.map((t, index)=>(
                    <span key={index}>{t.label}</span>
                ))}
            </div>)}

            <p className="product-title">{title}</p>
            {salePrice ? (
                <div className="price">
                    <p className="originPrice strikethrough">
                        {originPrice}
                    </p>
                    <p><span>{percentage} </span>{salePrice}</p>
                </div>
            ) : (
                <div className="price">
                    <p>{originPrice}</p>
                </div>
            )}
        </div>
    );
};

export default Product;
