import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row,Col,Image } from "react-bootstrap";
function Images(props) {
  return (
    <Container>
      <Row>
        <Col xs={2} md={2}>
          <Image src="https://images.pexels.com/photos/1165991/pexels-photo-1165991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" rounded height="70" />
        </Col>
        <Col xs={2} md={2}>
          <Image src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" roundedCircle height="70" />
        </Col>
        <Col xs={2} md={2}>
          <Image src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" thumbnail height="70" />
        </Col>
      </Row>
      <Image src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" fluid />
    </Container>
  );
}

Images.propTypes = {};
Images.defailtProps = {};

export default Images;
