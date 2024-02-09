import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./Scootypep.css";
import { useNavigate } from "react-router-dom";
import BacktoTopButton from '../components/BacktoTopButton';

const Scootypep = () => {
  const [imgageSrc, setImageSrc]=useState("https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/colours/aqua-matte/new-aqqwa/1.png");
  const [PepColorName, setPepColorName]=useState("AQUA MATTE")

  function changeToAqua()
  {
    setImageSrc("https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/colours/aqua-matte/new-aqqwa/1.png");
    setPepColorName("AQUA MATTE");
  }
  function changeToRed()
  {
    setImageSrc("https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/colours/coral-matte/new-coral/1.png");
    setPepColorName("RED");
  }
  function changeToBlack()
  {
    setImageSrc("https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/colours/frosted-black/new-black/1.png");
    setPepColorName("BLACK")
  }
  function changeToBlue()
  {
    setImageSrc("https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/colours/nero-blue/new-blue/1.png");
    setPepColorName("BLUE");
  }
  function changeToPink()
  {
    setImageSrc("https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/colours/princess-pink/new-pink/1.png");
    setPepColorName("PINK");
  }
  function changeToBrown()
  {
    setImageSrc("https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/colours/Silver-Brown/1.png");
    setPepColorName("BROWN");
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
        <section id="title" style={{ backgraound: "white" }}>
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
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              
              
            </div>
            <div className="carousel-inner">
              
              
              <div className="carousel-item active">
                <img
                  src="https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/Banner/optimized-images/Desktop_Scooty_Banner.jpg"
                  className="d-block w-100"
                  alt="TVS Jupiter-img"
                ></img>
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              
              <div className="carousel-item">
                <img
                  src="https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/Banner/15sep---scooty-pep/optimized-images/Scootypep-Main-Banner-Desktop-01.jpg"
                  className="d-block w-100"
                  alt="TVS Jupiter-img"
                ></img>
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/Banner/15sep---scooty-pep/optimized-images/Scootypep-Main-Banner-Desktop-03.jpg"
                  className="d-block w-100"
                  alt="TVS pep-img"
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
      </section>
      <div className='features-sport'>
        <div className="carousel4">
        <h2 className='heading-features' style={{color:"white"}}>~TVS ScootyPep+ Features</h2>
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
                src="https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/features/optimized-images/New-Special-Pattern-Seat.png"
                class="d-block responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h3>Pep Plus Special Pattern Seat</h3>
                <p style={{paddingLeft:"50px"}}>Textured Premium looking matte seats in TVS Scooty Pep Plus makes scooty even more stylish in its segment</p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/features/optimized-images/Glove-Box.png"
                class="d-block  responsive"
                alt="..."
              />
              <div class="carousel-caption caption d-md-block">
                <h3>Front Glove Box</h3>
                <p>
                TVS Scooty Pep Plus comes with well designed first in class Glove Box to keep your stuff handy on the go, providing additional space other than underseat storage
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/features/optimized-images/New-3D-Logo.png"
                class="d-block  responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h3>TVS Scooty Pep Plus 3D Premium Logo</h3>
                <p>
                  &emsp;&emsp;&emsp;TVS Scooty Pep Plus comes with finese Premium 3D Logo giving enhanced style quotient
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/features/optimized-images/Advanced-Ecothrust-engine.png"
                class="d-block  responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h3>Pep Plus Eco Thrust Engine</h3>
                <p>
                  &emsp;&emsp;&emsp;The Advanced Ecothrust Engine with multicurve ignition system and improved pick-up gives TVS Scooty Pep Plus a long lasting, trouble free and comfortable rides delivering the best mileage and performance.
                </p>
              </div>
            </div>
            <div class="carousel-item comfortks">
              <img
                src="https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/features/optimized-images/EaZy-Center-Stand.png"
                class="d-block  responsive"
                alt="..."
              />
              <div class="carousel-caption caption  d-md-block">
                <h3>EaZy* Centre Stand</h3>
                <p>
                  &emsp;&emsp;&emsp;TVS Scooty Pep Plus comes with patented technology which gives easiest center stand with effort reduced by 30%
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
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next controller"
            type="button"
            data-bs-target="#carousel4"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

    <div className="sport-colors">
                <h1 className="heading-features">~TVS ScootyPep+ COLORS</h1>
                <div className="Aqua-matte" onClick={changeToAqua}></div>
                <div className="Red" onClick={changeToRed}></div>
                <div className="pep-Black" onClick={changeToBlack}></div>
                <div className="Blue" onClick={changeToBlue}></div>
                <div className="Pink" onClick={changeToPink}></div>
                <div className="Brown" onClick={changeToBrown}></div>
                <img id="image7" src={imgageSrc} alt=""></img>
                <p className="pep-color-name">{PepColorName}</p>
            </div>

            {/* form */}
      <div className="colors" style={{ marginTop: "-55px" }}>
        <h2>BUY NOW</h2>
            <div className="row">
          <div className="col-sm-5 image">
            <img
              className="tvsimage"
              src="https://www.tvsmotor.com/tvs-scootypep/-/media/Brand-Pages/ScootyPep/optimized-images/scooty-pep-price.png"
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
                  <option value="TVS Scooty pep Plus Aqua">Aqua</option>
                  <option value="TVS Scooty pep Plus Red">Red</option>
                  <option value="TVS Scooty pep Plus Black">Black</option>
                  <option value="TVS Scooty pep Plus Blue">Blue</option>
                  <option value="TVS Scooty pep plus Pink">Pink</option>
                  <option value="TVS Scooty Pep Plus Brown">Brown</option>
                  
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
}

export default Scootypep