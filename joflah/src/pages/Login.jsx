import React from 'react'
import Add from "../img/addAvatar.png"
const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Joflah</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                </form>
                <p> If you don't have an account, Register</p>
            </div>
        </div>
    )
}

export default Login