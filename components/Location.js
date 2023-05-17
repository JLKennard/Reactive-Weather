import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from '../assets/Rainy.svg'
import partly_cloudy from '../assets/PartlyCloudy.svg'
import cloudy from '../assets/Cloudy.svg'

function Location({data, location, setLocation}){

    const foundCity = data.find((element) => element.city === location)

    const weather = 
    foundCity.forecast === 'Sunny' ? sunny : 
    foundCity.forecast === 'Rainy' ? rainy : 
    foundCity.forecast === 'Partly cloudy' ? partly_cloudy : 
    foundCity.forecast === 'Cloudy' ? cloudy: 
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
            <h3 className="card-title">{foundCity.city}</h3>
            <h5 className="card-text">{foundCity.temperature}</h5>
            <h5 className="card-text">{foundCity.forecast}</h5>
          </div>
        </div>
      );
}

export default Location