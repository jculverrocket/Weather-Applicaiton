import React, { useState, useEffect } from 'react';
import { getStationData } from '../helpers'

const WeatherData = () => {
    const id = window.location.pathname.split("/").pop()
    const [weatherHistory, setWeatherHistory] = useState([])

    const fetchStationData = () => {
        getStationData(id)
        .then(resp => resp.json())
        .then(data => {
          setWeatherHistory(data.out_param_2.Date)
        })
        .catch(err => console.log(err))
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
                            <p>{item.TempC} Celsius</p>
                            <p>{item.Prec} Precipitation</p>
                        </li>
                        )}
                      
                    )
                }

            </ul>
        </div>
    )

}


export default WeatherData;