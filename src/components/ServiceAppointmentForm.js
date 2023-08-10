import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

function ServiceAppointmentForm()
{
    const navigate=useNavigate();
    const [user, setUser]=useState({
        name:"", number:"", address:"", vehicle:"", registrationNumber:"", date:""
      });
    const [appointmentNumber, setAppointmentNumber]=useState(0);
  
      let name, value;
      const handleInputs=(e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
  
        setUser({...user, [name]:value});
      }
      const PostData  = async(e) =>{
        setAppointmentNumber(Number(appointmentNumber)+1);
      
        e.preventDefault();
        
        const { name, number, address, vehicle, registrationNumber, date} = user;
  
         fetch('/ServiceAppointment', {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name, number, address, vehicle, registrationNumber, date
          })
          
        });
        
        alert("your appointment number is "+appointmentNumber);
        
        
        navigate('/');
        
      }
    
    return(
        <div>
            <div className="row">
                <div className="col-sm-5 image">
                    <img src="https://www.tvsmotor.com/-/media/Feature/Book-A-Ride/bs-vi-range.jpg" alt="" width="550px" className="tvsimage"  />
                </div>
                <div className="col-sm-5 form">
                    <div className="inside-form ">
                        <h1 style={{fontWeight:"bold"}} >Book Service  Online</h1>
                        <p>Book your vehicle Service Appointment now</p>
                        <form action="/ServiceAppointment" method="post" >
                            <input type="text" onChange={handleInputs} value={user.name} name="name" placeholder="Name*" aria-required="true" />
                            <br />
                            <br />
                            <input type="tel" onChange={handleInputs} value={user.number} name="number" placeholder="Phone*" />
                            <br />
                            <br />
                            <input type="text" onChange={handleInputs} value={user.address} name="address" placeholder="Address*" />
                            <br />
                            <br />
                            <select value={user.vehicle} onChange={handleInputs} name="vehicle">
            
                                <option >Select Vehicle</option>
                                <option value="TVS Apache RTR 180">TVS Apache RTR 200</option>
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
                            <br /> 
                            <br />
                            <input type="text" value={user.registrationNumber} onChange={handleInputs} name="registrationNumber" placeholder="Vehicle Registration Number*" />
                            <br />
                            <br />
                            <br />
                            <label> Appointment Date:</label>
                            <input value={user.date} onChange={handleInputs} type="date" name="date" />
                            <input type="checkbox" className="checkbox" id="terms&conditions" /> 
                            <label for="terms&conditions" className="terms-conditions">I accept the terms & conditions and authorise to Jai Maa Motors to contact me via SMS, email, WhatsApp and other modes of communication</label>
                            
                            <button type="submit" onClick={PostData} className="btn-lg form-button" >Submit</button>
                        </form>
                        
                        {/* <!-- <button type="submit" className="btn-lg form-button" >Submit</button> --> */}
                    </div>
                    
                </div>
                
            </div>
            
            <br />
            <br></br>
        </div>
    )
}
export default ServiceAppointmentForm;