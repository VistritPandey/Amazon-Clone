import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>OnrPlus 8t</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>10.00</strong>
                </p>
                <div className="product__rating">
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
            </div>
            <img src="https://images-eu.ssl-images-amazon.com/images/I/41ppKgnVLdL._AC_US160_FMwebp_QL70_.jpg" alt="" />
            <button>Add to cart</button>
        </div>
    )
}


export default Product
