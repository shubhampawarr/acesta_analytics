import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import LOGO from "../assests/LOGO.jpg";
import { NavLink } from "react-router-dom";

function Header() {
  let activeStyle = {
    color: "white",
  };
  return (
    <>
      <Navbar expand="lg" bg="black" variant="dark">
        <Container>
            <Navbar.Brand href="/">
              <img
                to="/"
                alt=""
                src={LOGO}
                width="250"
                height="150"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-autos">
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contact us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
