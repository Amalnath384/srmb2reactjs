import React,{useState,useEffect} from 'react';
export default function Detail(){
    const[get,setGet]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/deatails").then(res => res.json()).then(data=>{
          console.log(data);
          setGet(data);
        }).catch(e=>{
          console.error("ERR ");
          console.error(e);
        }).finally(()=>{
          console.log("Finally");
        })

    },[])
   

    
    return(
        <div>
          
         <table border="5px">  
           <tr> <td><h4>FirstName</h4></td>
           <td><h4>Last Name</h4></td>
           <td><h4>Email</h4></td>
           <td><h4>Age</h4></td>
           <td><h4>Gender</h4></td>
           <td><h4>Password</h4></td></tr>
              {get.map((x) => {
                return <tr><td><label key={x.id}>{x.fname}</label></td>
                <td><label key={x.id}>{x.lname}</label></td>
                <td><label key={x.id}>{x.email}</label></td>
                <td><label key={x.id}>{x.age}</label></td>
                <td><label key={x.id}>{x.gender}</label></td>
                <td><label key={x.id}>{x.gender}</label></td>
                
                </tr>
              })}
              
              
            </table>
            
        </div>
    )
}