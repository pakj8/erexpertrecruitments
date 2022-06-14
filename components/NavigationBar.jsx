import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar className="nav-bg" expand="lg" variant="dark" fixed="top">
      <Container className="d-md-flex">
        <Navbar.Brand className="nav-brand" href="#home">
          ER Expert Recruitment
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Company Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Vision</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mission</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Team</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Job Seeker" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hire Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="News & Updates" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Company Updates
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
