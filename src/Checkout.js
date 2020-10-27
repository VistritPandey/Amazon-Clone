import React from 'react'
import "./Checkout.css"

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase2/v1/Phase2_Rec_PC_Hero_1x._CB417639218_.jpg" alt=""/>
                <div>
                    <h2 className="checkout__title"> Your Shopping Cart</h2>
                        {/*Basket Item*/}
                </div>
            </div>
            <div className="checkout__right">
                <h2>Your subtotal</h2>
            </div>
        </div>
    )
}

export default Checkout
