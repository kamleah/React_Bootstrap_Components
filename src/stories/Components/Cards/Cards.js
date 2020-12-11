import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "../Buttons/Buttons";
import { Card } from "react-bootstrap";
const Cards = ({
  backgroundColor,
  width,
  varients,
  CardImage,
  CardTitle,
  CardText,
  ImageHeight,
  CardTitleColor,
  CardTextColor,
}) => {
  return (
    <Card style={{ backgroundColor: backgroundColor, width: width }}>
      <Card.Img
        variant={`${varients}`}
        src={CardImage}
        style={{ height: ImageHeight }}
      />
      <Card.Body>
        <Card.Title style={{ color: CardTitleColor }}>{CardTitle}</Card.Title>
        <Card.Text style={{ color: CardTextColor }}>{CardText}</Card.Text>        
        <Buttons
          variant="primary"
          BtnText="Go somewhere"
          size="sm"
          onClick={() => alert("hello")}
        ></Buttons>
      </Card.Body>
    </Card>
  );
};

Cards.propTypes = {
  backgroundColor: PropTypes.string,
  width: PropTypes.number,
  varients: PropTypes.oneOf(["top", "flush", "bottom"]),
  CardImage: PropTypes.string,
  CardTitle: PropTypes.string,
  CardText: PropTypes.string,
  ImageHeight: PropTypes.string,
  CardTitleColor: PropTypes.string,
  CardTextColor: PropTypes.string,
};
Cards.defaultProps = {
  backgroundColor: "#17a2b8",
  width: "auto",
  varients: "top",
  CardImage:
    "https://img.freepik.com/free-vector/realistic-christmas-party-poster-template_79603-1116.jpg?size=338&ext=jpg&ga=GA1.2.559605709.1605939917",
  CardTitle: "Card Title",
  CardText:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  ImageHeight: "auto",
  CardTitleColor: "#dc3545",
  CardTextColor: "#343a40",
};

export default Cards;
