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
                        id="000011"
                        title ="OnePlus 8 Pro"
                        price={54999}
                        image="https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SL1500_.jpg"
                        rating={5} 
                    />
                    <Product 
                        id="000012"
                        title ="OnePlus 8"
                        price={42999}
                        image="https://image01.oneplus.net/ebp/202004/04/1-m00-12-94-rb8bwl6iolaarwkaaaiqcqinzlu156_840_840.png"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="000013"
                        title ="OnePlus 7t"
                        price={37999}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpyWdZovEtp1-0rh37nQMMvvIrbbgi154PdeAtj-DO0jzSSBGJMnajhR8WLvEigDIfwOrUORpE&usqp=CAc"
                        rating={4}
                    />
                    <Product 
                        id="000014"
                        title ="OnePlus Nord"
                        price={24999}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ696GgyEzPRK1OhKhd-WCqe1Vh8LhP84ZVoL12FkIAhzY80vqnrR24KMrTcQ_pVWwDy7zffio&usqp=CAc"
                        rating={4}
                    />
                    <Product 
                        id="000015"
                        title ="Redmo Note 9 Pro"
                        price={13999}
                        image="data:image/jpeg;base64,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"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="000016"
                        title ="Samsung Galaxy S20 Plus"
                        price={49999}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJD8mTy4uCYLand4YcqDHLSs8giiNGZHf3UpgdUqotOcS43KiZ-8IYWaTjCxY-1rx6MCdjbrgb&usqp=CAc"
                        rating={5}
                    />
                    <Product 
                        id="000017"
                        title ="Apple iPhone 11"
                        price={49999}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuXdwIkMW0UfKcbVSfgYWnXdlvE7jz2ZPE__4EYt3BYjR2nUK0ftjKX1lO_nlxMQisCDZqKRP6&usqp=CAc"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home 
