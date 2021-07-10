import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function Student() {
    const [studenst,setStudents]=useState([]);
    useEffect(() => {
        const fetchData=async ()=>{
            const result =await axios.get("http://localhost:3001/studenst");
    
        setStudents(result.data);
        };
        fetchData();
    }, []);
    console.log(studenst)
    return (
        <div>
            <h1 className="heading">Student Details</h1>
            <div className="container">
                <div className="det">
                    {studenst &&
                    studenst.map((Student)=>(
                        <div className="det">
                        <h2>{Student.name}</h2> 
                        <p>{Student.email}</p>
                        <p>{Student.regno}</p>
                        <p>{Student.id}</p>
                        </div>   
                    ))}
                    </div>
                    </div>
                </div>
                    
        
    )
}
