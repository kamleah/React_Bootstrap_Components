import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card } from "react-bootstrap";

const Accordions = ({ AccordionsData,backgroundColor,color,bodyColor,bodyTextColor,borderColor }) => {
  return (
    <Accordion defaultActiveKey="0" >
      {AccordionsData.map((data, index) => (
        <Card style={ borderColor && {borderColor}}>
          <Accordion.Toggle as={Card.Header} eventKey={`${index}`} style={backgroundColor && { backgroundColor }}>
            <span style={color && { color }}>{data.Header}</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={`${index}`} >
            <Card.Body style={{ backgroundColor: bodyColor,color:bodyTextColor }}>{data.Body}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

Accordions.propTypes = {
  backgroundColor:PropTypes.string,
  bodyColor:PropTypes.string,
  bodyTextColor:PropTypes.string,
  borderColor:PropTypes.string,
  color:PropTypes.string,
  AccordionsData: PropTypes.array, 
};
Accordions.defaultProps = {  
  backgroundColor:"rgba(231,34,34,1)",
  bodyColor:"rgba(175,170,207,1)",
  bodyTextColor:"rgba(192,55,57,1)",
  borderColor:"rgba(137,124,204,1)",
  color:"rgba(87,78,64,1)",
  AccordionsData: [
    {
      Header: "Click Me 1",
      Body: "Hello! I'm the body",
    },
    {
      Header: "Click Me 2",
      Body: "Hello! I'm the body",
    },
    {
      Header: "Click Me 3",
      Body: "Hello! I'm the body",
    },
  ],
};

export default Accordions;
