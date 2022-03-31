import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';

const AppBar = () => {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" className="nav">
          <Container>
            <Navbar.Brand href="#home">
              <h3>
                <span className="text-warning">e</span> -tutor
              </h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features" className="text-warning navLink">
                  Home
                </Nav.Link>
                <Nav.Link className="navLink" href="#pricing">
                  features
                </Nav.Link>
                <Nav.Link className="navLink" href="#pricing">
                  Find a Tutor
                </Nav.Link>
                <Nav.Link className="navLink" href="#pricing">
                  Become a Tutor
                </Nav.Link>
              </Nav>
              <Nav className="nav">
                <Nav.Link className="navLink" href="#deets">
                  Sign in
                </Nav.Link>
                <Nav.Link href="#deets">
                  <button  className="navButton">Register</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default AppBar;