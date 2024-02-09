import React, { useState } from "react";
import Footer from "../../components/Footer";
import PipPlayer from "./PipPlayer";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
const Rtr180 = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/28-11-22/Tank-Scoops/White/webp-images/1.webp"
  );

  function changeToWhite() {
    setImageSrc(
      "https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/28-11-22/Tank-Scoops/White/webp-images/1.webp"
    );
  }
  function changeToBlack() {
    setImageSrc(
      "https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/28-11-22/Tank-Scoops/Black/webp-images/180---682-x-397-Pix-Tank-Black.webp"
    );
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
      <img
        className="w-100"
        src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/08-09-22/webp-images/TVS-Apache-180_Web-Banner-1366w-x-500h-px.webp"
        alt="rtr 180"
      ></img>
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
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/28-11-22/webp-images/SmartXonnect-SLide.webp"
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
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/28-11-22/webp-images/SmartXonnect-SLide.webp"
                  class="d-block  responsive"
                  alt="..."
                />
                <div class="carousel-caption caption d-md-block">
                  <h3>MIG SUSPENSION</h3>
                  <p>
                    The rear monotube inverted gas filled 5 step adjustable
                    shocks with a rectangular swingarm, enables the perfect
                    synergy of cornering aggression and agility.
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/08-09-22/webp-images/New-race.webp"
                  class="d-block  responsive"
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h3>RACE ERGONOMICS</h3>
                  <p>
                    &emsp;&emsp;&emsp;The racer is now in complete control, with
                    split clip on handle bars, a brake pedal and gear lever. The
                    ergonomics are designed to make the racer feel like one with
                    the track machine.
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/Features/Style/webp-images/Led-Tail-lamp.webp"
                  class="d-block  responsive"
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h3>LED TAIL LAMPS</h3>
                  <p>
                    &emsp;&emsp;&emsp;The LED tail lamp has an imposing design,
                    engineered to intimidate as you take the lead on the race
                    track.
                  </p>
                </div>
              </div>
              <div class="carousel-item comfortks">
                <img
                  src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/Features/Safety/webp-images/beast.webp"
                  class="d-block  responsive"
                  alt="..."
                />
                <div class="carousel-caption caption  d-md-block">
                  <h3>BEAST-INSPIRED LED HEADLAMPS</h3>
                  <p>
                    &emsp;&emsp;&emsp;The LED light guide in the headlamp panel
                    coalesces with the pilot lamps and produces an intense, raw,
                    animalistic gaze, being Apache's signature.
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

      <div className="rtr2004v-colors" style={{ marginTop: "-20px" }}>
        <h1 className="heading-features" style={{ textAlign: "center" }}>
          ~COLORS
        </h1>
        <img id="image3" src={imageSrc} alt="2004vColors"></img>
        <div className="rtr180-black" onClick={changeToBlack}>
          <p className="moped-color-name">BLACK</p>
        </div>
        <div className="rtr180-white" onClick={changeToWhite}>
          <p className="rtr-color-name">WHITE</p>
        </div>
      </div>
      {/* form */}
      <div className="colors" style={{ marginTop: "-55px" }}>
        <h2>BUY NOW</h2>
        <div className="row">
          <div className="col-sm-5 image">
            <img
              className="tvsimage"
              src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/08-09-22/webp-images/TVS-Apache-180_Mobile-Banner-628w-x-619h-px.webp"
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

                  <option value="TVS Apache RTR 180 White">White</option>
                  <option value="TVS Apache RTR 180 Black">Black</option>
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
  );
};

export default Rtr180;
