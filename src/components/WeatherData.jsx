import React, { useState, useEffect } from 'react';
import { getStationData } from '../helpers'

const WeatherData = () => {
    const id = window.location.pathname.split("/").pop()
    const [weatherHistory, setWeatherHistory] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    const fetchStationData = () => {
        // getStationData(id)
        getStationData()
        .then(resp => resp.json())
        .then(data => {
          setWeatherHistory(data.Date)
        })
        .catch(err => setErrorMessage(err.message))
      }
      
      useEffect(() => {
        fetchStationData()
      },[])
      
    return (
        <div>
            <ul class="list-group">
                {
                    weatherHistory.map(item =>
                        {
                        return(
                            <li class="list-group-item">
                            <h5>{item.Date}</h5>
                            <p>{item.Temp} Fahrenheit </p>
                            <p>low:{item.TempC} Celsius</p>
                            <p>high:{item.Prec} Precipitation</p>
                        </li>
                        )}
                      
                    )
                }

            </ul>
        </div>
    )

}


export default WeatherData;