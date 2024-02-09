import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import PipPlayer from './PipPlayer'
import Footer from '../../components/Footer'

import { useNavigate } from "react-router-dom";
const Rtr1604v = () => {

    const[imageSrc, setImageSrc]=useState("https://www.tvsmotor.com/tvs-apache/-/media/BookOnline-V2/Apache-RTR-1604V-new/1.webp");
    const[vname, setName]=useState("LIGHTNING BLUE")

    function changeToLightningBlue(){
        setImageSrc("https://www.tvsmotor.com/tvs-apache/-/media/BookOnline-V2/Apache-RTR-1604V-new/1.webp");
        setName("LIGHTNING BLUE")
    }
    function changeToMatteBlack()
    {
        setImageSrc("https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160-4V/Color/Matte-Black/webp-images/matte-black-tank-Tank---700-x-500-Pix.webp");
        setName("MATTE BLACK")
    }
    function changeToKnightBlack()
    {
        setImageSrc("https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160-4V/Color/black/webp-images/1.webp");
        setName("KNIGHT BLACK")
    }
    function changeToMetallicBlue()
    {
        setImageSrc("https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160-4V/Color/blue/webp-images/1.webp");
        setName("METALLIC BLUE")
    }
    function changeToRacingRed(){
        setImageSrc("https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160-4V/Color/red/webp-images/1.webp");
        setName("RACING RED")
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
        <img className='w-100' src='https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160-4V/Banner/8-dec/webp-images/Apache-160-4V---1366-x-500-Pix---25th-Nov1.webp' alt='1604v'></img>
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
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160-4V/Features/Performance/webp-images/Apache-160-4V-678-x-581-Pix-Digital-Speedometer-25th-Nov.webp"
                  class="d-block responsive"
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h3>RIDES MODES</h3>
                  <p style={{ paddingLeft: "50px" }}>
                  With just a press of a button, the first-in-segment ride modes enable you to adapt to any race condition.
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160-4V/Features/Performance/webp-images/Adjustable-Lever---678-x-581-Pix-2.webp"
                  class="d-block  responsive"
                  alt="..."
                />
                <div class="carousel-caption caption d-md-block">
                  <h3>Adjustable Levers (For Special Edition only)</h3>
                  <p>
                  Take your racing performance to the next level with the now standard 3-step adjustable brake and clutch levers
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160-4V/Features/Style/webp-images/style-160-4V-14102021.webp"
                  class="d-block  responsive"
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h3>AGGRESSIVE NEW HEADLAMP</h3>
                  <p>
                    &emsp;&emsp;&emsp;The new LED headlamp is designed to be an
                    intimidating statement of both aggression and functionality.
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160-4V/Features/Style/webp-images/Website-Req-180---678-x-581-Pix-Style-Aerodynamic-160-4V.webp"
                  class="d-block  responsive"
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h3>AERODYNAMIC CLAW MIRRORS</h3>
                  <p>
                    &emsp;&emsp;&emsp;The TVS Apache RTR 160 4V now comes with aggressively styled aerodynamic claw mirrors. Perfect for looking back at the competition as you pass them by.
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-apache/-/media/BookOnline-V2/Apache-RTR-1604V-new/Dual-Channel-ABS-Feature-Image-1.webp"
                  class="d-block  responsive"
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h3>Dual Channel ABS</h3>
                  <p>
                    &emsp;&emsp;&emsp;Control has never been this exhilarating, the Apache RTR 160 4V now comes equipped with technology to slice up the track. The Dual Channel ABS has been developed and tested on the track.
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
        
        <div className="rtr1604v-violet" onClick={changeToLightningBlue}></div>
        <div className="rtr1604v-matteblack" onClick={changeToMatteBlack}></div>
        <div className="rtr1604v-knightblack" onClick={changeToKnightBlack}></div>
        <div className="rtr1604v-blue" onClick={changeToMetallicBlue}></div>
        <div className="rtr1604v-red" onClick={changeToRacingRed}></div>
        <img id="image5" src={imageSrc} alt="2004vColors"></img>
        <p className='color-name'>{vname}</p>
      </div>
      {/* form */}
      <div className="colors" style={{ marginTop: "-55px" }}>
        <h2>BUY NOW</h2>
            <div className="row">
          <div className="col-sm-5 image">
            <img
              className="tvsimage"
              src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-160-4V/2022/webp-images/Website-creative---638-x-628-Pix---160-4V-Burnout.webp"
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
                  <option value="TVS Apache RTR 160 4V violet">Lightning Blue</option>
                  <option value="TVS Apache RTR 160 4V Matte Black">Matte Black</option>
                  <option value="TVS Apache RTR 160 4V Black">Knight Black</option>
                  <option value="TVS Apache RTR 160 4V Blue">Metallic Blue</option>
                  <option value="TVS Apache RTR 160 4V Red">Racing Red</option>
                  
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

export default Rtr1604v