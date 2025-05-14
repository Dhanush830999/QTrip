import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Navgation=()=> {
  return (
   <Navbar bg="white" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/Home" style={{color:"orangered",textShadow:"2px 2px 2px grey"}}><h2>DTrip</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/Home" style={{color:"grey"}}>Home</Nav.Link>
            <Nav.Link href="#cards" style={{color:"grey"}}>Reservation</Nav.Link>
            <Nav.Link href="/Login" style={{ color: "orange" }} onClick={"/Login.jsx"} >Login Here</Nav.Link>
           <Nav.Link href="/Register"> <button 
              style={{
                backgroundColor: "orange",
                color: "white",
                width: "100px",
                borderRadius: "5px",
                border: "none",
                marginLeft: "10px"
              }} onClick={"/Register.jsx"}
              
            >
              <h5 style={{marginTop:"2px"}}>Register</h5>
            </button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navgation;