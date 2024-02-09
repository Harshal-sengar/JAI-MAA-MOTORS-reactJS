import React from "react";
import "./Scooter.css";
import { Link } from "react-router-dom";

function Scooter()
{
    return (
        <>
            <div className="scooter">
                <div className="row" id="scooters">
                    <div className="card col-lg-6">
                        <img className="scooter-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/TVS-N282/TVS-Jupiter_IntelliGO_Digital-Banners_Logo-128x64.jpg?h=64&amp;w=128&amp;la=en&amp;hash=1E0618673D20062F58FF6ABF6C019DDC" alt=""></img>
                        <h5>TVS Jupiter 125</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">125cc</li>
                            <li className="list-group-item">60+kmpl</li>
                            <li className="list-group-item">108Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <img className="scooter-picture" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/TVS-N282/TVS-N282_Creative-1_Digital-Banners-Onesize-890x4846.jpg?h=484&w=890&la=en&hash=16DE378E8F7A6CC50EA1AA374FDEA223" alt=""></img>
                    </div>
                </div>
                <div className="row" id="scooters">
                    <div className="card col-lg-6">
                        <img className="scooter-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_TVS_Ntorq_125_new.png?la=en&h=64&w=128&hash=8F8D4B5F50E9195A668791FEAE5DCA5E" alt=""></img>
                        <h5>TVS Ntorq</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">125cc</li>
                            <li className="list-group-item">60+kmpl</li>
                            <li className="list-group-item">110Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <img className="scooter-picture" src="https://www.tvsmotor.com/-/media/Brand-Pages/NTorq/Overview/Webp-images/DenstuNtorqImages/webp-images/HomepageSectionImages/09_TVS-NTorq-WebSite_Digital-Assets_06-04-2023_1121x608_Web-02.webp?la=en&hash=9C4891FD10B643B193D5CAE86C3DF318" style={{width:"100%", height:"100%"}} alt=""></img>
                    </div>
                </div>
                <div className="row">
                    <div className="card col-lg-6">
                        <img className="scooter-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_TVS-Jupiter.png?h=64&w=128&la=en&hash=DE738C33A65ADC421EECA8AD29D77EBD" alt=""></img>
                        <h5>TVS Jupiter</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">110cc</li>
                            <li className="list-group-item">62+kmpl</li>
                            <li className="list-group-item">108Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/Models/Jupiter"><img className="scooter-picture" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/Homepage/Desktop/TVS_Jupiter_2020.jpg?h=484&w=890&la=en&hash=6BBFB34DDA69F81A94CBA84ADC730856" alt=""></img></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="card col-lg-6">
                        <img className="scooter-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logoScooty-Pep.png?h=64&w=128&la=en&hash=41781125E65BCBAAF6BC998848AEABB4" alt=""></img>
                        <h5>TVS Scooty Pep+</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">90cc</li>
                            <li className="list-group-item">60+kmpl</li>
                            <li className="list-group-item">93Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/pages/scootypep"><img className="scooter-picture" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/Homepage/Desktop/TVS-Scooty-Pep-Plus.jpg?h=484&w=890&la=en&hash=1DDED17A1CFCD18D5821D6380BF6BDAF" alt=""></img></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Scooter;