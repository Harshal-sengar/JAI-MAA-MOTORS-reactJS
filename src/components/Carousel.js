import React from "react";

function Carousel()
{
    return (
        <section id="title" style={{backgraound:"white"}}>
      <div className="container-fluid" style={{padding:"0px"}}>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-pause="hover">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.tvsmotor.com/tvs-raider/-/media/Brand-Pages/TVS-Raider/24-05-2022/Desktop1.png " className="d-block w-100" alt="TVS rider-img"></img>
              <div className="carousel-caption d-none d-md-block">


              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.tvsmotor.com/-/media/Feature/Hero-Banner/IntelliGo_Desktop.jpg" className="d-block w-100" alt="TVS Jupiter-img"></img>
              <div className="carousel-caption d-none d-md-block">


              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/homepage/banner/2022/Website-creative---1366-x-500-Pix---Range.jpg" className="d-block w-100" alt="TVS Apache-img"></img>
              <div className="carousel-caption d-none d-md-block">


              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Slider/radeonaug15-D.jpg" className="d-block w-100" alt="Tvs Rider-img" />
              <div className="carousel-caption d-none d-md-block">


              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.tvsmotor.com/-/media/Feature/Hero-Banner/D-NtorQ-Range-KV-Social-Media_1366-x-600px-01.jpg" className="d-block w-100" alt="TVS Ntorq-img" />
              <div className="carousel-caption d-none d-md-block">


              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.tvsmotor.com/-/media/Feature/Hero-Banner/Coral-Silk---Static-Banner-1366-x-600px-01.jpg" className="d-block w-100" alt="TVS XL100-img" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Banner/tvs-sport-banner-3-eng-d.jpg" className="d-block w-100" alt="TVS Sport-img" />
              <div className="carousel-caption d-none d-md-block">


              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
    )
}
export default Carousel;