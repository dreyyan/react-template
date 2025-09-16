import { Navigate, useNavigate } from "react-router-dom";
import "../index.css";
import Styles from "../Styles";

const Dashboard = () => {
    const navigate = useNavigate();

    // METHODS: Navigation
    const handleLogOut = () => {
        navigate("/")
    }

    return (
    <div className={Styles.mainDivStyle}>
        <div className={Styles.sectionDivStyle}>
            <h1 className={Styles.h1Style}>DASHBOARD</h1>
            <button type="button" className={Styles.roundedButtonStyle} onClick={handleLogOut}>Log Out</button>
        </div>
    </div>
    );
}

export default Dashboard