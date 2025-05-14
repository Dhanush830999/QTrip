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
                <input style={{borderRadius:"5px", borderColor:"black",outline:"0",padding:"10px"}} type="text" placeholder="Enter your Name" required /><br /><br />
                <input style={{borderRadius:"5px", borderColor:"black",outline:"0",padding:"10px"}} type="email" placeholder="Enter your EmailId" required /><br /><br />
                <input style={{borderRadius:"5px", borderColor:"black",outline:"0",padding:"10px"}} type="password" placeholder="Enter your password" required /><br /><br />
                <input style={{borderRadius:"5px", borderColor:"black",outline:"0",padding:"10px"}} type="password" placeholder="Confirm your password" required /><br /><br />
                <button style={{color:"white",backgroundColor:"orange",border:"0px",borderRadius:"5px",width:"90px",height:"50px"}} type="submit">Register</button>
            </form>
        </center>
    );
};

export default Registerpage;
