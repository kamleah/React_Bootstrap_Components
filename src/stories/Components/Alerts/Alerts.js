import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

const Alerts = ({
  backgroundColor,
  color,
  alertMessageStart,
  AlertMessageEnd,
  LinkHeading,
}) => {
  return (
    <Alert style={{ backgroundColor: backgroundColor, color: color }}>
      {alertMessageStart}
      <Alert.Link to="#">{LinkHeading}</Alert.Link>.{AlertMessageEnd}
    </Alert>
  );
};

Alerts.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  alertMessageStart: PropTypes.string,
  LinkHeading: PropTypes.string,
  AlertMessageEnd: PropTypes.string,
};
Alerts.defaultProps = {
  backgroundColor:"rgba(236,16,48,1)",
  color:"rgba(22,22,24,1)",
  alertMessageStart: "This is a  alert—check it out!",
  LinkHeading: "an example link",
  AlertMessageEnd: "This is a  alert—check it out!",
};

export default Alerts;
