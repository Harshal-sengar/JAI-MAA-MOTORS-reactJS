import React from "react";
import BookVehicleForm from "../components/BookVehicleForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./BookVehicle.css";

function BookVehicle()
{
    return (
        <div>
            <Navbar></Navbar>
            <BookVehicleForm></BookVehicleForm>
            <Footer></Footer>
        </div>
    );
}
export default BookVehicle;