import React from 'react';
import "../register/register.css"

const Register = () => {
    return (
        <div>
            <div className="Register">
                <span className="RegisterTitle">Register Now</span>
                <form className="RegisterForm">
                    <label>Username</label>
                    <input className="RegisterInput" type="text" placeholder="Enter your username..." />
                    <label>Email</label>
                    <input className="RegisterInput" type="text" placeholder="Enter your email..." />
                    <label>Password</label>
                    <input className="RegisterInput" type="password" placeholder="Enter your password..." />
                    <button className="RegisterButton">Register</button>
                </form>
                    <button className="RegisterLoginButton">Register Now</button>
                </div>
        </div>
    );
};

export default Register;