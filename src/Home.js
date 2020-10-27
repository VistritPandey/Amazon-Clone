import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" alt="" />
                
                <div className="home__row">
                    <Product 
                        title ="OnePlus 8"
                        price={42999}
                        image="https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SL1500_.jpg"
                        rating={5} 
                    />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home 
