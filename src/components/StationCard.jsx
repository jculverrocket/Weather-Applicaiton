import React from "react";
import {
    Link
  } from "react-router-dom";

const StationCard = (props) => {
    return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title"> {props.data.ID}</h5>
            <Link to={`station/${props.data.ID}`}>Details</Link>
        </div>
    </div>
    )

}

export default StationCard;