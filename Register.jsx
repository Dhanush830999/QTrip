import React from "react";
import { useNavigate } from "react-router-dom";

const Registerpage = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate("/login"); 
    };

    return (
        <center>
            <h1 style={{ marginTop: "80px" }}>Registration Page</h1>
            <form onSubmit={handleRegister} style={{ marginTop: "30px" }}>
                <input type="text" placeholder="Enter your Name" required /><br />
                <input type="email" placeholder="Enter your EmailId" required /><br />
                <input type="password" placeholder="Enter your password" required /><br />
                <input type="password" placeholder="Confirm your password" required /><br />
                <button type="submit">Register</button>
            </form>
        </center>
    );
};

export default Registerpage;
