import React from "react";
import StationCard from "./StationCard";

const StationList = (props) => {
    return (
        <div>
        { 
            props.weatherData.map(data => {
                return (
                    <StationCard data={data}/> 
                )})
        }
        </div>
    )
}


export default StationList;