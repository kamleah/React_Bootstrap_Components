import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const Modals = ({
  ButtonTitle,
  ModalHeading,
  ModalBody,
  CloseTitle,
  SaveChangesTitle,
  backgroundColor,
  color
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {ButtonTitle}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={backgroundColor && { backgroundColor }}
        >
          <Modal.Title style={color && { color }}>{ModalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={backgroundColor && { backgroundColor }}>
          <p style={color && { color }}>{ModalBody}</p>
        </Modal.Body>
        <Modal.Footer style={backgroundColor && { backgroundColor }}>
          <Button variant="secondary" onClick={handleClose}>
            {CloseTitle}
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {SaveChangesTitle}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Modals.propTypes = {
  ButtonTitle: PropTypes.string,
  ModalHeading: PropTypes.string,
  ModalBody: PropTypes.string,
  CloseTitle: PropTypes.string,
  SaveChangesTitle: PropTypes.string,
  backgroundColor: PropTypes.string
};
Modals.defaultProps = {
  ButtonTitle: "Launch demo modal",
  ModalHeading: "Modal Heading",
  ModalBody: "Woohoo, you're reading this text in a modal!",
  CloseTitle: "Close",
  SaveChangesTitle: "Save Changes",
  backgroundColor:"#343a40"
};
export default Modals;
