import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from '../assets/Rainy.svg'
import partly_cloudy from '../assets/PartlyCloudy.svg'
import cloudy from '../assets/Cloudy.svg'



function WeatherCard({data: { city, temperature, forecast }}) {
  
  const weather = 
  forecast === 'Sunny' ? sunny : 
  forecast === 'Rainy' ? rainy : 
  forecast === 'Partly cloudy' ? partly_cloudy : 
  forecast === 'Cloudy' ? cloudy: 
  null
 
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={weather}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{city}</h3>
        <h5 className="card-text">{temperature}</h5>
        <h5 className="card-text">{forecast}</h5>
      </div>
    </div>
  );
}

export default WeatherCard;
