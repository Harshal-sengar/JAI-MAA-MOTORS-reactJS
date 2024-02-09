import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";

const ApacheSeries = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=C0crUpVEeXw"
        className="d-block w-100"
        alt="TVS Apache"
        playing={true}
        loop={true}
      ></ReactPlayer>
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
                src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/May-also-Like/webp-images/5-BIKE-All-colours-1366-X-500px.webp"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/homepage/Gallery/webp-images/banner-hp-d-3.webp"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/homepage/Gallery/webp-images/banner-hp-d-5.webp"
                className="d-block w-100"
                alt="TVS Jupiter-img"
              ></img>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tvsmotor.com/tvs-apache/-/media/u400-launch/entrypoints/Apache-Banner-Desktop--1366x500.png"
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
    <h2 style={{textAlign:"center", marginBottom:"0px", fontSize:"42px", fontWeight:"700", marginLeft:"auto", marginRight:"auto", backgroundColor:"white"}}>APACHE RTR SERIES</h2>
    <div className="motorcycle">
                <div className="row" id="motorcycle">
                    <div className="card col-lg-6">
                        <img className="motorcycle-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_RTR-Series.png?h=64&w=128&la=en&hash=10AE4864459DCE8C6A056AC769542D6F" alt=""></img>
                        <h5>TVS Apache RTR 200 4V</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">200cc</li>
                            <li className="list-group-item">37kmpl</li>
                            <li className="list-group-item">152Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/Models/Apache/RTR2004V"> <img className="motorcycle-picture" src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/homepage/Apache-Series/2022/webp-images/RTR-200-4V-Blue---593-x-479-pix-new.webp" alt=""></img></Link>
                    </div>
                </div>
            <div className="row" id="motorcycle">
                <div className="card col-lg-6">
                <img className="motorcycle-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_RTR-Series.png?h=64&w=128&la=en&hash=10AE4864459DCE8C6A056AC769542D6F" alt=""></img>
                    <h5>TVS Apache RTR 180</h5>
                    <ul className="list-group list-group-horizontal-xxl">
                        <li className="list-group-item">180cc</li>
                        <li className="list-group-item">45kmpl</li>
                        <li className="list-group-item">139Kg</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <Link to="/Models/Apache/RTR180"><img className="motorcycle-picture" src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/08-09-22/webp-images/RTR-180.webp" alt=""></img></Link>
                </div>
            </div>
            <div className="row" id="motorcycle">
                <div className="card col-lg-6">
                <img className="motorcycle-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_RTR-Series.png?h=64&w=128&la=en&hash=10AE4864459DCE8C6A056AC769542D6F" alt=""></img>
                    <h5>TVS Apache RTR 160 4V</h5>
                    <ul className="list-group list-group-horizontal-xxl">
                        <li className="list-group-item">160cc</li>
                        <li className="list-group-item">40kmpl</li>
                        <li className="list-group-item">149Kg</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                   <Link to="/Models/Apache/RTR1604V"> <img className="motorcycle-picture" src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/homepage/Apache-Series/webp-images/Apache-160-4V---593-x-479-Pix---Slant-Male-Side-1.webp" alt=""></img></Link>
                </div>
            </div>
            <div className="row" id="motorcycle">
                <div className="card col-lg-6">
                <img className="motorcycle-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_RTR-Series.png?h=64&w=128&la=en&hash=10AE4864459DCE8C6A056AC769542D6F" alt=""></img>
                    <h5>TVS Apache RTR 160</h5>
                    <ul className="list-group list-group-horizontal-xxl">
                        <li className="list-group-item">160cc</li>
                        <li className="list-group-item">45+kmpl</li>
                        <li className="list-group-item">145Kg</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <Link to="/Models/Apache/RTR160"><img className="motorcycle-picture" src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160/08-09-22/webp-images/RTR-160.webp" alt=""></img></Link>
                </div>
            </div>
            
            
        </div>
      <Footer></Footer>
    </div>
  )
}

export default ApacheSeries
