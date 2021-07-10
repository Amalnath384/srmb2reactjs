import React,{useState} from 'react'
import ErrorMessage from './ErrorMessage';
import './Student.css';
import { Message } from './Message';

export default function Student() {
    const [det,setDet]=useState({
        fname:'',
        lname:'',
        age:'',
        email:'',
        password:'',
        Gender:-1,   
    });
    
    const [formErrors,setFormErrors]=useState({});
    const [submitted, setSubmitted] = useState(false);
    
    const gender=[
        {id:1,name:"Male"},
        {id:2,name:"Female"}
    ]

    const handleDoSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(det));
        console.log(det);
        console.log("Submitted");
        
        console.log("===" + Object.entries(formErrors).length)

       setSubmitted(true);

       console.log(submitted);
       
        
        
       
     
        
    };

    const handleOnChange=(event)=>{
        const {name,value}=event.target;

        setDet((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        });

    }

    const validate=(values)=>{
        let errors={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(values.fname==""){
            errors.fname="FirstName cannot be empty"
        }
        if(values.lname==""){
            errors.lname="Lastname cannot be empty"
        }
        if(values.age==""){
            errors.age="Age cannot be empty"
        }
        if(values.age>30)
        {
            errors.age = "Enter Valid Age";
        }
        if(values.age<5)
        {
            errors.age = "Enter Valid Age";
        }
        if(values.Gender<0){
            errors.Gender="Please Select Gender"
        }
        if(values.country<0){
            errors.country="Please Select Country"
        }
        if(values.email==""){
            errors.email="Email cannot be empty"
        }else if(!regex.test(values.email)){
            errors.email="Invalid";
        }
        if(values.password==""){
            errors.password="Password cannot be empty"
        }
       
        return errors;
    };
   const sendData=()=>{
        Message.sendMessage(det);
        console.log();
    }
    const resetData=()=>{
        Message.clearMessage();
    }
    return (
        <div className="detail">
            
    
           <form onSubmit={handleDoSubmit} noValidate>
               {submitted}
           <div>
                   <label>First Name</label>
                   <input value={det.fname}name="fname" id="fname" onChange={handleOnChange}/>
                   <ErrorMessage message={formErrors.fname}/>
                  
               </div>
               <div>
                   <label>Last Name</label>
                   <input value={det.lname}name="lname" id="lname" onChange={handleOnChange}/>
                   <ErrorMessage message={formErrors.lname}/>
                   
               </div>
               <div>
                   <label>Age</label>
                   <input value={det.age}name="age" type="number" id="age" onChange={handleOnChange}/>
                   <ErrorMessage message={formErrors.age}/>
                   
               </div>
              
               <div>
                   <label>Gender</label>
                   <select name="Gender" onChange={handleOnChange}>
                       <option value="-1">Please select a gender</option>
                       {
                           gender.map(x=>{
                               return<option value={x.id}>{x.name}</option>
                           })
                       }
                   </select>
                   
                   <ErrorMessage message={formErrors.Gender}/>    
               </div>

               <div>
                   <label>Email</label>
                   <input value={det.email}name="email" id="email" onChange={handleOnChange}/>
                   
                        <ErrorMessage message={formErrors.email}/>
                   
                   
               </div>
               <div>
                   <label>Password</label>
                   <input value={det.password}name="password" type="passwoed" id="password" onChange={handleOnChange}/>
                   
                        <ErrorMessage message={formErrors.password}/>
                   
                  
               </div>
              
               <br></br>
            <button onClick={sendData}>send data</button>
            <br></br>
              
        <div>
            <br></br>
            <button onClick={resetData}>clear Message</button>
        </div>
           </form>
        </div>
    )
}
