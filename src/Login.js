import React from 'react'
import './Login.css'
import {Link} from "react-router-dom"

function Login() {
    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text'/>

                    <h5>Password</h5>
                    <input type='password'/>

                    <button className="login__signInButton">Sign In</button>
                    <p>By continuing, you agree to our Amazon Clone's Conditions of Use and Privacy Notice</p>
                    <button className="login__registerButton">Create your Amazon Clone Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login 
