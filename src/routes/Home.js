import React from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Vehicle from "./Vehicle";
import BacktoTopButton from "../components/BacktoTopButton";

function Home()
{
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Vehicle></Vehicle>
            <Footer></Footer>
            <BacktoTopButton></BacktoTopButton>
        </div>
    )
}
export default Home;