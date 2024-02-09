import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BacktoTopButton from '../../components/BacktoTopButton'

const Jupiter = () => {

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
    if (user.vehicle === "TVS Jupiter SMW") {
      return (
        <>
          <option>Select Colors </option>
          <option value="TVS Jupiter SMW Metallic Titanium Grey">
            Grey
          </option>
          <option value="TVS Jupiter SMW White">
            White
          </option>
          <option value="TVS Jupiter SMW Metallic Blue">Blue</option>
        </>
      );
    } else if (user.vehicle === "TVS Jupiter") {
      return (
        <>
          <option>Select Colors</option>
          <option value="TVS Jupiter Blue">Blue</option>
          <option value="TVS Jupiter Black">Black</option>
          <option value="TVS Jupiter White">White</option>
          <option value="TVS Jupiter Grey">Grey</option>
          <option value="TVS Jupiter Red">Red</option>
          <option value="TVS Jupiter Brown">Brown</option>
        </>
      );
    } else {
      return <option>Select Colors</option>;
    }
  };
  return (
    <>
        <Navbar></Navbar>
        <img className='w-100' src="https://www.tvsmotor.com/tvs-jupiter/-/media/Brand-Pages/Jupiter/banner/nov2020/optimized-images-Latest/Desktop-Landing-Page-Base.jpg" alt='jupiter-img'></img>
        <div className="carousel2">
        <h2>TVS JUPITER FEATURES</h2>
        <div id="carousel2" class="carousel carousel-dark slide">
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
          </div>
          <div class="carousel-inner">
            <div class="carousel-item comfortks active">
              <img
                src="https://www.tvsmotor.com/tvs-jupiter/-/media/Brand-Pages/Jupiter/jupiter-images/Features/optimized-images/TVS-Jupiter_LED-Head-lamp.png"
                class="d-block responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h4>LED Headlamp*</h4>
                <p>&emsp;&emsp;&emsp;Overcome poor visibility & command style. Headlamps also ensure your safety when you are riding in early morning or evening, foggy weather.</p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-jupiter/-/media/Brand-Pages/Jupiter/jupiter-images/Features/optimized-images/c1.png"
                class="d-block responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h4>Anti skid long seat</h4>
                <p>
                Helps in riding composure while sudden braking and riding on slopes with added benefit of long seat for extra pillion comfort
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-jupiter/-/media/Brand-Pages/Jupiter/jupiter-images/Features/optimized-images/TVS-JupiterLargest--Leg-Space-375-mm.png"
                class="d-block responsive "
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h4>Largest Leg Space (375 mm)</h4>
                <p>
                  &emsp;&emsp;The meticulously planned, luxuriously tailored components afford both rider & pillion the ultimate in personal space. TVS Jupiter has the largest leg space (375mm) amongst all scooters. Ride comfortably and store more.
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-jupiter/-/media/Brand-Pages/Jupiter/jupiter-images/Features/optimized-images/co1.png"
                class="d-block responsive "
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h4>All In one Lock</h4>
                <p>
                  &emsp;&emsp;Helps to operate ignition, Fuel tank, handle lock, Seat lock from the same key hole.
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-jupiter/-/media/Brand-Pages/Jupiter/jupiter-images/Features/optimized-images/TVS-Jupiter_Metal-Body.png"
                class="d-block responsive "
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h4>Metal Body</h4>
                <p>
                  &emsp;&emsp;Good bones provide structure, strength & flexibility. The vehicle's stiff chassis provides a firm foundation for nimble handling and an ultra-high-strength sheet metal body eliminates any chance of a tension.
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
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next controller"
            type="button"
            data-bs-target="#carousel2"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* form */}
      <div className="colors">
        <h2>BUY NOW</h2>

        <div className="row">
          <div className="col-sm-5 image">
            <img
              className="tvsimage"
              src="https://www.tvsmotor.com/-/media/BookARideOptimized/Book%20a%20ride/890-484.webp?sc_lang=en"
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
                  <option value="TVS Jupiter">
                    TVS Jupiter
                  </option>
                  <option value="TVS Jupiter SMW">TVS Jupiter SMW</option>
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
    </>
  )
}

export default Jupiter