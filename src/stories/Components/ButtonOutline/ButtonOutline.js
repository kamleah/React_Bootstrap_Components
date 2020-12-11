import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
const ButtonOutline = ({ size, varients, BtnText, ...props }) => {
  return (
    <Button variant={`${varients}`} size={`${size}`} {...props}>
      {BtnText}
    </Button>
  );
};

ButtonOutline.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  varients: PropTypes.oneOf([
    "outline-primary",
    "outline-secondary",
    "outline-success",
    "outline-warning",
    "outline-danger",
    "outline-info",
    "outline-dark",
  ]),
  BtnText: PropTypes.string,
  onClick: PropTypes.func,
};
ButtonOutline.defaultProps = {
  size: "lg",
  varients: "outline-primary",
  BtnText: "Primary",
  onClick: undefined,
};

export default ButtonOutline;
