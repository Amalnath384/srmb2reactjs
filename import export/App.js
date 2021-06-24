import logo from './logo.svg';
import React from 'react';
import './App.css';
import MylabelClass from "./Component/MylabelClass";
import MylabelFunction from "./Component/MylabelFunction";

function App() {
  const dte = new Date(2000,4,4);

  return (
    <div>
      <h1 className='header'>My First React on {dte.toString()}</h1>
     
      <hr />
      <MylabelClass />
      <hr />
      <hr />
      <MylabelFunction />
      
    </div>
    //React.createElement("div",{},React.createElement("hi",{className:'header'},"My First React".concat(dte.toString())))
  );
}

export default App;