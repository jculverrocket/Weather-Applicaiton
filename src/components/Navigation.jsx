import React from "react";
import {
    BrowserRouter as Router,
    Link,
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
                <Route default path="/" element={<StationList weatherData={props.weatherData}/>}/>
                <Route path="/station/:id" element={<WeatherData />}/>
            </Routes>
        </Router>
    </div>
    )
}

export default Navigation;