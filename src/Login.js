import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css"
import { useState } from "react";



export default function Loginpage(){

    const navigate = useNavigate();
  
    const dispatch = useDispatch()
    
    
       const [emails,setemails] = useState({email:"hkathiresan@gmail.com", password:"kathir"})
 
 let setlogin = ()=>{
   formik.setValues(emails)
  }
 
 
    // formik library for form-validation
   
    const formik = useFormik({
        initialValues: {
          email: '',
          password:"",
        },
        onSubmit:async (values) => {
          
            try {
                axios.post("https://chatappend.herokuapp.com/login",values).then(function(response){
             
                  localStorage.setItem("token",response.data.tokens)
                  localStorage.setItem("name",response.data.name)
                  localStorage.setItem("email",response.data.email)
                  navigate("/chat")
                })
               } catch (error) {
                 console.log(error)
                 alert("invalid username or password")
               }
              
        },
      });


    return(
        <div className="d-flex justify-content-center" >
               <div className=" card shadow p-3  col-sm-6" id="Loginpage">
               <div className="d-flex justify-content-center">
            <div className="card-title"><h2>CHAT EASY</h2></div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="card-title"><h4>LOGIN</h4></div>
            </div>
            <div className="d-flex justify-content-center p-3">
         
            <Box
      component="form"
      onSubmit={formik.handleSubmit}
           sx={{
        '& > :not(style)': { m: 1, width: '80%' },
      }}
    
      autoComplete="on"
    >
                 <TextField
          required
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          label="User email"
    
        />
         {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <TextField
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          required
          label="Password"
          autoComplete="current-password"
        /> 
   
        
             <Button type="submit" variant="contained">Login</Button>
         
             <div className="d-flex justify-content-end p-2">
      <Link to="/register" style={{textDecoration:"none"}}><Button variant="text" >New user?</Button></Link>
      <Link to="/forgot-password" style={{textDecoration:"none"}}> <Button size="small" >Forgot password</Button></Link>
          <div className="d-flex justify-content-end p-2"><button className="btn btn-primary" onClick={()=>{setlogin()}}>Credentials</button></div>
       </div>
        
    </Box>
  
  
                </div>     
                </div>

        </div>
    )
}
