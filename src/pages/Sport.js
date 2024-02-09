import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BacktoTopButton from "../components/BacktoTopButton";
import SportCarousel from "./carousel/SportCarousel";
import "./Sport.css";
import { useNavigate } from "react-router-dom";

function Sport()
{
    const[imgageSrc, setImageSrc]=useState("https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Colour/Black-Blue/1.png");
    const [sportColorName, setSportColorName]=useState("BLACK BLUE");

    function changeToBlackBlue(){
        setImageSrc("https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Colour/Black-Blue/1.png");
        setSportColorName("BLACK BLUE");
    }

    function changeToBlackRed(){
        setImageSrc("https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Colour/Black-Red/1.png");
        setSportColorName("BLACK RED");
    }

    function changeToPurple(){
        setImageSrc("https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Colour/White-Purple/1.png");
        setSportColorName("PURPLE");
    }

    function changeToBlue(){
        setImageSrc("https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Colour/Metallic-Blue/1.png");
        setSportColorName("BLUE");
    }

    function changeToAllBlack(){
        setImageSrc("https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Colour/Black/1.png");
        setSportColorName("ALL BLACK");
    }

    function changeToAllGrey(){
        setImageSrc("https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Colour/UpdatedGrey/1.png");
        setSportColorName("ALL GREY");
    }

    function changeToAllRed(){
        setImageSrc("https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/Colour/360-degree-images/360-degree-images/1.png");
        setSportColorName("ALL RED");
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
            <img style={{width:"100%"}} src="https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/12-09-23/Bannners/Website-Banner/Desktop-1520-X-500_Eng.png" alt=""></img>
            <img style={{width:"100%"}} src="https://www.tvsmotor.com/tvs-sport/-/media/Brand-Pages/TVSSport/optimized-images/ETFi_web.jpg" alt=""></img>
            <SportCarousel></SportCarousel>
            <div className="sport-colors">
                <h1 className="heading-features">~TVS SPORT COLORS</h1>
                <div className="black-blue" onClick={changeToBlackBlue}></div>
                <div className="black-red" onClick={changeToBlackRed}></div>
                <div className="sport-purple" onClick={changeToPurple}></div>
                <div className="sport-blue" onClick={changeToBlue}></div>
                <div className="all-black" onClick={changeToAllBlack}></div>
                <div className="all-grey" onClick={changeToAllGrey}></div>
                <div className="all-red" onClick={changeToAllRed}></div>
                <img id="image3" src={imgageSrc} alt=""></img>
                <p className="sport-color-name">{sportColorName}</p>
            </div>
            
             {/* form */}
      <div className="colors" style={{ marginTop: "-55px" }}>
        <h2>BUY NOW</h2>
            <div className="row">
          <div className="col-sm-5 image">
            <img
              className="tvsimage"
              src="https://www.tvsmotor.com/assets/img/Desktop%20890%20X%20484_Eng.png?v=1"
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
                  <option value="TVS Sport ELS Black-Blue">Black-Blue</option>
                  <option value="TVS Sport ELS Black-Red">Black-Red</option>
                  <option value="TVS Sport ELS Pruple">Purple</option>
                  <option value="TVS Sport ELS Blue">Blue</option>
                  <option value="TVS Sport ELS All-Black">All Black</option>
                  <option value="TVS Sport ELS All-Grey">All Grey</option>
                  <option value="TVS Sport ELS All-Red">All Red</option>
                  
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
            <Footer></Footer>
            <BacktoTopButton></BacktoTopButton>
        </>
    )
};
export default Sport;