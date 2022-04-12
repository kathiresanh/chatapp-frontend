import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from "formik";
// import { RegisterNewUser } from "./features/counter/cart-action";
import { useNavigate } from "react-router-dom";
import { showAlert } from "./features/Statecontrol";
// import { openLogin } from "./features/counter/Notification-slice";
// import { socket } from "./features/ApiActions";
import { Link } from "react-router-dom";
import axios from "axios";



export default function Signup(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch()


  //   const joinRoom = ()=>{

  //     if(userName !== "" && room !== ""){

  //       setlogin(true)
  //     }
  // }




  // formik library for form-validation

  const formik = useFormik({
    initialValues: {
      name: "",
      email: '',
      phone: "",
      password: "",
      isloggedin: false,
    },
    onSubmit: async (values) => {
      try {
        axios.post("https://chatappend.herokuapp.com/register", values).then(function (response) {
          console.log(response)
          navigate("/")
        })
      } catch (error) {
        console.log(error)
        alert("something went wrong try again")
      }

    },
  });


  return (
    <div className="d-flex justify-content-center">
      <div className=" card shadow p-3 mb-5 bg-white col-sm-6" id="register-page">
        <div className="d-flex justify-content-center">
          <div className="card-title"><h4>REGISTER</h4></div>
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
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              label="User Name"

            />
            <TextField
              required
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              label="User email"

            />
            <TextField
              required
              id="phone"
              name="phone"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.phone}
              label="Phone Number"

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


            <Button type="submit" variant="contained">Register</Button>

            <div className="d-flex justify-content-end p-2">
              <Link to="/" style={{ textDecoration: "none" }}><Button variant="text">Go to Login</Button></Link>

            </div>

          </Box>


        </div>

      </div>
    </div>

  )
}