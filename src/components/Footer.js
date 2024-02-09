import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom";

function Footer() {
  function mail() {
    window.location.href = `mailto:jaimaamotors2019@gmail.com`;
  }

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 align-self-center">
            <h4>Address</h4>
            <br></br>
            <p>SikandraRao Road</p>
            <p>Devi Nagar</p>
            <p>Hathras Junction</p>
            <p>Hathras- 204102</p>
            <p>Utter Pradesh</p><br></br>
          </div>
          <div className="col-md-4 justify-content-center">
            <h4>Call Us On</h4>
            <br></br>
            <p>Ph: 9411413429</p>
          </div>
          <div className="col-md-4 justify-content-center">
            <h4>Mail Us On</h4>
            <br></br>
            <p>jaimaamotors2019@gmail.com</p>
            <button onClick={mail } className="btn-lg footer-button" >Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;