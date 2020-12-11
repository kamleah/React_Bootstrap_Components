import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
const Buttons = ({ backgroundColor, color, size, varients,BtnText, ...props }) => {
  return (
    <div>
      <Button variant={`${varients}`} size={`${size}`} {...props}>
        {BtnText}
      </Button>
    </div>
  );
};

Buttons.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  varients: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "dark",
  ]),
  BtnText: PropTypes.string,
  onClick: PropTypes.func,
};
Buttons.defaultProps = {
  size: "lg",
  varients: "primary",
  BtnText: "Primary",
  onClick: undefined,
};
export default Buttons;
