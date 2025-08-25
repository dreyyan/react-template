import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import Styles from "../Styles";

const Login = () => {
    // METHODS: Login & Sign Up
    const navigate = useNavigate();
    const handleLogin = () => {
        
    }

    const handleSignUp = () => {
        navigate("/SignUp");
    }

    // METHODS: OAuth Login
    const handleFacebookLogin = () => {
        alert("Logging in via Facebook...")
    }

    const handleGoogleLogin = () => {
        alert("Logging in via Google...")
    }

    return (
    <div className={Styles.mainDivStyle}>

        <div className={Styles.loginDivStyle}>
            <h1 className={Styles.h1Style}>App Name</h1>
            <h2 className={Styles.h2Style}>LOGIN</h2>
            <form action="/login-form" className={Styles.formStyle}>
                <label htmlFor="username-email" className={Styles.inputLabelStyle}>Username or Email</label>
                <input type="text" className={Styles.inputStyle}/>

                <label htmlFor="password" className={Styles.inputLabelStyle}>Password</label>
                <input type="password" className={Styles.inputStyle}/>
            </form>
            <button type="button" className={Styles.roundedButtonStyle} onClick={handleLogin}>Login</button>
            <h4>or login with</h4>
            <div className={Styles.oAuthDivStyle}>
                <button type="button" onClick={handleFacebookLogin}>
                    <img
                    src="/fb-icon.png"
                    alt="Facebook Login"
                    className="w-8 h-8"
                    />
                </button>
                <button type="button" onClick={handleGoogleLogin}>
                    <img
                    src="/google-icon.png"
                    alt="Google Login"
                    className="w-8 h-8"
                    />
                </button>
            </div>
            <button type="button" className={Styles.squareButtonStyle} onClick={handleSignUp}>Sign Up</button>
        </div>
    </div>
  );
};

export default Login;