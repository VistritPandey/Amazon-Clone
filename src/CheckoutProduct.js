/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct({id, image, title, price, rating }) {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button>remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
