import React from "react";
import PropTypes from "prop-types";
import { Jumbotron } from "react-bootstrap";
function Jumbotrons({ JumbotronsHeading, JumbotronsText, height, width, backgroundColor,JumbotronsHeadingColor,JumbotronsTextColor }) {
  return (
    <Jumbotron style={{ height: height, width: width,backgroundColor:backgroundColor }}>
      <h1 style={{color:JumbotronsHeadingColor}}>{JumbotronsHeading}</h1>
      <p style={{color:JumbotronsTextColor}}>{JumbotronsText}</p>
    </Jumbotron>
  );
}

Jumbotrons.propTypes = {
  JumbotronsHeading: PropTypes.string,
  JumbotronsText: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  backgroundColor: PropTypes.string,
  JumbotronsHeadingColor: PropTypes.string,
  JumbotronsTextColor: PropTypes.string,
};
Jumbotrons.defaultProps = {
  JumbotronsHeading: "Hello, world!",
  JumbotronsText:
    "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
  height: 250,
  width: 500,
  backgroundColor:"#343a40",
  JumbotronsHeadingColor:"#dc3545",
  JumbotronsTextColor:"#17a2b8"
};

export default Jumbotrons;
