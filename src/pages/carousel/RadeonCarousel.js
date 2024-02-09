import React from 'react'
import ReactPlayer from 'react-player';

const RadeonCarousel = () => {
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
              
            </div>
            <div className="carousel-inner">
              
              <div className="carousel-item active">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=_fDTA-iCtKY"
                  className="d-block w-100"
                  alt="TVS Jupiter-img"
                  playing={true}
                ></ReactPlayer>
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item ">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Website-Banners---Radeon/1520x500.png"
                  className="d-block w-100"
                  alt="TVS Jupiter-img"
                ></img>
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/30sept2022/Radoen-Hero-Banner_W1520px-X-H500px.jpg"
                  className="d-block w-100"
                  alt="TVS Jupiter-img"
                ></img>
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              
              <div className="carousel-item">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Slider/05-04-2022/1.jpg"
                  className="d-block w-100"
                  alt="TVS Jupiter-img"
                ></img>
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Slider/05-04-2022/2.jpg"
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

export default RadeonCarousel