import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LOGO from "../assests/Logo Design new background.jpg";
import "./Footer.css"
import { NavLink } from "react-router-dom";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <>
      <Navbar
        expand="lg"
        // bg="white"
        style={{ backgroundColor: "#212935", color: "white" }}
        // variant="white"
      >
        <Container style={{ display: "block" }}>
          <hr></hr>
          <Navbar.Brand
            href="/"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <img
              alt="Acesta Analytics"
              src={LOGO}
              width="200"
              height="100"
              className="footerImage"
            />{" "}
            <div className="contactLogo" style={{ color: "whitesmoke" }}>
              <span className="instagram">
                {" "}
                <a
                  href="http://instagram.com/acestaanalytics"
                  target="_blank"
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  <BsInstagram />{" "}
                </a>
              </span>
              |
              <span className="twitter">
                {" "}
                <a
                  href="http://twitter.com/acestaanalytics"
                  target="_blank"
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  <BsTwitter />{" "}
                </a>
              </span>
              |
              <span className="linkedIn">
                {" "}
                <a
                  href="http://linkedin.com/in/acesta-analytics-a67723288"
                  target="_blank"
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  <BsLinkedin />{" "}
                </a>
              </span>
              |
              <span className="gmail">
                {" "}
                <a
                  href="acestaanalytics@gmail.com"
                  target="_blank"
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  <SiGmail />{" "}
                </a>
              </span>
            </div>
          </Navbar.Brand>
          <div
            className="content"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <Nav className="me-autoss">
              <NavLink
                to="/"
                className="nav-link"
                style={{ color: "white" }}
              >
                Home 
              </NavLink>
              <NavLink
                to="/services"
                className="nav-link"
                style={{ color: "white" }}
              >
                Services 
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                style={{ color: "white" }}
              >
                About 
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                style={{ color: "white" }}
              >
                Contactus
              </NavLink>
            </Nav>
            <Navbar.Text style={{ color: "white" }}>
              Privacy Policy | Terms of service
            </Navbar.Text>
          </div>
          <hr style={{ color: "white" }} />
          <div className="hello">
            © 2023 Acesta Analytics. All rights reserved.
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
