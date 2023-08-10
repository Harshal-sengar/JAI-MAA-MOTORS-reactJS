import React from "react";
import { Route, Routes } from "react-router-dom";
import BookVehicle from "./routes/BookVehicle";
import CustomerSupport from "./routes/CustomerSupport";
import Home from "./routes/Home";
import ServiceAppointment from "./routes/ServiceAppointment";
import UserManual from "./routes/UserManual";

function App()
{
    return (
        <div>
            <>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/bookvehicle" element={<BookVehicle></BookVehicle>}></Route>
                    <Route path="/serviceappointment" element={<ServiceAppointment></ServiceAppointment>}></Route>
                    <Route path="/usermanual" element={<UserManual></UserManual>}></Route>
                    <Route path="/customersupport" element={<CustomerSupport></CustomerSupport>}></Route>
                    
                </Routes>
            </>
        </div>
    )
}
export default App;