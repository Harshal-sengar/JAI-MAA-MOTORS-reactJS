import React from "react";

function MopedCarousel() {
  return (
    <section id="title" style={{ backgraound: "white" }}>
      <div className="container-fluid" style={{ padding: "0px" }}>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
          data-pause="hover"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Banner/Website-Banner/TVS-XL100-Web-Site-Banner-eng-01.jpg"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Banner/optimize-image/Yellow-banner-web-1520-x-500.png"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Banner/optimize-image/Banner-1520-x-500-px.jpg"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Banner/New-Banner/03_TVS-XL100---RF-Scheme-Website-Banner---English_2022_1520-x-500.jpg"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Banner/optimize-image/win-banner-D.jpg"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Banner/optimize-image/D-2.jpg"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Banner/optimize-image/TVS-XL100--BS6--English--Digital-Banner--1520-x-500px2x1-1D4.jpg"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default MopedCarousel;
