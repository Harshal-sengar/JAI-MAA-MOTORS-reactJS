import React from "react";
import { Link } from "react-router-dom";

function Carousel() {
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
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="8"
              aria-label="Slide 9"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="9"
              aria-label="Slide 10"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="10"
              aria-label="Slide 11"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="11"
              aria-label="Slide 12"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="12"
              aria-label="Slide 13"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="13"
              aria-label="Slide 14"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.tvsmotor.com/-/media/u400-launch/entrypoints/Corporate-Banner-Desktop--1366x600.png"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <Link to="/Models/Jupiter/"><img
                src="https://www.tvsmotor.com/-/media/Feature/Hero-Banner/New/Images/1366x600.jpg"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img></Link>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/-/media/Feature/Hero-Banner/AOG-MarqueeRide/zanskar2023/updated-images/Apache-Zanskar-desktop-banner.jpg"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/-/media/TVSv2/17-05-23/059_RR-BTO-Web-Banner_1366-x-600.jpg"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <Link to="pages/ronin">
                <img
                  src="https://www.tvsmotor.com/-/media/TVSv2/17-05-23/Corporate-Banner-02.jpg"
                  className="d-block w-100"
                  alt="TVS Jupiter-img"
                ></img>
              </Link>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <Link to="/Models/Apache/RTR1604V"><img
                src="https://www.tvsmotor.com/-/media/TVSv2/17-05-23/098_23_Apache-160-4V_Desktop_1366-x-600.jpg"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img></Link>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/-/media/TVSv2/17-05-23/TVS-Jupiter-125---Digital-Banner-1-02.jpg"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item ">
              <Link to="/pages/raider">
                <img
                  src="https://www.tvsmotor.com/tvs-raider/-/media/Brand-Pages/TVS-Raider/24-05-2022/Desktop1.png "
                  className="d-block w-100"
                  alt="TVS rider-img"
                ></img>
              </Link>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <Link to="/Models/Jupiter"><img
                src="https://www.tvsmotor.com/-/media/Feature/Hero-Banner/IntelliGo_Desktop.jpg"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img></Link>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <Link to="/Models/Apache"><img
                src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/homepage/banner/2022/Website-creative---1366-x-500-Pix---Range.jpg"
                className="d-block w-100"
                alt="TVS Apache-img"
              ></img></Link>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <Link to="/pages/radeon">
                {" "}
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Slider/radeonaug15-D.jpg"
                  className="d-block w-100"
                  alt="Tvs Rider-img"
                />
              </Link>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/-/media/Feature/Hero-Banner/D-NtorQ-Range-KV-Social-Media_1366-x-600px-01.jpg"
                className="d-block w-100"
                alt="TVS Ntorq-img"
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <Link to="/pages/Moped">
                <img
                  src="https://www.tvsmotor.com/-/media/Feature/Hero-Banner/Coral-Silk---Static-Banner-1366-x-600px-01.jpg"
                  className="d-block w-100"
                  alt="TVS XL100-img"
                />
              </Link>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <Link to="pages/Sport">
                <img
                  src="https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Banner/tvs-sport-banner-3-eng-d.jpg"
                  className="d-block w-100"
                  alt="TVS Sport-img"
                />
              </Link>
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
export default Carousel;
