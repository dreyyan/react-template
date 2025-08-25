import { Link, useNavigate } from "react-router-dom";
import React from "react";

// STYLES
const mainDivStyle = "border-4 flex flex-col justify-center items-center w-[100%]";
const loginDivStyle = "border-2 flex flex-col items-center mx-4 my-4 px-4 py-4 bg-gray-100";
const formStyle = "border flex flex-col mb-2";
const inputStyle = "border rounded-md my-2 px-2 py-1";
const roundedButtonStyle = "border rounded-full w-[90%] mt-2 px-6 py-1 text-xl font-bold";
const squareButtonStyle = "border rounded-md w-[40%] mt-2 py-1 text-sm font-bold";
const h1Style = "text-7xl font-bold";

const Login = () => {
    // METHODS: Login
    const navigate = useNavigate();
    const handleLogin = () => {
        
    }

    const handleSignUp = () => {
        navigate("/SignUp");
    }

    return (
    <div className={mainDivStyle}>
        <h1 className={h1Style}>App Name</h1>

        <div className={loginDivStyle}>
            <form action="/login-form" method="POST" className={formStyle}>
                <label htmlFor="name">Name</label>
                <input type="text" className={inputStyle}/>
                
                <label htmlFor="email">Email</label>
                <input type="text" className={inputStyle}/>

                <label htmlFor="password">Password</label>
                <input type="text" className={inputStyle}/>
            </form>
            <button className={roundedButtonStyle} onClick={handleLogin}>Login</button>
            <h4>or</h4>
            <button className={squareButtonStyle} onClick={handleSignUp}>Sign Up</button>
        </div>
    </div>
  );
};

export default Login;