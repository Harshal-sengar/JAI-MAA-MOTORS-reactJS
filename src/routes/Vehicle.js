import React from "react";
import "./Vehicle.css";
import Scooter from "../components/Scooter";
import Motorcycle from "../components/Motorcycle";
import Moped from "../components/Moped";

function Vehicle()
{
    return (
        <>
            <section className="vehicle">
                <div className="title-div">
                    <p className="title-line">
                        DISCOVER YOUR RIDE
                    </p>
                    <h1><em>VEHICLES</em></h1>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-white vehicle-button ">
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav ms-auto vehicle-option">
                            <li className="nav-item">
                                <a href="#scooters"><button type="button" className="btn btn-outline-danger btn-lg vehicle-button ">SCOOTERS</button></a>
                            </li>
                            <li className="nav-item">
                                <a href="#motorcycle"><button type="button" className="btn btn-outline-primary btn-lg vehicle-button">MOTORCYCLES</button></a>
                            </li>
                            <li className="nav-item">
                                <a href="#moped"><button type="button" className="btn btn-outline-warning btn-lg vehicle-button">MOPEDS</button></a>
                            </li>
                        </ul>
                    </div>
                 </nav>
                 <Scooter></Scooter>
                 <Motorcycle></Motorcycle>
                 <Moped></Moped>
            </section>
        </>
    )
}
export default Vehicle;