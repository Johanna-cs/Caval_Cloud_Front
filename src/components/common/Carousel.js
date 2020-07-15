import React from "react";
import logo from "../SVG-icons/cavalcloud-logo.png";

const Carousel = (props) => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{ height:"180px",width: "220px", position: "relative", left:"2.7em"}}>
          <div className="carousel-item active">
            <img src={logo} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={logo} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={logo} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <hr />
    </>
  );
};
export default Carousel;