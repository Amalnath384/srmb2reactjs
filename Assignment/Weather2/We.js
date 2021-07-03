
import React, { useState } from "react";
import Select from "react-select";
import  "./We.css";
export default function We() {

  const details = [
    {
      Temp: "34'c",
      humidity: "75%",
      precip: "14%",
      wind: "4km/h",
      label: "chennai",
       
    },
    {
      Temp: "36'c",
      humidity: "78%",
      precip: "13%",
      wind: "5km/h",
      label: "Banglore"
    },
  ];
  const [data, setData] = useState(details.Temp);
  const [ref, setref] = useState(details.humidity);
  const [obj, setobj] = useState(details.precip);
  const [abc, setabc] = useState(details.wind);
  const handleChange = (event) => {
    setData(event.Temp);
    setref(event.humidity);
    setobj(event.precip);
    setabc(event.wind);
  };


  return (
    <div>
      Weather Report
      <br></br>
      <div style={{ width: "40%", marginLeft: "30%" }}>


        <Select name="city" options={details} onChange={handleChange} />
        <br></br>
        {data ? (
         <h1>Temp: {data}
         <h1>Humidity: {ref}</h1> 
          <h1>Wind : {abc}</h1>
           <h1> precip: {obj}</h1>
           </h1>  
        ) : (
          <p>Nothing to show.</p>
        )}

      </div>

    </div>

  )
}