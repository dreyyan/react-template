import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import Styles from "../Styles";

const SignUp = () => {
    // METHODS: Sign Up
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/");
    }

    const handleSignUp = () => {
    }
    
    // METHODS: OAuth Sign Up
    const handleFacebookSignUp = () => {
        alert("Signing in via Facebook...")
    }

    const handleGoogleSignUp = () => {
        alert("Signing in via Google...")
    }

    return (
    <div className={Styles.mainDivStyle}>

        <div className={Styles.loginDivStyle}>
            <h1 className={Styles.h1Style}>App Name</h1>
            <h2 className={Styles.h2Style}>SIGN UP</h2>
            <form action="/login-form" method="POST" className={Styles.formStyle}>
                <label htmlFor="name" className={Styles.inputLabelStyle}>Full Name</label>
                <input type="text" className={Styles.inputStyle}/>
                
                <label htmlFor="email" className={Styles.inputLabelStyle}>Email</label>
                <input type="text" className={Styles.inputStyle}/>

                <label htmlFor="username" className={Styles.inputLabelStyle}>Username</label>
                <input type="text" className={Styles.inputStyle}/>

                <label htmlFor="password" className={Styles.inputLabelStyle}>Password</label>
                <input type="password" className={Styles.inputStyle}/>

                <label htmlFor="confirm-password" className={Styles.inputLabelStyle}>Confirm Password</label>
                <input type="password" className={Styles.inputStyle}/>
            </form>
            <button className={Styles.roundedButtonStyle} onClick={handleSignUp}>Sign Up</button>
            <h4>or sign up with</h4>
            <div className={Styles.oAuthDivStyle}>
                <button type="button" onClick={handleFacebookSignUp}>
                    <img
                    src="/fb-icon.png"
                    alt="Facebook Login"
                    className="w-8 h-8"
                    />
                </button>
                <button type="button" onClick={handleGoogleSignUp}>
                    <img
                    src="/google-icon.png"
                    alt="Google Login"
                    className="w-8 h-8"
                    />
                </button>
            </div>
            <button className={Styles.squareButtonStyle} onClick={handleLogin}>Go to Login</button>
        </div>
    </div>
  );
};

export default SignUp;