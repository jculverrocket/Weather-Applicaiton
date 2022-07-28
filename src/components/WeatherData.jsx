import React, { useState, useEffect } from 'react';

const WeatherData = () => {
    const id = window.location.pathname.split("/").pop()
    const [weatherHistory, setWeatherHistory] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    const fetchStationData = () => {
        fetch(`http://localhost:8000/weatherData/${id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data, 'data test')
          setWeatherHistory(data.temp)
        })
        .catch(err => setErrorMessage(err.message))
      }
      
      useEffect(() => {
        fetchStationData()
      },[])

      const convertDate = (timestamp) => {
        return new Date(timestamp);
      }
      

    return (
        <div>
            <ul class="list-group">
                {
                    weatherHistory.map(item =>
                        {
                        return(
                            <li class="list-group-item">
                            <h5>{`${convertDate(item.date)}`}</h5>
                            <p>high:{item.fahrenheit.high} F</p>
                            <p>low:{item.fahrenheit.low} F</p>
                            <p>high:{item.celsius.high} C</p>
                            <p>low:{item.celsius.low} C</p>
                        </li>
                        )}
                      
                    )
                }

            </ul>
        </div>
    )

}


export default WeatherData;