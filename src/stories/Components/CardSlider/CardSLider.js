import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CardSlider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function CardSlider({ slider }) {
  console.log(slider.length);
  const [x, setX] = useState(0);

  const prevClick = () => {
    x === 0 ? setX(-100 * (slider.length - 4)) : setX(x + 100);
  };

  const nextClick = () => {
    x === -100 * (slider.length - 4) ? setX(0) : setX(x - 100);
  };

  return (
    <>
      <div>
        <div className="container" style={{ maxWidth: "1240px" }}>
          <div className="app">
            {slider.map((item, index) => (
              <Card
                key={index}
                style={{ transform: `translateX(${x}%)`, minWidth: "25%" }}
              >
                <Card.Img src={item.src} alt={item.src}></Card.Img>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Link href="#">Read More</Card.Link>
                </Card.Body>
              </Card>
            ))}
          </div>
          <button className="btnprev btn btn-danger" onClick={prevClick}>
            &#8249;
          </button>
          <button className="btnnext btn btn-danger" onClick={nextClick}>
            &#8250;
          </button>
        </div>
      </div>
    </>
  );
}

CardSlider.propTypes = {
  slider: PropTypes.array,
};

CardSlider.defaultProps = {
  slider: [
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/21/09/33/rose-5589514__340.jpg",
      title: "Product 01",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/21/21/24/landscape-5591270__340.jpg",
      title: "Product 02",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/18/13/05/lynx-5581792__340.jpg",
      title: "Product 03",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/24/16/12/roosters-5599141__340.jpg",
      title: "Product 04",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/21/16/08/seascape-5590487__340.jpg",
      title: "Product 05",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/11/17/01/landscape-5563684__340.jpg",
      title: "Product 06",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/22/07/27/gaillardia-5592172__340.jpg",
      title: "Product 07",
      description: "Tutorial of Slide Show",
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2020/09/27/12/21/children-5606512__340.jpg",
      title: "Product 08",
      description: "Tutorial of Slide Show",
    },
  ],
};
export default CardSlider;
