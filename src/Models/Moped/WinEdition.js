import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import MopedCarousel from '../../pages/carousel/MopedCarousel'
import Footer from '../../components/Footer'
import BacktoTopButton from '../../components/BacktoTopButton'
import "./ComfortKS.css";
import { useNavigate } from "react-router-dom";
import "./Colors.css";

const WinEdition = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Colours/Success-Edition/Beaver-Brown/1.png"
  );

  function changeToBrown() {
    setImageSrc(
      "https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Colours/Success-Edition/Beaver-Brown/1.png"
    );
  }

  function changeToBlue() {
    setImageSrc(
      "https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Colours/Success-Edition/Delight-Blue/1.png"
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

    alert("Thanks For Booking. ");
    alert("We will contact you shortly");
    navigate("/");
  };
  return (
    <div>
      <Navbar></Navbar>
      <MopedCarousel></MopedCarousel>
      <div className="carousel2">
        <h2>TVS XL100 WIN EDITION FEATURES</h2>
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
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Features-SuccessEdition/optimize-image/Stylish-chrome-accents.jpg"
                class="d-block responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h4>Stylish chrome accents</h4>
                <p>Makes Heads turn with Stylish Chrome Finish Elements</p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Features-SuccessEdition/optimize-image/Metal-Shield.jpg"
                class="d-block responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h4>Metal Shield</h4>
                <p>
                  Metal floor board to help you carry everything worry-free
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Features-SuccessEdition/optimize-image/Premium-Dual-Tone-Seat-With-Diamond-Pattern.jpg"
                class="d-block responsive "
                alt="..."
              />
              <div class="carousel-caption caption d-md-block">
                <h4>Premium Dual tone Seat with Diamond Pattern</h4>
                <p>
                  &emsp;&emsp;&emsp;The cushioned and stylish Premium dual-tone seat gives more comfort to the rider& the pillon
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Features-SuccessEdition/optimize-image/mobile-charging.png"
                class="d-block responsive "
                alt="..."
              />
              <div class="carousel-caption caption d-md-block">
                <h4>Mobile charging Facility</h4>
                <p>
                  &emsp;&emsp;&emsp;Equipped with a mobile charging port. Stay connected & charge your phone on-the-go!
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Features-SuccessEdition/optimize-image/Stylish-Chrome.jpg"
                class="d-block responsive "
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h4>Chrome Mirror</h4>
                <p>
                  &emsp;&emsp;&emsp;Stylish and elegant, round shaped, full Chrome mirrors
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
      <div className="colors">
        <h2>TVS XL100 WIN EDITION COLORS</h2>
        <img id="image" src={imageSrc} alt="win brown" />
      </div>
      <div className="brown" onClick={changeToBrown}><p className='moped-color-name'>BROWN</p></div>
      <div className="blue" onClick={changeToBlue}><p className='moped-color-name'>BLUE</p></div>
      <div className="colors" style={{ marginTop: "-60px" }}>
        <h2>BUY NOW</h2>

        {/* form */}

        <div className="row">
          <div className="col-sm-5 image">
            <img
              className="tvsimage"
              src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/optimized-image/TVS_XL_2022.jpg"
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
                  <option value="TVS XL100 WinEdition brown">Brown</option>
                  <option value="TVS Xl100 winEdition blue">Blue</option>
                  
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
  )
}

export default WinEdition