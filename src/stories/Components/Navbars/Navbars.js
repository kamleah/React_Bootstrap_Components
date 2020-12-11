import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from '../Buttons/Buttons'
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
const Navbars = ({ backgroundColor, color, NavLinkData,Title,varients }) => {
  
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <Navbar.Brand href="#home" style={{ color: color }}>
    {Title}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {NavLinkData.map((LinkData, index) => (
            <Nav.Link href={LinkData.Link} style={{ color: color }}>
              {LinkData.LinkTitle}
            </Nav.Link>
          ))}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Buttons variant={`${varients}`} size="md" BtnText="Search"  />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

Navbars.propTypes = {
  Title:PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  NavLinkData: PropTypes.array,
  varients: PropTypes.oneOf([
    "outline-primary",
    "outline-secondary",
    "outline-success",
    "outline-warning",
    "outline-danger",
    "outline-info",
    "outline-dark",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "dark"
  ]),
};
Navbars.defaultProps = {
  Title:"React-Bootstrap",
  backgroundColor: "#343a40",
  color: "#dc3545",
  NavLinkData: [
    {
      LinkTitle: "Home",
      Link: "/home",
    },
    {
      LinkTitle: "Product",
      Link: "/products",
    },
    {
      LinkTitle: "Sales",
      Link: "/sales",
    },
    {
      LinkTitle: "About Us",
      Link: "/about-us",
    },
    {
      LinkTitle: "Contact Us",
      Link: "/contact-us",
    },
  ],
  varients: "outline-primary",
};

export default Navbars;
