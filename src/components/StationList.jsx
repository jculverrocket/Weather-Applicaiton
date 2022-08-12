import React from "react";
import StationCard from "./StationCard";

const StationList = (props) => {
    console.log(props, 'props')
    return (
        <div>
        { 
            props.stationData.map(data => {
                return (
                    <StationCard data={data}/> 
                )})   
        }
        </div>
    )
}


export default StationList;