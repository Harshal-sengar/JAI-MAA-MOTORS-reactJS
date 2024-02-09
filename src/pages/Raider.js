import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ReactPlayer from "react-player";
import "./Raider.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Raider = () => {
  const [showVideo1, setVideo1] = useState(true);
  const [showButton1, setButton1] = useState(true);

  const [showVideo2, setVideo2] = useState(false);
  const [showButton2, setButton2] = useState(false);

  const [slideVideo1, setSlideVideo1] = useState(true);
  const [slideButton1, setSlideButton1] = useState(true);

  const [slideVideo2, setSlideVideo2] = useState(false);
  const [slideButton2, setSlideButton2] = useState(false);

  function toggleVideo1() {
    setVideo1(true);
    setButton1(true);
    setVideo2(false);
    setButton2(false);
  }
  function toggleVideo2() {
    setVideo1(false);
    setButton1(false);
    setVideo2(true);
    setButton2(true);
  }
  function toggleSlide1() {
    setSlideVideo1(true);
    setSlideButton1(true);
    setSlideVideo2(false);
    setSlideButton2(false);
  }
  function toggleSlide2() {
    setSlideVideo1(false);
    setSlideButton1(false);
    setSlideVideo2(true);
    setSlideButton2(true);
  }

  // varients
  const [smartXonnect, setSmartXonnect] = useState(true);
  const [colorButton1, setColorButton1] = useState(true);

  const [SSE, setSSE] = useState(false);
  const [colorButton2, setColorButton2] = useState(false);

  const [splitSeat, setSplitSeat] = useState(false);
  const [colorButton3, setColorButton3] = useState(false);

  const [singleSeat, setSingleSeat] = useState(false);
  const [colorButton4, setColorButton4] = useState(false);

  function SmartXonnect() {
    setSmartXonnect(true);
    setColorButton1(true);

    setSSE(false);
    setColorButton2(false);
    setSplitSeat(false);
    setColorButton3(false);
    setSingleSeat(false);
    setColorButton4(false);
  }

  function SSEdition() {
    setSmartXonnect(false);
    setColorButton1(false);

    setSSE(true);
    setColorButton2(true);

    setSplitSeat(false);
    setColorButton3(false);
    setSingleSeat(false);
    setColorButton4(false);
  }

  function SplitSeat() {
    setSmartXonnect(false);
    setColorButton1(false);
    setSSE(false);
    setColorButton2(false);

    setSplitSeat(true);
    setColorButton3(true);

    setSingleSeat(false);
    setColorButton4(false);
  }

  function SingleSeat() {
    setSmartXonnect(false);
    setColorButton1(false);
    setSSE(false);
    setColorButton2(false);
    setSplitSeat(false);
    setColorButton3(false);

    setSingleSeat(true);
    setColorButton4(true);
  }

  const [RaiderImage1, setRaiderImage1] = useState(
    "https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/Yellow-Xonnect/webp-images/1.webp"
  );
  const [raiderColorName, setRaiderColorName]=useState("Yellow")

  function changeToYellowSX() {
    setRaiderImage1(
      "https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/Yellow-Xonnect/webp-images/1.webp"
    );
    setRaiderColorName("Yellow");
  }

  function changeToBlackSX() {
    setRaiderImage1(
      "	https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/Black-Xonnect/webp-images/1.webp"
    );
    setRaiderColorName("Black")
  }

  const [RaiderImage2, setRaiderImage2] = useState(
    "https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/SSE/Black-panther/360-degree-sec_BP---769-X-554-PNG/1.webp"
  );
  const [raiderColorName2, setRaiderColorName2]=useState("Black")

  function changeToSSEBlack() {
    setRaiderImage2(
      "	https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/SSE/Black-panther/360-degree-sec_BP---769-X-554-PNG/1.webp"
    );
    setRaiderColorName2("Black")
  }

  function changeToSSERed() {
    setRaiderImage2(
      "https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/SSE/Iron-man/360-degree-sec_IM--769-X-554-PNG/1.webp"
    );
    setRaiderColorName2("Red");
  }

  const [RaiderImage3, setRaiderImage3] = useState(
    "	https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/Bike_Yellow/webp-images/1.webp"
  );
  const [raiderColorName3, setRaiderColorName3]=useState("Yellow");

  function changeToSplitSYellow() {
    setRaiderImage3(
      "	https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/Bike_Yellow/webp-images/1.webp"
    );
    setRaiderColorName3("Yellow");
  }

  function changeToSplitSBlue() {
    setRaiderImage3(
      "https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/bike-blue/webp-images-new/1.webp"
    );
    setRaiderColorName3("Blue");
  }

  function changeToSplitSRed() {
    setRaiderImage3(
      "https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/bike-red/webp-images/1.webp"
    );
    setRaiderColorName3("Red");
  }

  function changeToSplitSBlack() {
    setRaiderImage3(
      "https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/bike-black/webp-images/1.webp"
    );
    setRaiderColorName3("Black");
  }

  const [RaiderImage4, setRaiderImage4] = useState(
    "https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/Red/new-red/1.webp"
  );
  const [raiderColorName4, setRaiderColorName4]=useState("Red");

  function changeToSingleSRed() {
    setRaiderImage4(
      "https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/Red/new-red/1.webp"
    );
    setRaiderColorName4("Red");
  }

  function changeToSingleSBlack() {
    setRaiderImage4(
      "https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/360View/new-black-SS/PNG-769-X-554/PNG-769-X-554/1.webp"
    );
    setRaiderColorName4("Black");
  }

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
    if (user.vehicle === "TVS Raider smartxonnect") {
      return (
        <>
          <option>Select Colors </option>
          <option value="TVS Raider smartxonnect yellow">Yellow</option>
          <option value="TVS Raider smartxonnect black">Black</option>
        </>
      );
    } else if (user.vehicle === "TVS Raider Super Squard Edition") {
      return (
        <>
          <option>Select Colors </option>
          <option value="TVS Raider Super Squard Edition black">Black</option>
          <option value="TVS Raider Super Squard Edition red">Red</option>
        </>
      );
    } else if (user.vehicle === "TVS Raider Split Seat") {
      return (
        <>
          <option>Select Colors </option>
          <option value="TVS Raider Split Seat yellow">Yellow</option>
          <option value="TVS Raider Split Seat Blue">Blue</option>
          <option value="TVS Raider Split Seat Red">Red</option>
          <option value="TVS Raider Split Seat black">Black</option>
        </>
      );
    } else if (user.vehicle === "TVS Raider Single Seat") {
      return (
        <>
          <option>Select Colors </option>
          <option value="TVS Raider Single Seat Red">Red</option>
          <option value="TVS Raider Single Seat black">Black</option>
        </>
      );
    } else {
      return <option>Select Colors</option>;
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=lTVnMHxznJc"
        className="d-block w-100 "
        alt="TVS Raider"
        loop={true}
        playing={true}
      ></ReactPlayer>
      <div className="raider-features">
        <h1 className="heading-features" style={{ color: "white" }}>
          ~FEATURES
        </h1>
        <div className="features-video">
          <div
            onClick={toggleVideo1}
            className={`button3 ${
              showButton1 ? "show-raider-feature" : "not-show-raider-feature"
            }`}
          >
            SmartXonnect
          </div>
          <div
            onClick={toggleVideo2}
            className={`button4 ${
              showButton2 ? "show-raider-feature" : "not-show-raider-feature"
            }`}
          >
            Split Seat
          </div>
        </div>
        <div className={`raiderVideo1  ${showVideo1 ? "active" : "inactive"}`}>
          {/* Use ReactPlayer to display videos */}
          <ReactPlayer
            url="https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/Performance/smartXonnect/preprodOptimizedVideos/TVS_raider-Desktop-1812-X-1076-revised.mp4"
            alt=""
            playing={true} // Added playing prop
            loop={true}
          />
          <ul className="raider-feature">
            <li>Your wicked rider blended with raw street style.</li>
            <li>Unparalleled connected experience with smartXonnect</li>
            <li>
              Wicked and powerful unique 3-Valve 125cc engine with ISG
              generating 8.28 Kw @ 7500 rpm.
            </li>
            <li>
              5 step adjustable mono suspension providing stable & comfort ride.
            </li>
            <li>
              Wicked keeps what wicked needs with first-in-category under-Seat
              Storage
            </li>
          </ul>
        </div>
        <div className={`raiderVideo1 ${showVideo2 ? "active" : "inactive"}`}>
          {/* Use ReactPlayer to display videos */}
          <ReactPlayer
            url="https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Carousel/Corporate/Video/performancedd"
            alt=""
            playing={true} // Added playing prop
            loop={true}
          />
          <ul className="raider-feature">
            <li>Your wicked rider blended with raw street style.</li>
            <li>
              Reverse multicolor LCD digital speedometer for daylight display.
            </li>
            <li>
              Wicked and powerful unique 3-Valve 125cc engine with ISG
              generating 8.28 Kw @ 7500 rpm.
            </li>
            <li>
              5 step adjustable mono suspension providing stable & comfort ride.
            </li>
            <li>
              Worry-free rides and impeccable safety with 240mm roto petal disc
              brakes.
            </li>
          </ul>
        </div>
        {/* slide-features */}
        <div id="slide-features">
          <h5 className="slide-features" style={{ color: "white" }}>
            Bike crafted for the wicked you
          </h5>
          <div className="features-video">
            <div
              onClick={toggleSlide1}
              className={`button3 ${
                slideVideo1 ? "show-raider-feature" : "not-show-raider-feature"
              }`}
            >
              SmartXonnect
            </div>
            <div
              onClick={toggleSlide2}
              className={`button4 ${
                slideVideo2 ? "show-raider-feature" : "not-show-raider-feature"
              }`}
            >
              Split Seat
            </div>
          </div>
          <div
            className={`raider-feat ${slideButton1 ? "active" : "inactive"}`}
          >
            <div
              style={{
                backgroundImage:
                  "url('https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/Specifications/panaromic-swipe-action-slower-570x480.gif')",
              }}
            >
              <div className="content">
                <h4>SPORTY</h4>
                <p>
                  A wicked on-road presence with absolutely unique and bold
                  design with strong and sculpted tank profile
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url('https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/Specifications/SmartXonnect/TFT-Display.gif')",
              }}
            >
              <div className="content">
                <h4>SMARTXONNECT WITH TFT CONSOLE</h4>
                <p>
                  Bluetooth connectivity with TVS smartXonnect through TVS
                  connect App
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url('https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/Specifications/Switch-Action-Eco-Power-570x480.gif')",
              }}
            >
              <div className="content">
                <h4>FIRST IN SEGMENT</h4>
                <p>
                  Choose your riding modes as per your mood <br></br>ECO: High
                  mileage and optimum power<br></br> POWER: Heigher pickup and
                  Top speed.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url('https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/Specifications/Engine-Zoom-out_570x480.gif')",
              }}
            >
              <div className="content">
                <h4>BEST IN CLASS</h4>
                <p>
                  A leap in technology for best in class power & instant pick up
                </p>
              </div>
            </div>
          </div>
          <div
            className={`raider-feat ${slideButton2 ? "active" : "inactive"}`}
          >
            <div
              style={{
                backgroundImage:
                  "url('https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/Specifications/panaromic-swipe-action-slower-570x480.gif')",
              }}
            >
              <div className="content">
                <h4>SPORTY</h4>
                <p>
                  A wicked on-road presence with absolutely unique and bold
                  design with strong and sculpted tank profile
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url('https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/Specifications/Welcome-Swipe-570x480.gif')",
              }}
            >
              <div className="content">
                <h4>REVERSE LED DIGITAL CONSOLE</h4>
                <p>
                  An all new reverse LCD speedometer with ride modes is an
                  advanced hi-tech gadget with accurate and easy to read
                  details.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url('https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/Specifications/Switch-Action-Eco-Power-570x480.gif')",
              }}
            >
              <div className="content">
                <h4>FIRST IN SEGMENT</h4>
                <p>
                  Choose your riding modes as per your mood <br></br>ECO: High
                  mileage and optimum power<br></br> POWER: Heigher pickup and
                  Top speed.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url('https://www.tvsmotor.com/tvs-raider/-/media/TVSv2/Brand-Pages/Raider2/Specifications/Engine-Zoom-out_570x480.gif')",
              }}
            >
              <div className="content">
                <h4>BEST IN CLASS</h4>
                <p>
                  A leap in technology for best in class power & instant pick up
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* colors */}

      <div className="raider-colors">
        <h1 className="heading-features" style={{ marginTop: "0px" }}>
          ~VARIENTS
        </h1>
        <div className="colors-buttons">
          <button
            onClick={SmartXonnect}
            className={`raider-varients ${
              smartXonnect ? "show-raider-color" : "not-show-raider-color"
            }`}
          >
            SMARTXONNECT
          </button>
          <button
            onClick={SSEdition}
            className={`raider-varients ${
              SSE ? "show-raider-color" : "not-show-raider-color"
            }`}
          >
            SUPER SQUARD EDITION
          </button>
          <button
            onClick={SplitSeat}
            className={`raider-varients ${
              splitSeat ? "show-raider-color" : "not-show-raider-color"
            }`}
          >
            SPLIT SEAT
          </button>
          <button
            onClick={SingleSeat}
            className={`raider-varients ${
              singleSeat ? "show-raider-color" : "not-show-raider-color"
            }`}
          >
            SINGLE SEAT
          </button>
        </div>
        <div className="varients-bg">
          <div
            className={`raider-Color ${colorButton1 ? "active" : "inactive"}`}
          >
            <div className="raider-yellow" onClick={changeToYellowSX}></div>
            <div className="raider-black" onClick={changeToBlackSX}></div>
            <img id="raider-color" src={RaiderImage1} alt=""></img>
            <p className="raider-color-name">{raiderColorName}</p>
          </div>
          <div
            className={`raider-Color ${colorButton2 ? "active" : "inactive"}`}
          >
            <div className="raider-sse-black" onClick={changeToSSEBlack}></div>
            <div className="raider-sse-red" onClick={changeToSSERed}></div>
            <img id="raider-color" src={RaiderImage2} alt=""></img>
            <p className="raider-color-name">{raiderColorName2}</p>
          </div>
          <div
            className={`raider-Color ${colorButton3 ? "active" : "inactive"}`}
          >
            <div
              onClick={changeToSplitSYellow}
              className="raider-split-seat-yellow"
            ></div>
            <div
              onClick={changeToSplitSBlue}
              className="raider-split-seat-blue"
            ></div>
            <div
              onClick={changeToSplitSRed}
              className="raider-split-seat-red"
            ></div>
            <div
              onClick={changeToSplitSBlack}
              className="raider-split-seat-black"
            ></div>
            <img id="raider-color" src={RaiderImage3} alt=""></img>
            <p className="raider-color-name">{raiderColorName3}</p>
          </div>
          <div
            className={`raider-Color ${colorButton4 ? "active" : "inactive"}`}
          >
            <div
              onClick={changeToSingleSRed}
              className="raider-single-seat-red"
            ></div>
            <div
              onClick={changeToSingleSBlack}
              className="raider-single-seat-black"
            ></div>
            <img id="raider-color" src={RaiderImage4} alt=""></img>
            <p className="raider-color-name">{raiderColorName4}</p>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="colors" style={{ marginTop: "-55px" }}>
        <h2>BUY NOW</h2>
        <div className="row">
          <div className="col-sm-5 image">
            <img
              className="tvsimage"
              src="https://www.tvsmotor.com/assets/img/raider_Book_Test_ride20210916.jpg"
             
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
                  required="true"
                >
                  <option>Select Model</option>
                  <option value="TVS Raider smartxonnect">
                    
                    SmartXonnect
                  </option>
                  <option value="TVS Raider Super Squard Edition">
                    Super Squard Edition
                  </option>
                  <option value="TVS Raider Split Seat">Split Seat</option>
                  <option value="TVS Raider Single Seat">Single Seat</option>
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
    </>
  );
};

export default Raider;
