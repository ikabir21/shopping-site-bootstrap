import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button
} from "react-bootstrap";
import { FaRegEnvelope, FaMobileAlt, FaSearch, FaPhoneAlt } from 'react-icons/fa';
import logo from "../../assets/images/logo.png";

export const MyNavbar = () => {
  return (
    <Navbar
      sticky="top"
      style={{ 
        padding: "0.5% 10%", 
        fontSize: "0.9rem",
        zIndex: "20",
        background: "#fff"
        }}
      bg="inherit"
      expand="lg"
      color="dark"
    >
      <Navbar.Brand style={{fontSize: "0.9rem"}} href="#"><FaRegEnvelope className="mr-1 mb-1" />info@example.org</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#deets"><FaPhoneAlt className="mr-1 mb-1" />+91 12345 67890 </Nav.Link>
      </Nav>
      <Nav >
        <Nav.Link className="mr-3" href="#"><FaMobileAlt className="mr-1 mb-1" />Download App</Nav.Link>
        <Nav.Link className="mr-3" href="#">Sell On Tradologie</Nav.Link>
        <Nav.Link className="mr-3" href="#">Careers</Nav.Link>
        <NavDropdown className="mr-3" title="Lang">
          <NavDropdown.Item href="#">EN</NavDropdown.Item>
          <NavDropdown.Item href="#">AR</NavDropdown.Item>
          <NavDropdown.Item href="#">FR</NavDropdown.Item>
        </NavDropdown>
        <Button style={{padding: "0 5px"}} variant="outline-warning">
          <NavDropdown title="signin">
          <NavDropdown.Item href="#">Login</NavDropdown.Item>
          <NavDropdown.Item href="#">Register</NavDropdown.Item>
          </NavDropdown>
        </Button>
      </Nav>
    </Navbar>
  );
};


export const MyNavbar2 = () => {
  return (
    <>
    <Navbar bg="primary" expand="lg" style={{ padding: "0 10%", color: "#eee"}}>
      <Navbar.Brand className="linkColor" href="/"><img style={{cursor: "pointer"}} height="50" src={logo} alt="logo"/> Example.org</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ width: "100%", display: "flex", justifyContent: "space-between"}} fill>
          <Nav.Link className="linkColor" href="#">About us</Nav.Link>
          <Nav.Link className="linkColor" href="/working">Working Methods</Nav.Link>
          <Nav.Link className="linkColor" href="#">Different from others</Nav.Link>
          <Nav.Link className="linkColor" href="/contact">Contact Us</Nav.Link>
          <Nav.Link className="linkColor" href="#">Branded Solution</Nav.Link>
          <Nav.Link className="linkColor" href="#">Media</Nav.Link>
          <Button className="linkColor" variant="success" href="#">Get A Quote</Button>
          <Nav.Link className="linkColor" href="#"><FaSearch/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
</>
  );
}

