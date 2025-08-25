import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import Styles from "../Styles";
import { useState } from "react";

// Components
import PopUpModal from "../components/PopUpModal"

const SignUp = () => {
    // States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [validInformation, setValidInformation] = useState<boolean>(false);

    // Utilities
    const displayErrorMessage = (message: string) => setErrorMessage(message);
    const closeErrorModal = () => setErrorMessage(null);
    
    // Methods: Sign Up
    const navigate = useNavigate();

    // Input Validation
    const validateName = (name: string): boolean => {
        const regex = /^[A-Za-z\s]{2,50}$/
        return regex.test(name)
    }

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const validateUsername = (username: string): boolean => {
        const regex = /^[A-Za-z0-9_]{3,20}$/
        return regex.test(username)
    }

    const validatePassword = (password: string): boolean => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
        return regex.test(password)
    }

    const validatePasswordConfirmation = (passwordConfirmation: string): boolean => {
        return (passwordConfirmation == password)
    }

    const handleSignUp = () => {
        if (!validateName(name)) {
            displayErrorMessage("Name must only include letters and spaces, between 2 and 50 characters")
            return;
        }

        if (!validateEmail(email)) {
            displayErrorMessage("Invalid email address")
            return;
        }

        if (!validateUsername(username)) {
            displayErrorMessage("Username must only include letters, numbers, underscores, between 3–20 characters")
            return;
        }
        
        if (!validatePassword(password)) {
            displayErrorMessage("Password must be at least 8 characters and include one uppercase, one lowercase, one number, and one special character")
            return;
        }

        if (!validatePasswordConfirmation(passwordConfirmation)) {
            displayErrorMessage("Passwords do not match")
            return;
        }

        setValidInformation(true);
    }
    
    const handleLogin = () => {
        navigate("/");
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
        {errorMessage && (
            <PopUpModal
                title="ERROR"
                message={errorMessage}
                onClose={closeErrorModal}
            />
        )}

        {validInformation && (
            <PopUpModal
                title="SUCCESS"
                message="You have successfully signed up!"
                onClose={handleLogin}
            />
        )}
        
        <div className={Styles.loginDivStyle}>
            <h1 className={Styles.h1Style}>App Name</h1>
            <h2 className={Styles.h2Style}>SIGN UP</h2>

            <form action="/login-form" method="POST" className={Styles.formStyle}>
                <label htmlFor="name" className={Styles.inputLabelStyle}>Full Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} className={Styles.inputStyle}/>
                
                <label htmlFor="email" className={Styles.inputLabelStyle}>Email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} className={Styles.inputStyle}/>

                <label htmlFor="username" className={Styles.inputLabelStyle}>Username</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} className={Styles.inputStyle}/>

                <label htmlFor="password" className={Styles.inputLabelStyle}>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className={Styles.inputStyle}/>

                <label htmlFor="confirm-password" className={Styles.inputLabelStyle}>Confirm Password</label>
                <input type="password" onChange={(e) => setPasswordConfirmation(e.target.value)} className={Styles.inputStyle}/>
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