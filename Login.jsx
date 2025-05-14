import React from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
            navigate("/home"); 
    };

    return (
        <center>
            <h1 style={{ marginTop: "80px" }}>Login Page</h1>
            <form onSubmit={handleLogin} style={{ marginTop: "30px" }}>
                <input type="email" placeholder="Enter your Email" required /><br />
                <input type="password" placeholder="Enter your password" required /><br />
                <button type="submit">Login</button> 
            </form>
        </center>
    );
};

export default Loginpage;

