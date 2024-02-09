import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import MopedCarousel from '../../pages/carousel/MopedCarousel'
import Footer from '../../components/Footer'
import BacktoTopButton from '../../components/BacktoTopButton'
import "./ComfortKS.css";
import { useNavigate } from "react-router-dom";
import "./Colors.css";

const HeavyDutyES = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Colours/Heavy-Duty/Black/1.png"
  );

  function changeToGreen() {
    setImageSrc(
      "https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Colours/Heavy-Duty/Green/1.png"
    );
  }

  function changeToBlack() {
    setImageSrc(
      "https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Colours/Heavy-Duty/Black/1.png"
    );
  }
  function changeToBlue() {
    setImageSrc(
      "https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Colours/Heavy-Duty/Blue/1.png"
    );
  }
  function changeToPurple() {
    setImageSrc(
      "https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Colours/Heavy-Duty/Purple/1.png"
    );
  }
  function changeToRed() {
    setImageSrc(
      "https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Colours/Heavy-Duty/Red/1.png"
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
    console.log(e);
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
      <h2>TVS XL100 HEAVY DUTY i-TOUCH FEATURES</h2>
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
              src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Features-Heavy-Duty-BSVI/Most-liked-features/optimized-image/Silent-Start.png"
              class="d-block responsive"
              alt="..."
            />
            <div class="carousel-caption caption  d-md-block">
              <h4>i-Touchstart-Silent Start since 2018</h4>
              <p>Equipped with Integrated Starter Generator technology helps in instant & Silent start of your vehicle</p>
            </div>
          </div>
          <div class="carousel-item comfortks">
            <img
              src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Features-Heavy-Duty-BSVI/Most-liked-features/optimized-image/Easy-On-Off-Switch.png"
              class="d-block responsive"
              alt="..."
            />
            <div class="carousel-caption caption  d-md-block">
              <h4>Easy ON-OFF Switch</h4>
              <p>
                The easy ON-OFF enables you to start & stop your vehicle effortlessly.
              </p>
            </div>
          </div>
          <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Features-ComfortKS/Most-liked-features/optimized-images/Petrol-Reserve-Indicator-New.png"
                class="d-block responsive "
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h4>Petrol Reserver Indicator</h4>
                <p>
                  &emsp;&emsp;When the fuel capacity reaches 1.25l the indicator
                  will grow for refueling
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Features-Comfort/optimize-image/Mobile-Charging-Facility.png"
                class="d-block responsive "
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h4>Mobile Charging Facility</h4>
                <p>
                  &emsp;&emsp;Equipped with Mobile Charging port - Stay connected. Charge your phone on-the-go!
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Features-Heavy-Duty-BSVI/Most-liked-features/optimized-image/15--More-Mileage.png"
                class="d-block responsive "
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h4>15% More Mileage</h4>
                <p>
                  &emsp;&emsp;Save on-the-go! The all-new ETFi technology offers you 15% more Mileage.
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
      <h2>TVS XL100 HEAVY DUTY COLORS</h2>
      <img id="image" src={imageSrc} alt="win brown" />
    </div>
    <div className="ES-black" onClick={changeToBlack}><p className='moped-color-name'>BLACK</p></div>
    <div className="ES-blue" onClick={changeToBlue}><p className='moped-color-name'>BLUE</p></div>
    <div className="ES-green" onClick={changeToGreen}><p className='moped-color-name'>GREEN</p></div>
    <div className="ES-purple" onClick={changeToPurple}><p className='moped-color-name'>PURPLE</p></div>
    <div className="ES-red" onClick={changeToRed}><p className='moped-color-name'>RED</p></div>
    <div className="colors" style={{ marginTop: "-150px" }}>
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
                <option value="TVS Xl100 HeavyDuty ES Black">Black</option>
                <option value="TVS Xl100 HeavyDuty ES Blue">Blue</option>
                <option value="TVS Xl100 HeavyDuty ES Green">Green</option>
                <option value="TVS Xl100 HeavyDuty ES Purple">Purple</option>
                <option value="TVS Xl100 HeavyDuty ES Red">Red</option>
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

export default HeavyDutyES