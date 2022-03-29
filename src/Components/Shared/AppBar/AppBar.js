import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const AppBar = () => {
    return (
      <>
        {/* <Navbar className="navbar" expand="lg">
          <Container fluid className="container">
            <Navbar.Brand href="#">e-tutor</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">features</Nav.Link>
                <Nav.Link href="#action2">find a tutor</Nav.Link>
                <Nav.Link href="#action2">become a tutor</Nav.Link>
              </Nav>
              <Nav className='nav'>
                <Nav.Link href="#deets">Sign in</Nav.Link>
                <Nav.Link  href="#memes">
                  <Button variant="warning">Register</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}

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