import {useFormik} from 'formik';
import * as Yup from 'yup';
import React, { useState } from "react";
export default function StudentFormk() {
    const validationSchema = Yup.object({
        firstname : Yup.string().required("Firstname is mandatorty"),
        lasttname : Yup.string().required("Lastname is mandatorty"),
        studentid:Yup.string().required("Student id is mandatorty"),
        email : Yup.string().email("Invalid").required("Please enter a valid email"),
        age : Yup.string().typeError("Enter Valid age").min(10,"Min age is 10"),
        password:Yup.string().required("plaese enter the password")

    })

    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            firstname:'',
            lasttname:'',
            studentid:'',
            age:0,
            email:'',
            password:''
        },

        
        validationSchema,
        onSubmit(values){
            console.log("Submitted");
            console.log(values);
        }
    })


    const Gender = [
        { id: 1, name: "Male"},
        { id: 2, name: "Female"},
        
      ];
      const [Gen, setGen] = useState(Gender.name);
    
       const handleOnChange = (event) => {
         setGen(event.target.value);
       };

       function handleOnClick(){
           alert('Details submitted');
       }
    return (
        <div>
        Student Details
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstname" onChange={handleChange} values={values.firstname}/>
                    <div style={{color:"red"}}> {errors.firstname ? errors.firstname : null}</div>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastname" onChange={handleChange} values={values.lastname}/>
                    <div style={{color:"red"}}> {errors.lastname ? errors.lastname : null}</div>
                </div>
                <div>
                    <label>Student id</label>
                    <input type="text" name="studentid" onChange={handleChange} values={values.studentid}/>
                    <div style={{color:"red"}}> {errors.studentid ? errors.studentid : null}</div>
                </div>
                <label>Gender</label>
      <select name="city" onChange={handleOnChange}>
        <option value="-1">Please select Gender</option>
        {Gender.map((x) => {
          return <option value={x.name}>{x.name}</option>;
        })}
      </select>
                <div>
                    <label>Age</label>
                    <input type="number" name="age" onChange={handleChange} values={values.age}/>
                    <div style={{color:"red"}}> {errors.age ? errors.age: null}</div>
                </div>
                <div>
                    <label>e-mail</label>
                    <input type="email" name="email" onChange={handleChange} values={values.email}/>
                    <div style={{color:"red"}}> {errors.email ? errors.email : null}</div>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange} values={values.password}/>
                   <div style={{color:"red"}}> {errors.password ? errors.password : null}</div>
                </div>

                <button type='submit' onClick={handleOnClick}>Submit</button>
            </form>
        </div>
    )
}