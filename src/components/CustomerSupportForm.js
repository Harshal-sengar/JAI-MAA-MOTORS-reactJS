import React, {useState} from "react";
import {  useNavigate } from "react-router-dom";

function CustomerSupportForm()
{
  const navigate=useNavigate();
    const [user, setUser]=useState({
      name:"", number:"", area:"", subject:""
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
      
      const { name, number, area, subject} = user;

      if (number.length !== 10) {
        alert('Phone number should be exactly 10 characters');
        return;
      }

       fetch('/CustomerSupport', {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name, number, area, subject
        })
        
      });

      alert('Thanks For Your FeedBack');
      alert("We will contact you sortly");
      navigate('/');
      
    }
      function cancel()
      {
        navigate('/');
      }
    return (
        <>
            <div className="mainform ">
            <form   method="POST">
              <h1><strong>Complain Form</strong></h1>
              <p style={{color:"#F15412"}} >Please send us details about the incident you would like to report. Our Complaint Center will analyze your complaint and take the appropriate measures in order that the reported situation will not occur at any other time in the future.
               </p>
               <hr />
               <div className="form-group">
                <label for="fname"><b>Name:</b></label>
                <input type="text" onChange={handleInputs} value={user.name} className="form-control customer"  placeholder="Enter name" name="name" />
              </div>
             <br />
             <div className="form-group">
                <label for="phoneNo"> <b>Phone Number: </b> </label>
                <input  type="tel" onChange={handleInputs} value={user.number} className="form-control customer" placeholder="Enter contact Number" name = "number" />
              </div>
              <label for="Select Your Area"><b>Select Your Area</b></label>
              <select onChange={handleInputs} value={user.area} className="customer" id="area" name="area" >
                <option>Select Area</option>
                <option value="service">Service</option>
                <option value="Vehicle">Purchasing</option>
              </select>
              <label for="subject"><b>Complaint Details:</b></label>
              <textarea onChange={handleInputs} value={user.subject} className="customer" id="subject" name="subject" placeholder="Enter your complaint details......." style={{height:"200px"}} ></textarea>
              
              <button type="submit" onClick={PostData} className="btn btn-outline-danger" >Submit</button>
              <a href="/"><button onclick={cancel} type="button" className="btn btn-outline-success">Cancel</button></a>
            </form>
          </div>
        </>
    )
}
export default CustomerSupportForm;