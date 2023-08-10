import React, { useEffect, useState } from "react";
import "./Backbutton.css";

function BacktoTopButton()
{
    const [backToTopButton, setBackToTopButton]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY >100)
            {
                setBackToTopButton(true);
            }
            else
            {
                setBackToTopButton(false);
            }
        })
    },[])

    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return (
        <>
            {backToTopButton && (
                <button onClick={scrollUp} className="back-button">^</button>
            )}
        </>
    )
}
export default BacktoTopButton;