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
                <input style={{borderRadius:"5px",outline:"0",padding:"10px"}}  type="email" placeholder="Enter your Email" required /><br /><br />
                <input style={{borderRadius:"5px", borderColor:"black",outline:"0",padding:"10px"}} type="password" placeholder="Enter your password" required /><br /><br />
                <button style={{color:"white",backgroundColor:"orange",border:"0px",borderRadius:"5px",width:"70px",height:"40px",padding:"3px"}} type="submit">Login</button> 
            </form>
        </center>
    );
};

export default Loginpage;

