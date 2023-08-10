import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomerSupportForm from "../components/CustomerSupportForm";
import "./CustomerSupport.css";

function CustomerSupport()
{
    return (
        <div>
            <Navbar></Navbar>
            <CustomerSupportForm></CustomerSupportForm>
            <Footer></Footer>
        </div>
    )
}
export default CustomerSupport;