import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BacktoTopButton from '../components/BacktoTopButton'
import JuipterCarousel from './carousel/JuipterCarousel'
import "./Jupiter.css";

const JupiterSeries = () => {
  return (
    <>

        <Navbar></Navbar>
        <JuipterCarousel></JuipterCarousel>
        <img style={{width:"100%"}} src='https://www.tvsmotor.com/tvs-jupiter/-/media/JupiterOptimizedImages/Desktop/D-ETFi-English.webp' alt='jupiter-img'></img>
        <h2 style={{textAlign:"center", marginTop:"20px", marginBottom:"20px", fontSize:"42px", fontWeight:"700", marginLeft:"auto", marginRight:"auto"}}>OUR VARIENTS</h2>
        <div className="moped ">
                <div className="row" id="moped">
                    <div className="card col-lg-6">
                        <img className="moped-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_TVS-Jupiter.png?h=64&w=128&la=en&hash=DE738C33A65ADC421EECA8AD29D77EBD" alt=""></img>
                        <h5>TVS Jupiter</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">100cc</li>
                            <li className="list-group-item">50+kmpl</li>
                            <li className="list-group-item">108Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/Models/Jupiter/Jupiter"><img className="xl100-picture jupiter-series-image" src="https://www.tvsmotor.com/tvs-jupiter/-/media/JupiterOptimizedImages/Desktop/TVS-Jupiter-Jupiter.webp" alt="Xl 100 comfort ks"></img></Link>
                    </div>
                </div>

                <div className="row" id="moped">
                    <div className="card col-lg-6">
                        <img className="moped-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_TVS-Jupiter.png?h=64&w=128&la=en&hash=DE738C33A65ADC421EECA8AD29D77EBD" alt=""></img>
                        <h5>TVS Jupiter ZX</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">100cc</li>
                            <li className="list-group-item">50+kmpl</li>
                            <li className="list-group-item">108Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/Models/Jupiter/JupiterZX"><img className="xl100-picture jupiter-series-image" src="https://www.tvsmotor.com/tvs-jupiter/-/media/JupiterOptimizedImages/Desktop/TVS-Jupiter-ZX.webp" alt="Xl 100 comfort ks"></img></Link>
                    </div>
                </div>

                <div className="row" id="moped">
                    <div className="card col-lg-6">
                        <img className="moped-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_TVS-Jupiter.png?h=64&w=128&la=en&hash=DE738C33A65ADC421EECA8AD29D77EBD" alt=""></img>
                        <h5>TVS Jupiter Classic</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">100cc</li>
                            <li className="list-group-item">50+kmpl</li>
                            <li className="list-group-item">108Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/Models/Jupiter/Classic"><img className="xl100-picture jupiter-series-image" src="https://www.tvsmotor.com/tvs-jupiter/-/media/JupiterOptimizedImages/Desktop/325x309.webp" alt="Xl 100 comfort ks"></img></Link>
                    </div>
                </div>

                <div className="row" id="moped">
                    <div className="card col-lg-6">
                        <img className="moped-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_TVS-Jupiter.png?h=64&w=128&la=en&hash=DE738C33A65ADC421EECA8AD29D77EBD" alt=""></img>
                        <h5>TVS Jupiter ZX Drum SmartXonnect</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">100cc</li>
                            <li className="list-group-item">50+kmpl</li>
                            <li className="list-group-item">108Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/Models/Jupiter/ZXDrumSmartXonnect"><img className="xl100-picture jupiter-series-image" src="https://www.tvsmotor.com/tvs-jupiter/-/media/JupiterOptimizedImages/Desktop/Our-Variants.webp" alt="Xl 100 comfort ks"></img></Link>
                    </div>
                </div>

                <div className="row" id="moped">
                    <div className="card col-lg-6">
                        <img className="moped-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_TVS-Jupiter.png?h=64&w=128&la=en&hash=DE738C33A65ADC421EECA8AD29D77EBD" alt=""></img>
                        <h5>TVS Jupiter ZX SmartXonnect</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">100cc</li>
                            <li className="list-group-item">50+kmpl</li>
                            <li className="list-group-item">108Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/Models/Jupiter/ZXSmartXonnect"><img className="xl100-picture jupiter-series-image" src="https://www.tvsmotor.com/tvs-jupiter/-/media/JupiterOptimizedImages/Desktop/325x310.webp" alt="Xl 100 comfort ks"></img></Link>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        <BacktoTopButton></BacktoTopButton>
    </>
  )
}

export default JupiterSeries
