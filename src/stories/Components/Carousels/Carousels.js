import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
const Carousels = ({ CarouselsData,height }) => {
  return (
    <Carousel >
      {CarouselsData.map((index, key) => (
        <Carousel.Item style={{height:height}}>
          <img
            className="d-block w-100"
            src={index.CarouselsImageSrc}
            alt={index.CarouselsTitle}
          />
          <Carousel.Caption>
            <h3>{index.CarouselsLabel}</h3>
            <p>{index.CarouselsText}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

Carousels.propTypes = {
  CarouselsData: PropTypes.array,
  height: PropTypes.number
};
Carousels.defaultProps = {
  CarouselsData: [
    {
      CarouselsImageSrc:
        "https://img.freepik.com/free-vector/merry-christmas-new-year-card-with-realistic-ornaments-golden-rose_1361-3044.jpg?size=664&ext=jpg&ga=GA1.2.559605709.1605939917",
      CarouselsTitle: "First slide",
      CarouselsLabel: "First slide label",
      CarouselsText:
        "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      CarouselsImageSrc:
        "https://img.freepik.com/free-vector/winter-holidays-greeting-illustration_348879-8.jpg?size=664&ext=jpg&ga=GA1.2.559605709.1605939917",
      CarouselsTitle: "Second slide",
      CarouselsLabel: "First slide label",
      CarouselsText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      CarouselsImageSrc:
        "https://img.freepik.com/free-vector/christmas-greeting-card-with-blue-golden-realistic-decoration_1361-3055.jpg?size=664&ext=jpg&ga=GA1.2.559605709.1605939917",
      CarouselsTitle: "Second slide",
      CarouselsLabel: "First slide label",
      CarouselsText:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.e",
    },
  ],
  height:350
};

export default Carousels;
