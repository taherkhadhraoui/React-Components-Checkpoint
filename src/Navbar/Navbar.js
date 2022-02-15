import React from "react";
import logo from "./logo.svg";
import { Container, Navbar } from "react-bootstrap";

const NavbarC = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} width="30" height="30" alt="" /> Start Selling
            Products Online
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarC;
