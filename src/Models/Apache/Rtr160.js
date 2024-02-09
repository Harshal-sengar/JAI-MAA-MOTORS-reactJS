import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import PipPlayer from './PipPlayer'
import Footer from '../../components/Footer'
import "./Colors.css";

import { useNavigate } from "react-router-dom";

const Rtr160 = () => {
    const[imageSrc, setImageSrc]=useState("https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160/webp/color/Pearl-white/1.webp");

    function changeToWhite()
    {
        setImageSrc("https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160/webp/color/Pearl-white/1.webp");
    }
    function changeToBlack()
    {
        setImageSrc("https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160/webp/color/Gloss-Black/1.webp");
    }
    function changeToRed()
    {
        setImageSrc("https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160/webp/color/Racing-red/1.webp");
    }
    function changeToBlue()
    {
        setImageSrc("https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160/webp/color/Matte-blue/1.webp");
    }
    function changeToGrey()
    {
        setImageSrc("https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160/webp/color/T-grey/1.webp");
    }
        // form
        const navigate = useNavigate();
        const [user, setUser] = useState({
          name: "",
          mobileNumber: "",
          address: "",
          vehicle: "",
        });
      
        let name, value;
      
        const handleInputs = (e) => {
          name = e.target.name;
          value = e.target.value;
      
          setUser({ ...user, [name]: value });
        };
      
        const PostData = async (e) => {
          e.preventDefault();
      
          const { name, mobileNumber, address, vehicle } = user;
      
          const res = await fetch("/BookVehicle", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              mobileNumber,
              address,
              vehicle,
            }),
          });
          console.log(res);
          alert("Thanks For Booking. ");
          alert("We will contact you shortly");
          navigate("/");
        };
  return (
    <>
        <Navbar></Navbar>
        <img className='w-100' src='https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160/Banner/webp-images/TVS-Apache_Web-Banner-1366w-x-500h-px_V1.webp' alt='160'></img>
        <div className="features-sport">
        <div className="carousel4">
          <h2
            className="heading-features"
            style={{ color: "white", marginLeft: "0px" }}
          >
            ~FEATURES
          </h2>
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
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/APACHE-RTR-200-4V-1Ch-ABS/features/Smartxconnect/webp-images/connected.webp"
                  class="d-block responsive"
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h3>SMARTXONNECT TECHNOLOGY</h3>
                  <p style={{ paddingLeft: "50px" }}>
                    The cutting-edge Bluetooth enabled system offers up a range
                    of race analytics and data that allows any racer to review
                    their racing style and constantly improve it on the track.
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160/webp/feature/performance/TVSapache1002--flat.webp"
                  class="d-block  responsive"
                  alt="..."
                />
                <div class="carousel-caption caption d-md-block">
                  <h3>RTR OVER SQUARE ENGINE WITH RT - FI TECHNOLOGY</h3>
                  <p>
                  The all-new TVS Apache RTR 160 is powered by the BS-VI Race Tuned Fuel Injection (RT-Fi) technology with an improved power to 16.04PS.
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160/webp/feature/style/TVSapache1156-flat.webp"
                  class="d-block  responsive"
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h3>BEAST-INSPIRED LED HEADLAMPS</h3>
                  <p>
                    &emsp;&emsp;&emsp;The all-new LED Headlamp has been designed to deliver maximum luminosity.The intimidating design of the ‘Beast Eyes’ gets a contemporary twist.
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160/webp/feature/style/TVSapache1149-flat_.webp"
                  class="d-block  responsive"
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h3>LED TAIL LAMP</h3>
                  <p>
                    &emsp;&emsp;&emsp;The LED tail lamp has an imposing design, engineered to intimidate as you take the lead on the race track.
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160/webp/feature/style/TVSapache1013-Flat.webp"
                  class="d-block  responsive"
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h3>TANK SCOOPS</h3>
                  <p>
                    &emsp;&emsp;&emsp;In the heat of the race, the TVS Apache RTR is kept cool with the help of tank scoops. These are designed to channel cool air to the engine and circulate the warm air out
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
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next controller"
              type="button"
              data-bs-target="#carousel4"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* colors */}

      <div className="rtr2004v-colors" style={{marginTop:"-20px"}}>
        <h1 className="heading-features" style={{textAlign:"center"}}>~COLORS</h1>
        <img id="image3" src={imageSrc} alt="2004vColors"></img>
        <div className="rtr160-white" onClick={changeToWhite}><p className='rtr-color-name'>WHITE</p></div>
        
        <div className="rtr160-black" onClick={changeToBlack}><p className='moped-color-name'>BLACK</p></div>
        <div className="rtr160-blue" onClick={changeToBlue}><p className='moped-color-name'>BLUE</p></div>
        <div className="rtr160-red" onClick={changeToRed}><p className='rtr-color-name'>RED</p></div>
        <div className="rtr160-grey" onClick={changeToGrey}><p className='rtr-color-name'>GREY</p></div>
      </div>
      {/* form */}
      <div className="colors" style={{ marginTop: "-55px" }}>
        <h2>BUY NOW</h2>
            <div className="row">
          <div className="col-sm-5 image">
            <img
              className="tvsimage"
              src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160/webp/TVS-Apache_Mobile-Banner-628w-x-619h-px.webp"
              width="550px"
              alt=""
            />
          </div>
          <div className="col-sm-5 form">
            <div className="inside-form ">
              <h1 style={{ fontWeight: "bold" }}>Buy Online</h1>
              <p>To buy your vehicle, kindly fill your information below</p>
              <form method="POST">
                <input
                  required
                  className="input"
                  value={user.name}
                  type="text"
                  name="name"
                  placeholder="Name*"
                  aria-required="true"
                  onChange={handleInputs}
                />
                <br></br>
                <br></br>
                <input
                  required
                  className="input"
                  value={user.mobileNumber}
                  type="tel"
                  name="mobileNumber"
                  placeholder="Phone*"
                  aria-required="true"
                  onChange={handleInputs}
                />
                <br></br>
                <br></br>
                <input
                  required
                  className="input"
                  value={user.address}
                  type="text"
                  name="address"
                  placeholder="Address*"
                  aria-required="true"
                  onChange={handleInputs}
                />
                <br></br>
                <br></br>
                <select
                  className="input"
                  value={user.vehicle}
                  name="vehicle"
                  aria-required="true"
                  onChange={handleInputs}
                >
                  <option>Select Colors</option>
                  <option value="TVS Apache RTR 160 White">White</option>
                  <option value="TVS Apache RTR 160 Black">Black</option>
                  <option value="TVS Apache RTR 160 Blue">Blue</option>
                  <option value="TVS Apache RTR 160 Red">Red</option>
                  <option value="TVS Apache RTR 160 Grey">Grey</option>
                  
                </select>
                <input
                  type="checkbox"
                  className="checkbox"
                  id="terms&conditions"
                />
                <label for="terms&conditions" className="terms-conditions">
                  I accept the terms & conditions and authorise to Jai Maa
                  Motors to contact me via SMS, email, WhatsApp and other modes
                  of communication
                </label>
                {/* <input type="submit" role="button" onclick={thanks} className="btn-lg form-button" /> */}
                <button
                  type="submit"
                  onClick={PostData}
                  className="btn-lg form-button"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        </div>
        <PipPlayer></PipPlayer>
        <Footer></Footer>
    </>
  )
}

export default Rtr160