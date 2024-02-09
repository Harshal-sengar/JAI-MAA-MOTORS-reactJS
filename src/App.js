import React from "react";
import { Route, Routes } from "react-router-dom";
import BookVehicle from "./routes/BookVehicle";
import CustomerSupport from "./routes/CustomerSupport";
import Home from "./routes/Home";
import ServiceAppointment from "./routes/ServiceAppointment";
import UserManual from "./routes/UserManual";
import Moped from "./pages/Moped";
import ComfortKS from "./Models/Moped/ComfortKS";
import ComfortES from "./Models/Moped/ComfortES";
import HeavyDuty from "./Models/Moped/HeavyDuty";
import HeavyDutyES from "./Models/Moped/HeavyDutyES";
import WinEdition from "./Models/Moped/WinEdition";
import Radeon from "./pages/Radeon";
import Sport from "./pages/Sport";
import CityPlus from "./pages/CityPlus";
import Raider from "./pages/Raider";
import Ronin from "./pages/Ronin";
import ApacheSeries from "./pages/ApacheSeries";
import Rtr2004v from "./Models/Apache/Rtr2004v";
import Rtr180 from "./Models/Apache/Rtr180";
import Rtr1604v from "./Models/Apache/Rtr1604v";
import Rtr160 from "./Models/Apache/Rtr160";
import Scootypep from "./pages/Scootypep";
import JupiterSeries from "./pages/JupiterSeries";
import Jupiter from "./Models/Jupiter/Jupiter";
import JupiterClassic from "./Models/Jupiter/JupiterClassic";
import JupiterZX from "./Models/Jupiter/JupiterZX";
import JupiterZXSmartXonnect from "./Models/Jupiter/JupiterZXSmartXonnect";
import JupiterZXDrumSmartXonnect from "./Models/Jupiter/JupiterZXDrumSmartXconnect";

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

                    <Route path="/pages/radeon" element={<Radeon></Radeon>}></Route>
                    <Route path="/pages/sport" element={<Sport></Sport>}></Route>
                    <Route path="/pages/cityplus" element={<CityPlus></CityPlus>}></Route>
                    <Route path="/pages/raider" element={<Raider></Raider>}></Route>
                    <Route path="/pages/ronin" element={<Ronin></Ronin>}></Route>

                    <Route path="/pages/scootypep" element={<Scootypep></Scootypep>}></Route>
                    <Route path="/Models/Jupiter" element={<JupiterSeries></JupiterSeries>}></Route>
                    <Route path="/Models/Jupiter/Jupiter" element={<Jupiter></Jupiter>}></Route>
                    <Route path="/Models/Jupiter/JupiterZX" element={<JupiterZX></JupiterZX>}></Route>
                    <Route path="/Models/Jupiter/Classic" element={<JupiterClassic></JupiterClassic>}></Route>
                    <Route path="/Models/Jupiter/ZXDrumSmartXonnect" element={<JupiterZXDrumSmartXonnect></JupiterZXDrumSmartXonnect>}></Route>
                    <Route path="/Models/Jupiter/ZXSmartXonnect" element={<JupiterZXSmartXonnect></JupiterZXSmartXonnect>}></Route>

                    <Route path="/Models/apache" element={<ApacheSeries></ApacheSeries>}></Route>
                    <Route path="/Models/Apache/RTR2004V" element={<Rtr2004v></Rtr2004v>}></Route>
                    <Route path="/Models/Apache/RTR180" element={<Rtr180></Rtr180>}></Route>
                    <Route path="/Models/Apache/RTR1604V" element={<Rtr1604v></Rtr1604v>}></Route>
                    <Route path="/Models/Apache/RTR160" element={<Rtr160></Rtr160>}></Route>

                    <Route path="/pages/moped" element={<Moped></Moped>}></Route>
                    <Route path="/Models/Moped/ComfortKS" element={<ComfortKS></ComfortKS>}></Route>
                    <Route path="/Models/Moped/ComfortES" element={<ComfortES></ComfortES>}></Route>
                    <Route path="/Models/Moped/HeavyDuty" element={<HeavyDuty></HeavyDuty>}></Route>
                    <Route path="/Models/Moped/HeavyDutyES" element={<HeavyDutyES></HeavyDutyES>}></Route>
                    <Route path="/Models/Moped/WinEdition" element={<WinEdition></WinEdition>}></Route>

                </Routes>
            </>
        </div>
    )
}
export default App;