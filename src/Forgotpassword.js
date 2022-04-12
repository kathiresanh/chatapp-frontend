import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from "formik";
// import { login,ChangePassword } from "./features/counter/cart-action";
import { useNavigate } from "react-router-dom";
// import { openLogin } from "./features/counter/Notification-slice";
import { Link } from "react-router-dom";
import axios from "axios";



export default function Forgotpassword(){

    const navigate = useNavigate();
    
    const dispatch = useDispatch()
    // formik library for form-validation

    const formik = useFormik({
        initialValues: {
          email:'',
          password:"",
        
        },
        onSubmit: async (values) => {
            try {
                axios.put("https://chatappend.herokuapp.com/forgot-password", values).then(function (response) {
                  console.log(response)
                  navigate("/")
                })
              } catch (error) {
                console.log(error)
                alert("invalid details")
              }
        },
      });

 return(
    <div className="d-flex justify-content-center">
          <div className=" card shadow p-3 mb-5 bg-white col-sm-6" id="forgotpassword-page">
    <div className="d-flex justify-content-center">
    <div className="card-title"><h4>CHANGE PASSWORD</h4></div>
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
  label="New Password"
  autoComplete="current-password"
/> 


     <Button type="submit" variant="contained">Change Password</Button>
 
     <div className="d-flex justify-content-end p-2">
     <Link to="/" style={{textDecoration:"none"}}><Button variant="text">Go to Login</Button></Link>

</div>

</Box>


        </div>     

        </div>
</div>
 )
}