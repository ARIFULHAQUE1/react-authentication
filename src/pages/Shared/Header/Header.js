import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
      return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home"><img src="https://img.freepik.com/free-vector/red-heart-with-heartbeat-line-medical-background_1017-26835.jpg?size=626&ext=jpg&ga=GA1.2.1652170954.1649070937" height={50} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Service</Nav.Link>
                <Nav.Link href="#pricing">Blog</Nav.Link>
                <NavDropdown title="Service" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Baby Care</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Mother Care</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">About</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
      );
};

export default Header;