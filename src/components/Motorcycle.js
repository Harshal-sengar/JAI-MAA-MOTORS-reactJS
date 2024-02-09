import React from "react";
import "./Motorcycle.css";
import { Link } from "react-router-dom";

function Motorcycle()
{
    return (
        <>
            <div className="motorcycle">
                {/* <div className="row" id="motorcycle">
                    <div className="card col-lg-6">
                        <img className="motorcycle-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_RR-310.png?h=64&w=128&la=en&hash=FD8FD0A10065C4334A00EC8FAC539B93" alt=""></img>
                        <h5>TVS Apache RR 310</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">310cc</li>
                            <li className="list-group-item">33.5bhp</li>
                            <li className="list-group-item">174Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <img className="motorcycle-picture" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/Homepage/Desktop/TVS-Apache-RR310-2020.png?h=484&w=890&la=en&hash=04FDC6833060CCEC0B411CB419D178D3" alt=""></img>
                    </div>
                </div> */}
                <div className="row" id="motorcycle">
                    <div className="card col-lg-6">
                        <img className="motorcycle-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_RTR-Series.png?h=64&w=128&la=en&hash=10AE4864459DCE8C6A056AC769542D6F" alt=""></img>
                        <h5>TVS Apache RTR Series</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">160cc</li>
                            <li className="list-group-item">50kmpl</li>
                            <li className="list-group-item">137Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/Models/apache"> <img className="motorcycle-picture" src="https://www.tvsmotor.com/-/media/Brand-Pages/Apache/Apache-RTR/May-also-Like/TVS-Apache---RTR-4-Bike-Series-675x357-Pix-03.jpg?h=357&w=675&la=en&hash=F44FF2CF67994C94BFCA8256F70A8064" alt=""></img></Link>
                    </div>
                </div>
            <div className="row" id="motorcycle">
                <div className="card col-lg-6">
                    <img className="motorcycle-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/TVS-Ronin/OurVehicleBanner_Vehicles_section_Brand_logo_image_128x64.jpg?h=64&w=128&la=en&hash=5134824A6FCB6CFD2BECA0B832C492F1"  alt=""></img>
                    <h5>TVS Ronin</h5>
                    <ul className="list-group list-group-horizontal-xxl">
                        <li className="list-group-item">225cc</li>
                        <li className="list-group-item">30+kmpl</li>
                        <li className="list-group-item">160Kg</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <Link to="/pages/ronin"><img className="motorcycle-picture" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/TVS-Ronin/Book-Vehicle---884x628.jpg?h=628&w=884&la=en&hash=503CA3EA02600D6C1CC0D8D51159245C" alt=""></img></Link>
                </div>
            </div>
            <div className="row" id="motorcycle">
                <div className="card col-lg-6">
                    <img className="motorcycle-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/TVS-Raider/raiderSmallLogo.png?h=64&w=128&la=en&hash=FEF996E5DCB55E5EA73ED415555457C7"  alt=""></img>
                    <h5>TVS Raider</h5>
                    <ul className="list-group list-group-horizontal-xxl">
                        <li className="list-group-item">125cc</li>
                        <li className="list-group-item">50+kmpl</li>
                        <li className="list-group-item">123Kg</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                   <Link to="/pages/raider"> <img className="motorcycle-picture" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/TVS-Raider/TVS_890x484_N360C.jpg?h=484&w=890&la=en&hash=9244AE76A2C81E9BD7EC30B229A0CD6D" alt=""></img></Link>
                </div>
            </div>
            <div className="row" id="motorcycle">
                <div className="card col-lg-6">
                    <img className="motorcycle-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_Radeon.png?h=64&w=128&la=en&hash=0DC34D1ACA96D95A2ED911C3A43D6E1F"  alt=""></img>
                    <h5>TVS Radeon</h5>
                    <ul className="list-group list-group-horizontal-xxl">
                        <li className="list-group-item">110cc</li>
                        <li className="list-group-item">50+kmpl</li>
                        <li className="list-group-item">116Kg</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <Link to="/pages/radeon"><img className="motorcycle-picture" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/Homepage/Desktop/tvs-radeon-2020.jpg?h=484&w=890&la=en&hash=8F17F45603251A23A03DF595894D347A" alt=""></img></Link>
                </div>
            </div>
            <div className="row" id="motorcycle">
                <div className="card col-lg-6">
                    <img className="motorcycle-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_StarcityPLUS_2020.png?h=64&w=128&la=en&hash=93809BE0A9FD9BD77693E26779061B02"  alt=""></img>
                    <h5>TVS StarCity+</h5>
                    <ul className="list-group list-group-horizontal-xxl">
                        <li className="list-group-item">110cc</li>
                        <li className="list-group-item">50+kmpl</li>
                        <li className="list-group-item">116Kg</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <Link to="/pages/cityplus"><img className="motorcycle-picture" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/Homepage/Desktop/TVS_StarCity_2021.jpg?h=484&w=890&la=en&hash=77822FAE154F43B901C62ECDFAC5D353" alt=""></img></Link>
                </div>
            </div>
            <div className="row" id="motorcycle">
                <div className="card col-lg-6">
                    <img className="motorcycle-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo_TVS-Sport_may2020.png?h=64&w=128&la=en&hash=5A49B682C1F7FB61529824568739C7D2"  alt=""></img>
                    <h5>TVS Sport</h5>
                    <ul className="list-group list-group-horizontal-xxl">
                        <li className="list-group-item">110cc</li>
                        <li className="list-group-item">70+kmpl</li>
                        <li className="list-group-item">110Kg</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <Link to="/pages/sport"><img className="motorcycle-picture" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/ProductListing/Desktop/TVS_Sport_2020.jpg?h=357&w=675&la=en&hash=79EBDA91F20694FC19177A18B11053D8" alt=""></img></Link>
                </div>
            </div>
        </div>
    </>
    )
}
export default Motorcycle;