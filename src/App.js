import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';

function App() {

const [weatherData, setWeatherData] = useState([])
const [errorMessage, setErrorMessage] = useState(null)

const fetchWeatherData = () => {
  fetch("http://localhost:8000/weatherData")
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    setWeatherData(data)
  })
  .catch(err => setErrorMessage(err.message))
}

useEffect(() => {
  fetchWeatherData()
}, [])

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <Navigation weatherData={weatherData}/>
    </div>
  );
}

export default App;
