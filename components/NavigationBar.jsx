import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import Image from "next/image";
import NavBrand from "../public/ERlogo.svg";

function NavigationBar() {
  return (
    <Navbar className="nav-bg" expand="lg" variant="dark" fixed="top">
      <Container className="d-md-flex navbar-size">
        <a className="navbar-brand nav-brand" href="">
          <Image
            className="brand-img"
            src={NavBrand}
            width={40}
            height={30}
            alt="ER Expert Recruitments Logo"
          />
          ER Expert Recruitments
        </a>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navItem">
            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="#about">About Us</Nav.Link>

            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#topContainer">Job Seeker</Nav.Link>

            <Nav.Link href="#topContainer">Hire Us</Nav.Link>
            <NavDropdown title="News & Updates" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Company Updates
              </NavDropdown.Item>
              <NavDropdown.Item href="#faq">FAQ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
