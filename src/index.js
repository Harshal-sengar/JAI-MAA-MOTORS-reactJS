import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(success, failure)
}
function success(location){
    console.log(location);
}
function failure(error)
{
    console.log(error);
}

ReactDOM.render(<BrowserRouter>
    <App></App>
    </BrowserRouter>
, document.getElementById('root'));