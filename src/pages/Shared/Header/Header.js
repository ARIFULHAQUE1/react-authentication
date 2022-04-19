import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.int';
import { useAuthState } from 'react-firebase-hooks/auth';
const Header = () => {
  const [user]=useAuthState(auth)
  const logout = () => {
    signOut(auth);
  };

      return (
           
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
        <Navbar.Brand as={Link}to='hospital'><FontAwesomeIcon className='text-danger' icon={faStethoscope}></FontAwesomeIcon> <span className='text-primary'>The Health Care</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}to='blog'><span className='text-primary'>Blog</span></Nav.Link>
            <Nav.Link as={Link}to='appointment'><span className='text-primary'>Appointment</span></Nav.Link>
            <Nav.Link as={Link}to='service'><span className='text-primary'>Service</span></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link}to='about'><span className='text-primary'>About</span></Nav.Link>
          { 
           user
           ?
           <button className='btn btn-white text-danger' onClick={logout}>Logout</button>
           :
              <Nav.Link eventKey={2} as={Link}to='login'>
            <span className='text-danger'>Login</span>
              </Nav.Link>
          }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
          
      );
};

export default Header;