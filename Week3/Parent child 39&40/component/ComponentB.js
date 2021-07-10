import React, { useState,useEffect } from 'react'

import { Message } from './Message';

export default function ComponentB()
{
    const[det,setDet]= useState();

    useEffect(() =>{
        Message.getMessage().subscribe(x=>{
            setDet(x);                               
        });
    },[det])

    return(
        <div>
            <h1> Details</h1>
             {/* <h2>{JSON.stringify(det)}</h2>  */}
             <table border="5px" className="ap" >
                
                 <tr><th>FirstName</th> <th>LastName</th><th>Age</th><th>Gender</th><th>E-mail</th></tr>
                 <tr>      
        <td> {det &&  <div> {det.Text.fname}</div>}</td>
        <td> {det &&  <div> {det.Text.lname}</div>}</td>
            < td>{det &&  <div>{det.Text.age}</div>}</td>
           <td> {det &&  <div>{det.Text.Gender}</div>}</td>
            <td>{det &&  <div>{det.Text.email}</div>}</td>
            
            </tr>
            
            </table>
        </div>
    )

}