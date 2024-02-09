import React, {useState} from "react";
import Navbar from "../components/Navbar";
import ReactPlayer from "react-player";
import Footer from "../components/Footer"
import BacktoTopButton from "../components/BacktoTopButton"
import CityCarousel from "./carousel/CityCarousel";
import { useNavigate } from "react-router-dom";
import "./CityPlus.css";

const CityPlus = () => {

  const [showColor1, setColor1] = useState(true);
  const [showColor2, setColor2] = useState(false);

  const [buttonColor1, setButtonColor1] = useState(true);
  const [buttonColor2, setButtonColor2] = useState(false);

  const [imageSrc1, setImageSrc1]=useState("https://www.tvsmotor.com/tvs-star-city-plus/-/media/Brand-Pages/TVSStarCity/Colour/Black-Red-Disc/1.png");

  const[cityplusColorName, setCityPlusColorName]=useState("BLACK RED");

  function changeToBlackRed(){
    setImageSrc1("https://www.tvsmotor.com/tvs-star-city-plus/-/media/Brand-Pages/TVSStarCity/Colour/Black-Red-Disc/1.png");
    setCityPlusColorName("BLACK RED");
  }
  function changeToBlueSilver(){
    setImageSrc1("https://www.tvsmotor.com/tvs-star-city-plus/-/media/Brand-Pages/TVSStarCity/Colour/blue-silver-disc/1.png");
    setCityPlusColorName("BLUE SILVER");
  }
  function changeToGreyBlack(){
    setImageSrc1("https://www.tvsmotor.com/tvs-star-city-plus/-/media/Brand-Pages/TVSStarCity/Colour/Disc-Grey-Black/1.png");
    setCityPlusColorName("GREY BLACK");
  }

  const [imageSrc2, setImageSrc2]=useState("https://www.tvsmotor.com/tvs-star-city-plus/-/media/Brand-Pages/TVSStarCity/Colour/black-blue/1.png");
  const [cityplusColorName2, setCityPlusColorName2]=useState("BLACK BLUE");

  function changeToDrumBlackBlue(){
    setImageSrc2("https://www.tvsmotor.com/tvs-star-city-plus/-/media/Brand-Pages/TVSStarCity/Colour/black-blue/1.png");
    setCityPlusColorName2("BLACK BLUE");
  }

  function changeToDrumBlackRed(){
    setImageSrc2("https://www.tvsmotor.com/tvs-star-city-plus/-/media/Brand-Pages/TVSStarCity/Colour/black-red/1.png");
    setCityPlusColorName2("BLACK RED");
  }
  function changeToDrumBlueSilver(){
    setImageSrc2("https://www.tvsmotor.com/tvs-star-city-plus/-/media/Brand-Pages/TVSStarCity/Colour/blue-silver-drum/1.png");
    setCityPlusColorName2("BLUE SILVER");
  }
  function changeToDrumGreyBlack(){
    setImageSrc2("https://www.tvsmotor.com/tvs-star-city-plus/-/media/Brand-Pages/TVSStarCity/Colour/grey-black/1.png");
    setCityPlusColorName2("GREY BLACK");
  }
  function changeToDrumRedBlack(){
    setImageSrc2("https://www.tvsmotor.com/tvs-star-city-plus/-/media/Brand-Pages/TVSStarCity/Colour/red-black/1.png");
    setCityPlusColorName2("RED BLACK");
  }

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
    if (user.vehicle === "TVS City plus Disc") {
      return (
        <>
          <option>Select Colors For Disc</option>
          <option value="TVS City Plus Disc Black-Red">
            Black-Red
          </option>
          <option value="TVS City plus Disc Blue-Silver">
            Blue-Silver
          </option>
          <option value="TVS City plus Disc Grey-Black">Grey-Black</option>
        </>
      );
    } else if (user.vehicle === "TVS City plus Drum") {
      return (
        <>
          <option>Select Colors for Drum</option>
          <option value="TVS City plus Drum Black-Blue">Black-Blue</option>
          <option value="TVS City plus Drum Black-Red">Black-Red</option>
          <option value="TVS City plus Drum Blue-Silver">Blue-Silver</option>
          <option value="TVS City plus Drum Grey-Black">Grey-Black</option>
          <option value="TVS City plus Drum Red-Black">Red-Black</option>
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

        {/* carousel */}

      <div className="container-fluid" style={{ padding: "0px" }}>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
            data-pause="hover"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              
              
            </div>
            <div className="carousel-inner">
              
              <div className="carousel-item active">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=8deb7fk3UFo"
                  className="d-block w-100"
                  alt="TVS Jupiter-img"
                  playing={true}
                ></ReactPlayer>
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item ">
                <img
                  src="https://www.tvsmotor.com/tvs-star-city-plus/-/media/Brand-Pages/TVSStarCity/20-04-22/Website-1500_1520x500.jpg"
                  className="d-block w-100"
                  alt="TVS Jupiter-img"
                ></img>
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* other Section */}
        <img style={{width:"100%"}} src="https://www.tvsmotor.com/tvs-star-city-plus/-/media/Brand-Pages/TVSStarCity/optimized-images/ETFI-Tech-Banner-desktop-English.jpg" alt=""></img>

        {/* features */}
          <CityCarousel></CityCarousel>

        {/* Colors div */}

      <div className="Colors-cityplus">
        <h1 className="heading-features" style={{color:"white"}}>
          ~COLORS
        </h1>
        <div className="features-button">
          <div
            onClick={toggleColor1}
            className={`cityPlusButton ${
              buttonColor1 ? "show-feature" : "not-show-feature"
            }`}
          >
            DISC
          </div>
          <div
            onClick={toggleColor2}
            className={`button2 ${
              buttonColor2 ? "show-feature" : "not-show-feature"
            }`}
          >
            DRUM
          </div>
        </div>
        <div className={` Color ${showColor1 ? "active" : "inactive"}`}>
          <div className="Black-red" onClick={changeToBlackRed}></div>
          <div className="blue-silver" onClick={changeToBlueSilver}></div>
          <div className="grey-black" onClick={changeToGreyBlack}></div>
          <img id="image1" src={imageSrc1} alt="win brown" />
          <p className="cityplus-color-name">{cityplusColorName}</p>
        </div>
        <div className={` Color ${showColor2 ? "active" : "inactive"}`}>
          <div className="drum-blackBlue" onClick={changeToDrumBlackBlue}></div>
          <div className="drum-blackRed" onClick={changeToDrumBlackRed}></div>
          <div className="drum-blueSilver" onClick={changeToDrumBlueSilver}></div>
          <div className="drum-greyBlack" onClick={changeToDrumGreyBlack}></div>
          <div className="drum-redBlack" onClick={changeToDrumRedBlack}></div>
          <img id="image2" src={imageSrc2} alt="win brown" />
          <p className="cityplus-color-name">{cityplusColorName2}</p>
        </div>
      </div>

            {/* form */}
      <div className="colors">
        <h2>BUY NOW</h2>

        <div className="row">
          <div className="col-sm-5 image">
            <img
              className="tvsimage"
              src="https://www.tvsmotor.com/assets/img/star-city-plus-03-02-2022.jpg"
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
                  <option>Select Model</option>
                  <option value="TVS City plus Disc">
                    Disc
                  </option>
                  <option value="TVS City plus Drum">Drum</option>
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
    </>
  );
};

export default CityPlus;

