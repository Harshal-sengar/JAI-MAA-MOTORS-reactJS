import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MopedCarousel from './carousel/MopedCarousel'
import Footer from '../components/Footer'
import BacktoTopButton from '../components/BacktoTopButton'
import "./Moped.css";

const Moped = () => {
  return (
    <div>
        <Navbar></Navbar>
        <MopedCarousel></MopedCarousel>
        <h2 style={{textAlign:"center", marginTop:"20px", marginBottom:"20px", fontSize:"42px", fontWeight:"700", marginLeft:"auto", marginRight:"auto"}}>TVS XL100 MODELS</h2>
        <div className="moped">
                <div className="row" id="moped">
                    <div className="card col-lg-6">
                        <img className="moped-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo-xl-100.jpg?h=64&w=128&la=en&hash=F74F3B2CAA965FE5B4A21230C5EE5FE0" alt=""></img>
                        <h5>TVS Xl100 Comfort KS</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">100cc</li>
                            <li className="list-group-item">50+kmpl</li>
                            <li className="list-group-item">82Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/Models/Moped/ComfortKS"><img className="xl100-picture" src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Features-ComfortKS/Most-liked-features/optimized-images/Dual-Tone.png" alt="Xl 100 comfort ks"></img></Link>
                    </div>
                </div>

                <div className="row" id="moped">
                    <div className="card col-lg-6">
                        <img className="moped-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo-xl-100.jpg?h=64&w=128&la=en&hash=F74F3B2CAA965FE5B4A21230C5EE5FE0" alt=""></img>
                        <h5>TVS Xl100 Win Edition</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">100cc</li>
                            <li className="list-group-item">50+kmpl</li>
                            <li className="list-group-item">89Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/Models/Moped/WinEdition"><img  className="xl100-picture" src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Features-SuccessEdition/optimize-image/15-More-Mileage.jpg" alt="Xl 100 win edition"></img></Link>
                    </div>
                </div>

                <div className="row" id="moped">
                    <div className="card col-lg-6">
                        <img className="moped-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo-xl-100.jpg?h=64&w=128&la=en&hash=F74F3B2CAA965FE5B4A21230C5EE5FE0" alt=""></img>
                        <h5>TVS Xl100 HeavyDuty ES</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">100cc</li>
                            <li className="list-group-item">50+kmpl</li>
                            <li className="list-group-item">87Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/Models/Moped/HeavyDutyES"><img  className="xl100-picture" src="https://www.tvsmotor.com/tvs-xl100/-/media/Brand-Pages/XL100/Features-Heavy-Duty-BSVI/Most-liked-features/optimized-image/Larger-Floorboard-Space.png" alt="Xl 100 heavy duty i -touch"></img></Link>
                    </div>
                </div>

                <div className="row" id="moped">
                    <div className="card col-lg-6">
                        <img className="moped-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo-xl-100.jpg?h=64&w=128&la=en&hash=F74F3B2CAA965FE5B4A21230C5EE5FE0" alt=""></img>
                        <h5>TVS Xl100 Comfort ES</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">100cc</li>
                            <li className="list-group-item">50+kmpl</li>
                            <li className="list-group-item">88Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/Models/Moped/ComfortES"><img  className="xl100-picture" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/Homepage/Desktop/TVS_XL_2021.jpg?h=484&w=890&la=en&hash=8B04E750A76CA2F1434BF49D31C7C6E4" alt="Xl 100 comfort i-touch"></img></Link>
                    </div>
                </div>

                <div className="row" id="moped">
                    <div className="card col-lg-6">
                        <img className="moped-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo-xl-100.jpg?h=64&w=128&la=en&hash=F74F3B2CAA965FE5B4A21230C5EE5FE0" alt=""></img>
                        <h5>TVS Xl100 Heavy Duty</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">100cc</li>
                            <li className="list-group-item">50+kmpl</li>
                            <li className="list-group-item">85Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/Models/Moped/HeavyDuty"><img className="xl100-picture kick-start-xl100" src="https://i.ytimg.com/vi/8wy1U8uxrks/maxresdefault.jpg" alt="Xl 100 Heavy Duty"></img></Link>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        <BacktoTopButton></BacktoTopButton>
    </div>
  )
}

export default Moped