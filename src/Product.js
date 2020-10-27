import React from 'react'
import "./Product.css"

function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>OnePlus 8t</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>10.00</strong>
                </p>
                <div className="product__rating">
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
            </div>
            <img src="https://images-eu.ssl-images-amazon.com/images/I/41ppKgnVLdL._AC_US160_FMwebp_QL70_.jpg" alt="" />
            <button className="product__button">Add to cart</button>
        </div>
    )
}


export default Product
