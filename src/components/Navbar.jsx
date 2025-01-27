import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AppNavbar.css';
// Import the company logo
import logo from '../assets/1.png'; // Adjust the path based on your file structure

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Add the company logo */}
        <Navbar.Brand as={Link} to="/" style={{ fontSize: '1.8rem', fontWeight: 'bolder' }}>
          <img
            src={logo}
            alt="Company Logo"
            width="100" // Adjust the width as needed
            height="80" // Adjust the height as needed
            className="d-inline-block align-top"
          />{' '}
          RIO International
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
