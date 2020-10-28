import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase2/v1/Phase2_Rec_PC_Hero_1x._CB417639218_.jpg" alt=""/>
                <div>
                    <h2 className="checkout__title"> Your Shopping Cart</h2>
                        {basket.map(item =>(
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
