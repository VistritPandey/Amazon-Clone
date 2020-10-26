import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Start</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>10.00</strong>
                </p>
                <div className="product__rating">
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
            </div>
        </div>
    )
}


export default Product
