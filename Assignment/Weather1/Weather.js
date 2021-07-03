import React, { useState } from "react";
import './Weather.css';

export default function Weather() {
    const [mydata] = useState({
        Temp: "41'c",
          humidity: "70%",
          precip: "14%",
          wind: "15km/h",
           City: "chennai",
      });
    
     
    
      return (
        <div>
          <h1>Weather Report</h1>
          <h1>City:{mydata.City}</h1>
          <h2>Temp:{mydata.Temp}</h2>
          <h2>Humi:{mydata.Temp}</h2>
          <h2>prei:{mydata.precip}</h2>
          <h2>Wind:{mydata.wind}</h2>
          
          
        </div>
      );
    }
