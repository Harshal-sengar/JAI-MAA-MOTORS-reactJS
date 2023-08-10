import React from "react";
import "./Moped.css";

function Moped()
{
    return (
        <>
            <div className="moped">
                <div className="row" id="moped">
                    <div className="card col-lg-6">
                        <img className="moped-image card-image" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/logo-xl-100.jpg?h=64&w=128&la=en&hash=F74F3B2CAA965FE5B4A21230C5EE5FE0" alt=""></img>
                        <h5>TVS Xl100</h5>
                        <ul className="list-group list-group-horizontal-xxl">
                            <li className="list-group-item">100cc</li>
                            <li className="list-group-item">55+kmpl</li>
                            <li className="list-group-item">89Kg</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <img className="xl100-picture" src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/Homepage/Desktop/TVS_XL_2021.jpg?h=484&w=890&la=en&hash=8B04E750A76CA2F1434BF49D31C7C6E4" alt=""></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Moped;