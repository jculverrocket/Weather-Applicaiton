import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { getStations } from './helpers';

function App() {

const [stationData, setStationData] = useState([]);

const fetchStationData = () => {
   getStations()
  .then(resp => resp.json())
  .then(data => {
    setStationData(data)
  })
  .catch(err => console.log(err.message))
}

useEffect(() => {
  fetchStationData()
},[])

  return (
    <div className="App">
      <h1>Weather Application</h1>
      {stationData.length > 0 &&  <Navigation stationData={stationData}/>}      
    </div>
  );
}

export default App;
