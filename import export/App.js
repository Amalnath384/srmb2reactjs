import logo from './logo.svg';
import React from 'react';
import './App.css';
import MylabelClass from "./Component/MylabelClass";
import MylabelFunction from "./Component/MylabelFunction";
import MyUserRegistration from './Component/MyUserRegistration';

function App() {
  const dte = new Date(2000,4,4);
  const value = dte.toISOString();
  const users = [
    {id:1,name:"test2"},
    {id:2,name:"test3"},
    {id:3,name:"test4"},
  ];

  const ssusers = [
    {id:2,name:"ManicBasha"},
    {id:3,name:"Annamalai"},
    {id:4,name:"Kalaiyaan"},
  ];

  const labelName = "SomeLabelName";

  return (
    <div>
       <h1 className="header">My First React on {value}</h1> 
      
      <MylabelClass />
      <hr />
      
      <MylabelFunction data={ssusers} ts={dte} ln={labelName}/> 
      <hr />
      <MyUserRegistration/>
    </div>
    //React.createElement("div",{},React.createElement("h1",{className:'header'},"My First React-".concat(value)))
  );
}

export default App;