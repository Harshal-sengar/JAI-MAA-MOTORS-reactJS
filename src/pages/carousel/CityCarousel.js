import React from 'react'

const CityCarousel = () => {
  return (
    <div>
      <div className='features-sport'>
        <div className="carousel4">
        <h2 className='heading-features' style={{color:"white", paddingLeft:"0px"}}>~TVS STAR CITY PLUS FEATURES</h2>
        <div id="carousel4" class="carousel carousel4 carousel-dark slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel4"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel4"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel4"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel4"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel4"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
        
          </div>
          <div class="carousel-inner">
            <div class="carousel-item comfortks active">
              <img
                src="https://bd.gaadicdn.com/processedimages/tvs/tvs-star-city-plus/source/tvs-star-city-plus607d45518d795.jpg?imwidth=880"
                class="d-block responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h3>LED Headlamp</h3>
                <p >It Comes with a metallic bazel which enhances your style and is energy efficient(3x more brightness with 67% less power consumption)</p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://bd.gaadicdn.com/processedimages/tvs/tvs-star-city-plus/source/tvs-star-city-plus607d4552d293c.jpg?imwidth=880"
                class="d-block responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h3>ECO Thrust Engine</h3>
                <p>
                  Time Tested 110cc 'ECO Thrust' Engine makes TVS Star City plus one of the best mileage bikes in the segment while delivering a powerful performance
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://bd.gaadicdn.com/processedimages/tvs/tvs-star-city-plus/source/tvs-star-city-plus607d455423a99.jpg?imwidth=880"
                class="d-block responsive "
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h3>Premium Dual Tone Seat</h3>
                <p>
                  &emsp;&emsp;&emsp;The 'Dual Tone' seat with Premium rexin in TVS Star City enhances style and comfort
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://bd.gaadicdn.com/processedimages/tvs/tvs-star-city-plus/source/tvs-star-city-plus607d456bac7b6.jpg?imwidth=880"
                class="d-block responsive "
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h3> 5 Step Adjustable Shock Absorber</h3>
                <p>
                  &emsp;&emsp;&emsp;TVS Start City plus enhances a comfortable ride in all road conditions with its 5 step Adjustable hydraulic rear shock absorbers
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/113179/star-city-trip-meter.jpeg?isig=0&q=80&q=80&wm=2"
                class="d-block responsive "
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h3>Multi Function Console (With Econometer & Service Reminder)</h3>
                <p>
                  &emsp;&emsp;&emsp;Multi-Function Speedometer console with Econometer, Service Reminder & Malfunction Indicator.
                </p>
              </div>
            </div>
            
          </div>
          <button
            class="carousel-control-prev controller"
            type="button"
            data-bs-target="#carousel4"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next controller"
            type="button"
            data-bs-target="#carousel4"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CityCarousel
