import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceAppointmentForm from "../components/ServiceAppointmentForm";
import "./ServiceAppointment.css";

function ServiceAppointment()
{
    return (
        <div>
            <Navbar></Navbar>
            <ServiceAppointmentForm></ServiceAppointmentForm>
            <Footer></Footer>
        </div>
    )
}
export default ServiceAppointment;