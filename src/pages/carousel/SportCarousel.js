import React from 'react'


const SportCarousel = () => {
  return (
    <div className='features-sport'>
        <div className="carousel4">
        <h2 className='heading-features' style={{color:"white"}}>~TVS SPORT FEATURES</h2>
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
                src="https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Feature/mileage/optimized-image/2.png"
                class="d-block responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h3>Econometer</h3>
                <p style={{paddingLeft:"50px"}}>Patended advanced Technology enables you get "Best in Class Mileage"</p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Feature/comfort/optimized-images/2.png"
                class="d-block  responsive"
                alt="..."
              />
              <div class="carousel-caption caption d-md-block">
                <h3>5 Step Adjustable Hydraulic Shock Absorber (Rear)</h3>
                <p>
                  will make your bumpy rides comfortable
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Feature/style/optimized-images/4.png"
                class="d-block  responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h3>All-New Graphics and Sporty Design</h3>
                <p>
                  &emsp;&emsp;&emsp;Flowing  Graphics which gives modern urban look
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Feature/style/optimized-images/800X520.png"
                class="d-block  responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h3> New Self Start With Bold Looks</h3>
                <p>
                  &emsp;&emsp;&emsp;
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Feature/performance/optimized-images/2.png"
                class="d-block  responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h3>Long-life Duralife 110cc Engine</h3>
                <p>
                  &emsp;&emsp;&emsp;Reduces friction and ensures engine smoothness which increases life of engine
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
  )
}

export default SportCarousel
