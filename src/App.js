import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { url } from './helpers';

function App() {

const [weatherData, setWeatherData] = useState([])
const [errorMessage, setErrorMessage] = useState(null)

const fetchWeatherData = () => {
  fetch(url)
  .then(resp => resp.json())
  .then(data => 
    setWeatherData(data)
  )
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
