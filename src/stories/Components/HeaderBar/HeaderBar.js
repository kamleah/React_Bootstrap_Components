import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Badges from "../Badges/Badges";
const HeaderBar = ({
  backgroundColor,
  color,
  NavLinkData,
  Username,
  UserEmail,
  UserContact
}) => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <Nav className="mr-auto">
        <Nav.Link href="#features" style={{ color: color }}>
          {Username}
        </Nav.Link>
        <Nav.Link href="#pricing" style={{ color: color }}>
          <Badges BadgeText="Cart Items : 5" />
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#deets" style={{ color: color }}>
          {UserEmail}
        </Nav.Link>
        <Nav.Link href="#memes" style={{ color: color }}>
          {UserContact}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

HeaderBar.propTypes = {
  Username: PropTypes.string,
  UserEmail: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  UserContact:PropTypes.string,
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
    "dark",
  ]),
};
HeaderBar.defaultProps = {
  Username: "Kamlesh Gupta",
  UserEmail: "kamleshgupta594@gmail.com",
  UserContact:"9637199927",
  backgroundColor: "#343a40",
  color: "#dc3545",  
  varients: "outline-primary",
};

export default HeaderBar;
