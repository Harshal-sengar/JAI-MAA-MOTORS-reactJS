import React, { useState } from "react";
import "../routes/BookVehicle.css";
import {  useNavigate } from "react-router-dom";

function BookVehicleForm()
{   
    const navigate=useNavigate();
    const [user, setUser]=useState({
      name:"", mobileNumber:"", address:"", vehicle:""
    });

    let name, value;

    const handleInputs=(e) =>{
      console.log(e);
      name=e.target.name;
      value=e.target.value;

      setUser({...user, [name]:value});
    }
    
    const PostData  = async(e) =>{
      
      e.preventDefault();
      
      const { name, mobileNumber, address, vehicle} = user;

      const res= fetch('/BookVehicle', {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name, mobileNumber, address, vehicle
        })
        
      });

      alert('Thanks For Booking. ');
      alert("We will contact you sortly");
      navigate('/');
      
    }

    
    // function thanks()
    // {
    //     alert("Thanks for submitting");
        
    // }
    return(
        <div>
            <div className="row">
                <div className="col-sm-5 image">
                    <img className="tvsimage" src="https://www.tvsmotor.com/assets/img/tvs-credit-new20201001.jpg" width="550px" alt=""  />
                </div>
                <div className="col-sm-5 form">
                    <div className="inside-form ">
                        <h1 style={{fontWeight:"bold"}}>Book Online</h1>
                        <p>Book your vehicle now and ride later.</p>
                        <form  method="POST">
                            <input className="input" value={user.name}  type="text" name="name" placeholder="Name*" aria-required="true" onChange={handleInputs}/>
                            <br></br>
                            <br></br>
                            <input className="input" value={user.mobileNumber} type="tel" name="mobileNumber" placeholder="Phone*" aria-required="true" onChange={handleInputs}/>
                            <br></br>
                            <br></br>
                            <input className="input" value={user.address}  type="text" name="address" placeholder="Address*" aria-required="true" onChange={handleInputs}/>
                            <br></br>
                            <br></br>
                            <select className="input" value={user.vehicle}  name="vehicle" aria-required="true" onChange={handleInputs}>
              
                                <option >Select Vehicle</option>
                                <option value="TVS Apache RTR 200">TVS Apache RTR 200</option>
                                <option value="TVS Apache RTR 160">TVS Apache RTR 160</option>
                                <option value="TVS Apache RTR 160 4V">TVS Apache RTR 160 4V</option>
                                <option value="TVS Apache RTR 180">TVS Apache RTR 180</option>
                                <option value="TVS Jupiter">TVS Jupiter </option>
                                <option value="TVS Jupter 125">TVS Jupiter 125</option>
                                <option value="TVS Star City+">TVS Star City+</option>
                                <option value="TVS Raider">Tvs Raider</option>
                                <option value="TVS Sport">TVS Sport</option>
                                <option value="TVS XL100">TVS XL100</option>
                                <option value="TVS Ronin">TVS Ronin</option>
                            </select>
                            <input type="checkbox" className="checkbox" id="terms&conditions" /> 
                            <label for="terms&conditions" className="terms-conditions">I accept the terms & conditions and authorise to Jai Maa Motors to contact me via SMS, email, WhatsApp and other modes of communication</label>
                            {/* <input type="submit" role="button" onclick={thanks} className="btn-lg form-button" /> */}
                            <button type="submit" onClick={PostData} className="btn-lg form-button" >Submit</button>
                        </form>
                    </div>
                    </div>
            </div>
            <br />
            <br />
        </div>
    
    )
}
export default BookVehicleForm;