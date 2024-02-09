import React from 'react'

const JuipterCarousel = () => {
  return (
    <>
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
           
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.tvsmotor.com/tvs-jupiter/-/media/JupiterOptimizedImages/Desktop/web-banner_Desktop-1366x500.webp"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/tvs-jupiter/-/media/JupiterOptimizedImages/Desktop/website---classic-image-revised-headline---1366x503-px-01.webp"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/tvs-jupiter/-/media/JupiterOptimizedImages/Desktop/Desktop-Banner.webp"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/tvs-jupiter/-/media/JupiterOptimizedImages/Desktop/04_TVS-Jupiter-110_Digital-Banners_12-08-2022_1366x503-pxl---Grey-Bike.webp"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
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
      </div>
    </section>
    </>
  )
}

export default JuipterCarousel