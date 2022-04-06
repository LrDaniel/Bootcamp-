import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

class NavLink extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">W15EX1</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavLink;
