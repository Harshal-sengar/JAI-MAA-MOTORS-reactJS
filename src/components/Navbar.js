import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar()
{

    

    const[color,setColor]=useState(false);

    function changeColor()
    {
        if(window.scrollY>=100)
        {
            setColor(true);
        }
        else
        {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

    return (
        <div >
            <nav className={color ? "navbar navbar-expand-lg navbar-dark bg-dark header-bg tvs" :"navbar navbar-expand-lg navbar-dark bg-dark"}>
      <img src="https://images.hindustantimes.com/auto/img/2020/08/25/600x338/tvs-motor-company-vector-logo_1598369678632_1598369685883.png" alt="tvs-img" style={{ height:"80px", width:"80px"}}></img>
      <Link className="navbar-brand" to="/">&nbsp;Jai Maa Motors</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav jaimaa ms-auto active">
         
          <li className="nav-item" ><Link className="nav-link book-vehicle" style={{color:"white"}} role="button" to="/BookVehicle">Book Vehicle</Link></li>
          
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#s" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Customers
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/UserManual">USER MANUAL</Link></li>
              <li><Link className="dropdown-item" to="/CustomerSupport">CUSTOMER SUPPORT</Link></li>
            </ul>
          </li>
          <li className="nav-item"><Link className="nav-link test-drive" style={{color:"white"}} to="/ServiceAppointment">Service Appointment</Link></li>
        </ul>
      </div>
    </nav>
        </div>
    )
}
export default Navbar;