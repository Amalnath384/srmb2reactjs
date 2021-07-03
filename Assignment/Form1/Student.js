import React,{useState} from 'react'
import './Student.css';

export default function Student() {
    const initialvalues={
        fname:'',
        lname:'',
        age:'',
        email:'',
        password:'',
        Gender:-1
    }
    const [formValues,setFormvalues]=useState(initialvalues);
    const [formErrors,setFormErrors]=useState({});

    const gender=[
        {id:1,name:"Male"},
        {id:2,name:"Female"}
    ]

    const handleDoSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        console.log(formValues);
        console.log("Submitted");      
    }

    const handleOnChange=(event)=>{
        const {name,value}=event.target;

        setFormvalues((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        });

    }
    const validate=(values)=>{
        let errors={};
        if(values.fname==""){
            errors.fname="FirstName cannot be empty"
        }
        if(values.lname==""){
            errors.lname="Lastname cannot be empty"
        }
        if(values.age==""){
            errors.age="Age cannot be empty"
        }
        if(values.Gender<0){
            errors.Gender="Please Select Gender"
        }
        if(values.email==""){
            errors.email="Email cannot be empty"
        }
        if(values.password==""){
            errors.password="Password cannot be empty"
        }
       
        return errors;
    }
    return (
        <div>
           <form onSubmit={handleDoSubmit} noValidate>
           <div>
                   <label>First Name</label>
                   <input value={formValues.fname}name="fname" id="fname" onChange={handleOnChange}/>
                   {
                       formErrors.fname && <span className='error'>{formErrors.fname}</span>
                   }
               </div>
               <div>
                   <label>Last Name</label>
                   <input value={formValues.lname}name="lname" id="lname" onChange={handleOnChange}/>
                   {
                       formErrors.lname && <span className='error'>{formErrors.lname}</span>
                   }
               </div>
               <div>
                   <label>Age</label>
                   <input value={formValues.age}name="age" type="number" id="age" onChange={handleOnChange}/>
                   {
                       formErrors.age && <span className='error'>{formErrors.age}</span>
                   }
               </div>
              
               <div>
                   <label>Gender</label>
                   <select namr="Gender" onChange={handleOnChange}>
                       <option value="-1">Please select a gender</option>
                       {
                           gender.map(x=>{
                               return<option value={x.id}>{x.name}</option>
                           })
                       }
                   </select>
                   {
                       formErrors.gender && <span className='error'>{formErrors.gender}</span>
                   }
               </div>
               <div>
                   <label>Email</label>
                   <input value={formValues.email}name="email" id="email" onChange={handleOnChange}/>
                   {
                       formErrors.email && <span className='error'>{formErrors.email}</span>
                   }
               </div>
               <div>
                   <label>Password</label>
                   <input value={formValues.password}name="password" type="passwoed" id="password" onChange={handleOnChange}/>
                   {
                       formErrors.password && <span className='error'>{formErrors.password}</span>
                   }
               </div>
               <div>
                   <button type="submit">Submit</button>
               </div>
           </form>
        </div>
    )
}
