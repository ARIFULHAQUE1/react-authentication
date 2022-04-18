import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
      return (
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <Container>
            <Navbar.Brand href="#home"> <FontAwesomeIcon className='text-danger' icon={faStethoscope}></FontAwesomeIcon> The Health Care</Navbar.Brand>
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
                <Nav.Link eventKey={2} href="#memes" className='text-danger'>
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
      );
};

export default Header;