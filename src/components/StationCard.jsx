import React from "react";
import {
    Link
  } from "react-router-dom";

const StationCard = (props) => {
    return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title"> {props.data.weather_station}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.data.region}</h6>
            <Link to={`station/${props.data.id}`}>Details</Link>
        </div>
    </div>
    )

}


export default StationCard;