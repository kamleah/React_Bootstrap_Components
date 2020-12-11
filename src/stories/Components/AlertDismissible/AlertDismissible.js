import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button } from "react-bootstrap";

const AlertDismissible = ({
  ErrorHeading,
  ErrorMessage,
  ButtonText,
  backgroundColor,
  ErrorHeadingcolor,
  ErrorMessagecolor,
}) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
        style={backgroundColor && { backgroundColor }}
      >
        <Alert.Heading style={{ color: ErrorHeadingcolor }}>
          {ErrorHeading}
        </Alert.Heading>
        <p style={{ color: ErrorMessagecolor }}>{ErrorMessage}</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>{ButtonText}</Button>;
};

AlertDismissible.propTypes = {
  ErrorHeadingcolor:PropTypes.string,
  ErrorMessagecolor:PropTypes.string,
  backgroundColor:PropTypes.string,
  ErrorHeading: PropTypes.string,
  ErrorMessage: PropTypes.string,
  ButtonText: PropTypes.string,
};
AlertDismissible.defaultProps = {
  ErrorHeadingcolor:"rgba(51,28,165,1)",
  ErrorMessagecolor:"rgba(73,60,138,1)",
  backgroundColor:"rgba(195,188,231,1)",
  ErrorHeading: "Oh snap! You got an error!",
  ErrorMessage:
    "Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.Cras mattis consectetur purus sit amet fermentum.",
  ButtonText: "View Error Message",
};

export default AlertDismissible;
