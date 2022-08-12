import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import StationList from "./StationList";
import WeatherData from './WeatherData'

const Navigation = (props) => {
   
return (
    <div>
        <Router>
            <Routes>
                <Route default path="/" element={<StationList stationData={props.stationData}/>}/>
                <Route path="/station/:id" element={<WeatherData />}/>
            </Routes>
        </Router>
    </div>
    )
}

export default Navigation;