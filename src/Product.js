import React from 'react'
import "./Product.css"

function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) =>(
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src="https://images-eu.ssl-images-amazon.com/images/I/41ppKgnVLdL._AC_US160_FMwebp_QL70_.jpg" alt="" />
            <button className="product__button">Add to cart</button>
        </div>
    )
}


export default Product
