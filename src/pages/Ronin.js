import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
import "./Ronin.css";
import { useNavigate } from "react-router-dom";

const Ronin = () => {
  // varients
  const [RoninTd, setRoninTD] = useState(true);
  const [colorButton1, setColorButton1] = useState(true);

  const [RoninDs, setRoninDS] = useState(false);
  const [colorButton2, setColorButton2] = useState(false);

  const [RoninSs, setRoninSS] = useState(false);
  const [colorButton3, setColorButton3] = useState(false);

  function RoninTD() {
    setRoninTD(true);
    setColorButton1(true);

    setRoninDS(false);
    setColorButton2(false);
    setRoninSS(false);
    setColorButton3(false);
  }

  function RoninDS() {
    setRoninTD(false);
    setColorButton1(false);

    setRoninDS(true);
    setColorButton2(true);

    setRoninSS(false);
    setColorButton3(false);
  }

  function RoninSS() {
    setRoninTD(false);
    setColorButton1(false);
    setRoninDS(false);
    setColorButton2(false);

    setRoninSS(true);
    setColorButton3(true);
  }

  const [RoninImage1, setRoninImage1] = useState(
    "https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/Logos/td-black.png"
  );
  const [roninColorName, setRoninColorName]=useState("Grey");

  function changeToGreyTD() {
    setRoninImage1(
      "https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/Logos/td-black.png"
    );
    setRoninColorName("Grey");
  }
  function changeToOrageTD() {
    setRoninImage1(
      "https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/Logos/td-orange.png"
    );
    setRoninColorName("Orange")
  }

  const [RoninImage2, setRoninImage2] = useState(
    "https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/Logos/ds-blue.png"
  );
  const [roninColorName2, setRoninColorName2]=useState("Blue")

  function changeToBlueDS() {
    setRoninImage2(
      "https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/Logos/ds-blue.png"
    );
    setRoninColorName2("Blue");
  }
  function changeToBlackDS() {
    setRoninImage2(
      "https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/Logos/ds-black.png"
    );
    setRoninColorName2("Black")
  }

  const [RoninImage3, setRoninImage3] = useState(
    "https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/Logos/ss-red.png"
  );
  const [roninColorName3, setRoninColorName3]=useState("Red")

  function changeToRedSS() {
    setRoninImage3(
      "https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/Logos/ss-red.png"
    );
    setRoninColorName3("Red");
  }
  function changeToBlackSS() {
    setRoninImage3(
      "https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/Logos/ss-black.png"
    );
    setRoninColorName3("Black")
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
      if (user.vehicle === "TVS Ronin TD") {
        return (
          <>
            <option>Select Colors For Ronin TD</option>
            <option value="TVS Ronin TD Black">Black</option>
            <option value="TVS Ronin TD Orange">Orange</option>
          </>
        );
      } else if (user.vehicle === "TVS Ronin DS") {
        return (
          <>
            <option>Select Colors For Ronin DS </option>
            <option value="TVS Ronin DS Blue">Blue</option>
            <option value="TVS Ronin DS Black">Black</option>
          </>
        );
      }  else if (user.vehicle === "TVS Ronin SS") {
        return (
          <>
            <option>Select Colors </option>
            <option value="TVS Ronin SS Red">Red</option>
            <option value="TVS Ronin SS Black">Black</option>
          </>
        );
      } else {
        return <option>Select Colors</option>;
      }
    };

  return (
    <>
      <div>
        <Navbar></Navbar>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=v27GbJ25KAk"
          className="d-block w-100 "
          alt="TVS Raider"
          loop={true}
          playing={true}
          width="100%"
        ></ReactPlayer>
        {/* features */}
        <div className="ronin-feartures" >
          <h1
            className="heading-features ronin-heading"
          >
            ~FEATURES
          </h1>
          <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
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
            <div class="carousel-inner">
              <div class="carousel-item active carousel_item">
                <div class="row">
                  <div class="col-md-12">
                    <h2 class="ronin-features-heading">DISTINCT STYLING</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <img
                      src="https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/OneDrive_1_6-1-2023/Features-Page-Final-Jpegs/Features-Page-Final-Jpegs/Distinct-Styling/AP-Test-Ride-Page-Distinct-Styling-01.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-4">
                    <img
                      src="https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/OneDrive_1_6-1-2023/Features-Page-Final-Jpegs/Features-Page-Final-Jpegs/Distinct-Styling/AP-Test-Ride-Page-Distinct-Styling-02.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-4">
                    <img
                      src="https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/OneDrive_1_6-1-2023/Features-Page-Final-Jpegs/Features-Page-Final-Jpegs/Distinct-Styling/AP-Test-Ride-Page-Distinct-Styling-03.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>

              <div class="carousel-item carousel_item">
                <div class="row">
                  <div class="col-md-12">
                    <h2 class="ronin-features-heading">TECHNOLOGY</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <img
                      src="https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/OneDrive_1_6-1-2023/Features-Page-Final-Jpegs/Features-Page-Final-Jpegs/Technology/AP-Test-Ride-Page-Technology-01.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-4">
                    <img
                      src="https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/OneDrive_1_6-1-2023/Features-Page-Final-Jpegs/Features-Page-Final-Jpegs/Technology/AP-Test-Ride-Page-Technology-02.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-4">
                    <img
                      src="https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/OneDrive_1_6-1-2023/Features-Page-Final-Jpegs/Features-Page-Final-Jpegs/Technology/AP-Test-Ride-Page-Technology-03.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>

              <div class="carousel-item carousel_item">
                <div class="row">
                  <div class="col-md-12">
                    <h2 class="ronin-features-heading">RIDE AND COMFORT</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <img
                      src="https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/OneDrive_1_6-1-2023/Features-Page-Final-Jpegs/Features-Page-Final-Jpegs/Ride--Comfort/APTest-Ride-PageRideComfort01.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-4">
                    <img
                      src="https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/OneDrive_1_6-1-2023/Features-Page-Final-Jpegs/Features-Page-Final-Jpegs/Ride--Comfort/APTest-Ride-PageRideComfort02.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-4">
                    <img
                      src="https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/OneDrive_1_6-1-2023/Features-Page-Final-Jpegs/Features-Page-Final-Jpegs/Ride--Comfort/APTest-Ride-PageRideComfort03.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>

              <div class="carousel-item carousel_item">
                <div class="row">
                  <div class="col-md-12">
                    <h2 class="ronin-features-heading">CONNECTIVITY</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <img
                      src="https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/OneDrive_1_6-1-2023/Features-Page-Final-Jpegs/Features-Page-Final-Jpegs/Connectivity/AP-Test-Ride-Page-1-05.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-4">
                    <img
                      src="https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/OneDrive_1_6-1-2023/Features-Page-Final-Jpegs/Features-Page-Final-Jpegs/Connectivity/AP-Test-Ride-Page-1-06.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-4">
                    <img
                      src="https://www.tvsmotor.com/-/media/TVSv2/Testride-Ronin/OneDrive_1_6-1-2023/Features-Page-Final-Jpegs/Features-Page-Final-Jpegs/Connectivity/AP-Test-Ride-Page-1-07.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
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

        {/* colors */}
        <div style={{ backgroundColor: "white", marginTop: "-34px" }}>
          <h1
            className="heading-features"
            style={{ color: "black", marginTop: "0px" }}
          >
            ~VARIENTS
          </h1>
          <div className="ronin-colors-buttons">
            <button
              onClick={RoninTD}
              className={`ronin-varients ${
                RoninTd ? "show-ronin-colors" : "not-show-ronin-color"
              }`}
            >
              TVS Ronin TD
            </button>
            <button
              onClick={RoninDS}
              className={`ronin-varients ${
                RoninDs ? "show-ronin-colors" : "not-show-ronin-color"
              }`}
            >
              TVS Ronin DS
            </button>
            <button
              onClick={RoninSS}
              className={`ronin-varients ${
                RoninSs ? "show-ronin-colors" : "not-show-ronin-color"
              }`}
            >
              TVS Ronin SS
            </button>
          </div>
          <div
            className={`ronin-Color ${colorButton1 ? "active" : "inactive"}`}
          >
            <div className="ronin-greyTD" onClick={changeToGreyTD}></div>
            <div className="ronin-oragneTD" onClick={changeToOrageTD}></div>
            <img id="ronin-image" src={RoninImage1} alt=""></img>
            <p className="ronin-color-name">{roninColorName}</p>
          </div>
          <div
            className={`ronin-Color ${colorButton2 ? "active" : "inactive"}`}
          >
            <div className="ronin-blueDS" onClick={changeToBlueDS}></div>
            <div className="ronin-blackDS" onClick={changeToBlackDS}></div>
            <img id="ronin-image" src={RoninImage2} alt=""></img>
            <p className="ronin-color-name">{roninColorName2}</p>
          </div>
          <div
            className={`ronin-Color ${colorButton3 ? "active" : "inactive"}`}
          >
            <div
              onClick={changeToRedSS}
              className="ronin-redSS"
            ></div>
            <div
              onClick={changeToBlackSS}
              className="ronin-blackSS"
            ></div>
            <img id="ronin-image" src={RoninImage3} alt=""></img>
            <p className="ronin-color-name">{roninColorName3}</p>
          </div>
        </div>

        {/* form */}
      <div className="colors" style={{ marginTop: "-55px" }}>
        <h2>BUY NOW</h2>
        <div className="row">
          <div className="col-sm-5 image">
            <img
              className="tvsimage"
              src="https://www.tvsmotor.com/tvs-ronin/-/media/U368Media/Images/LandingPage/Gallery/gallery/gallery-1.jpg"
             
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
                  <option value="TVS Ronin TD">
                    Ronin TD
                  </option>
                  <option value="TVS Ronin DS">
                    Ronin DS
                  </option>
                  <option value="TVS Ronin SS">Ronin SS</option>
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
      </div>
    </>
  );
};

export default Ronin;
