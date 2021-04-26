import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = () => {
  return (
    <Navbar
      style={{ padding: "1% 10%" }}
      bg="inherit"
      expand="lg"
      color="dark"
    >
      <Navbar.Brand href="#home">info@techotrade.org</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#deets">+91 85959 57412 </Nav.Link>
      </Nav>
      <Nav >
        <Nav.Link className="mr-2" href="#">Download App</Nav.Link>
        <Nav.Link className="mr-2" href="#">Sell On Tradologie</Nav.Link>
        <Nav.Link className="mr-2" href="#">Careers</Nav.Link>
        <NavDropdown className="mr-2" title="Choose language">
          <NavDropdown.Item href="#">EN</NavDropdown.Item>
          <NavDropdown.Item href="#">AR</NavDropdown.Item>
          <NavDropdown.Item href="#">FR</NavDropdown.Item>
        </NavDropdown>
        <Button style={{padding: 0}} variant="outline-warning">
          <NavDropdown title="signin">
          <NavDropdown.Item href="#">Login</NavDropdown.Item>
          <NavDropdown.Item href="#">Register</NavDropdown.Item>
          </NavDropdown>
        </Button>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
