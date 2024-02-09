import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RadeonCarousel from "./carousel/RadeonCarousel";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "./Radeon.css";
import BacktoTopButton from "../components/BacktoTopButton";

const Radeon = () => {
  const [showCarousel1, setShowCarousel1] = useState(true);
  const [showCarousel2, setShowCarousel2] = useState(false);

  const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(false);

  const [buttonColor1, setButtonColor1] = useState(true);
  const [buttonColor2, setButtonColor2] = useState(false);

  const [showColor1, setColor1] = useState(true);
  const [showColor2, setColor2] = useState(false);

  const [imageSrc1, setImageSrc1] = useState(
    "https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Colours/DT-Blue-Black/07-07-2022/1.png"
  );
  const [radeonColorName, setRadeonColorName]=useState("BLACK BLUE");

  const [imageSrc2, setImageSrc2] = useState(
    "https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Colours/Regal-Blue/1.png"
  );
  const [radeonColorName2, setRadeonColorName2]=useState("BLUE");

  function changeToBlueBlack() {
    setImageSrc1(
      "https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Colours/DT-Blue-Black/07-07-2022/1.png"
    );
    setRadeonColorName("BLACK BLUE")
  }

  function changeToRedBlack() {
    setImageSrc1(
      "https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Colours/Red-Black/07-07-2022/1.png"
    );
    setRadeonColorName("BLACK RED");
  }

  function changeToBlack() {
    setImageSrc1(
      "https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Colours/New-Balck/1.png"
    );
    setRadeonColorName("BLACK");
  }

  function changeToBaseBlack() {
    setImageSrc2(
      "https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Colours/Metal-Black/1.png"
    );
    setRadeonColorName2("BLACK");
  }

  function changeToBaseBlue() {
    setImageSrc2(
      "https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Colours/Regal-Blue/1.png"
    );
    setRadeonColorName2("BLUE");
  }

  function changeToBasePurple() {
    setImageSrc2(
      "https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Colours/purple/1.png"
    );
    setRadeonColorName2("PURPLE");
  }

  function changeToBaseGrey() {
    setImageSrc2(
      "https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Colours/titanium-grey/1.png"
    );
    setRadeonColorName2("GREY");
  }

  const toggleCarousel1 = () => {
    setShowCarousel1(true);
    setShowCarousel2(false);
    setShowButton1(true);
    setShowButton2(false);
  };

  const toggleCarousel2 = () => {
    setShowCarousel1(false);
    setShowCarousel2(true);
    setShowButton1(false);
    setShowButton2(true);
  };

  const toggleColor1 = () => {
    setColor1(true);
    setColor2(false);
    setButtonColor1(true);
    setButtonColor2(false);
  };
  const toggleColor2 = () => {
    setColor1(false);
    setColor2(true);
    setButtonColor1(false);
    setButtonColor2(true);
  };

//form
const navigate = useNavigate();
const [user, setUser] = useState({
  name: "",
  mobileNumber: "",
  address: "",
  vehicle: "",
  vehicleColor: "",
});

// let name, value;

const handleInputs = (e) => {
  const { name, value } = e.target;
  setUser({ ...user, [name]: value });
};

const PostData = async (e) => {
  e.preventDefault();

  const { name, mobileNumber, address, vehicle, vehicleColor } = user;

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
      vehicleColor,
    }),
  });

  alert("Thanks For Booking. ");
  alert("We will contact you shortly");
  navigate("/");
};
  const getSecondSelectOptions = () => {
    if (user.vehicle === "TVS Radeon Digi Cluster edition") {
      return (
        <>
          <option>Select Colors </option>
          <option value="TVS Radeon Digi Cluster Edition blue-black">
            Blue-Black
          </option>
          <option value="TVS Radeon Digi Cluster Edition red-black">
            Red-Black
          </option>
          <option value="TVS Radeon Digi Cluster Edition Black">Black</option>
        </>
      );
    } else if (user.vehicle === "TVS Radeon base edition") {
      return (
        <>
          <option>Select Colors for Base Edition</option>
          <option value="TVS Radeon Base Edition blue">Blue</option>
          <option value="TVS Radeon Base Edition black">Black</option>
          <option value="TVS Radeon Base Edition purple">Purple</option>
          <option value="TVS Radeon Base Edition Grey">Grey</option>
        </>
      );
    } else {
      return <option>Select Colors</option>;
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <RadeonCarousel></RadeonCarousel>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/AdSection/15-07-2022/English/TVS-Radeon-Web-Banner-English_Website-Icon-w1520-x-h630.jpg"
          alt=""
        ></img>
      </div>
      {/* feature div */}

      <div className="features">
        <h1 className="heading-features features-radeon">~FEATURES</h1>
        <div>
          <div
            onClick={toggleCarousel1}
            className={`button1 ${
              showButton1 ? "show-features" : "not-show-features"
            }`}
          >
            DIGI CLUSTER EDITION
          </div>
          <div
            onClick={toggleCarousel2}
            className={`button2 ${
              showButton2 ? "show-features" : "not-show-features"
            }`}
          >
            BASE EDITION
          </div>
        </div>
        <div className={`carousel3 ${showCarousel1 ? "active" : "inactive"}`}>
          <div id="carousel2" class="carousel carousel3 carousel-dark slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carousel2"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel2"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel2"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel2"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel2"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel2"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Features/comfortnew/4.jpg"
                  class="d-block responsive "
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h4>Perfect Seat Height</h4>
                  <p>
                    &emsp;&emsp;&emsp;Apt seat height for a commanding posture.
                  </p>
                </div>
              </div>
              <div class="carousel-item  comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Features/Reverse/optimized-image/TVS-Radeon---Website-Image_REAL-TIME-MILEAGE-DISPLAY.jpg"
                  class="d-block responsive"
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h4>
                    <span style={{ color: "red" }}>Real</span> Time Mileage
                    Display
                  </h4>
                  <p>
                    Allows you to control your Mileage based on your riding
                    conditions.
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Features/Best/2.jpg"
                  class="d-block responsive"
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h4>Chrome bezel headlamp with DRL</h4>
                  <p>
                    Multi facet reflector with LED DRL for your safe journey
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Features/Best/4.jpg"
                  class="d-block responsive "
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h4>USB Charger</h4>
                  <p>
                    &emsp;&emsp;&emsp;stay connected. Charge your phone on the
                    GO.
                  </p>
                </div>
              </div>

              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Features/Reverse/optimized-image/TVS-Radeon---Website-Image_SERVICE-INDICATOR.jpg"
                  class="d-block responsive "
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h4>
                    <span style={{ color: "red" }}>Clock,</span>Service
                    Indicator
                  </h4>
                  <p>
                    &emsp;&emsp;&emsp;Never miss important meetings or service
                    schedule
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Features/Reverse/optimized-image/TVS-Radeon---Website-Image_LOW-FUEL-INDICATION.jpg"
                  class="d-block responsive "
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h4>
                    <span style={{ color: "red" }}>Low</span> Fuel Indication
                  </h4>
                  <p>
                    &emsp;&emsp;&emsp;Indicates to rush to your nearest petrol
                    bunk.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev controller"
              type="button"
              data-bs-target="#carousel2"
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
              data-bs-target="#carousel2"
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

        <div className={`carousel3 ${showCarousel2 ? "active" : "inactive"}`}>
          <div id="carousel3" class="carousel carousel3 carousel-dark slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carousel3"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel3"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel3"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel3"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carousel3"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item comfortks active">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Features/style/001.jpg"
                  class="d-block responsive"
                  alt="..."
                />
                <div class="carousel-caption caption d-md-block">
                  <h4>Study Metal Build With Chrome Ascent</h4>
                  <p>
                    Get a classic Look with solid build that stands the test of
                    time.
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Features/style/004.jpg"
                  class="d-block responsive"
                  alt="..."
                />
                <div class="carousel-caption caption d-md-block">
                  <h4>Car like Speedometer</h4>
                  <p>Chrome mounted Meter for your seamless ride.</p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Features/comfort/004.gif"
                  class="d-block responsive "
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h4>&emsp;Highest Ground Clearance & Longest Wheel Base.</h4>
                  <p>&emsp;&emsp;&emsp;Better Stability and Comfort.</p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Features/safety/002.jpg"
                  class="d-block responsive "
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h4>Side Stand Indicator With Beeper</h4>
                  <p>
                    &emsp;&emsp;&emsp;Smart Alert System reminds you to fold the
                    side stand before you hit the road.
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-radeon/-/media/Brand-Pages/Radeon/Features/safety/001.jpg"
                  class="d-block responsive "
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h4>Synchronized Braking Technology(SBT)</h4>
                  <p>
                    &emsp;&emsp;&emsp;Advanced braking ensuring shorter braking
                    distance.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev controller"
              type="button"
              data-bs-target="#carousel3"
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
              data-bs-target="#carousel3"
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

      {/* Colors div */}

      <div className="Colors">
        <h1 className="heading-features" style={{ color: "white" }}>
          ~COLORS
        </h1>
        <div className="features-button">
          <div
            onClick={toggleColor1}
            className={`button1 ${
              buttonColor1 ? "show-features" : "not-show-features"
            }`}
          >
            DIGI CLUSTER EDITION
          </div>
          <div
            onClick={toggleColor2}
            className={`button2 ${
              buttonColor2 ? "show-features" : "not-show-features"
            }`}
          >
            BASE EDITION
          </div>
        </div>
        <div className={` Color ${showColor1 ? "active" : "inactive"}`}>
          <div className="blue-black" onClick={changeToBlueBlack}></div>
          <div className="red-black" onClick={changeToRedBlack}></div>
          <div className="Black" onClick={changeToBlack}></div>
          <img id="image1" src={imageSrc1} alt="win brown" />
          <p className="radeon-color-name">{radeonColorName}</p>
        </div>
        <div className={` Color ${showColor2 ? "active" : "inactive"}`}>
          <div className="base-blue" onClick={changeToBaseBlue}></div>
          <div className="base-black" onClick={changeToBaseBlack}></div>
          <div className="base-purple" onClick={changeToBasePurple}></div>
          <div className="base-grey" onClick={changeToBaseGrey}></div>
          <img id="image4" src={imageSrc2} alt="win brown" />
          <p className="radeon-color-name2">{radeonColorName2}</p>
        </div>
      </div>

      {/* form */}
      <div className="colors">
        <h2>BUY NOW</h2>

        <div className="row">
          <div className="col-sm-5 image">
            <img
              className="tvsimage"
              src="https://www.tvsmotor.com/-/media/Brand-Pages/Radeon/22-09-23/RadeonImages/book-a-test.jpg?sc_lang=en"
              width="550px"
              alt=""
            />
          </div>
          <div className="col-sm-5 form">
            <div className="inside-form ">
              <h1 style={{ fontWeight: "bold" }}>Buy Online</h1>
              <p>To buy your vehicle, kindly fill your information below</p>
              <form  method="POST">
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
                  required="true"
                >
                  <option>Select Model</option>
                  <option value="TVS Radeon Digi Cluster edition">
                    Digi Cluster Edition
                  </option>
                  <option value="TVS Radeon base edition">Base Edition</option>
                </select>

                <br></br>
                <br></br>
                <select
                  className="input"
                  value={user.vehicleColor}
                  name="vehicleColor"
                  aria-required="true"
                  onChange={handleInputs}
                  required="true"
                >
                  {getSecondSelectOptions()}
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
        <br />
        <br />
      </div>
      <Footer></Footer>
      <BacktoTopButton></BacktoTopButton>
    </div>
  );
};

export default Radeon;
