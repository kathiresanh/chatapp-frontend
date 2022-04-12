import { useEffect, useState } from 'react';
import Homepage from './Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Chat from './Chat';
import './App.css';
import Trial from './Trial';
import Loginpage from './Login';
import Signup from "./Signup"
import Forgotpassword from "./Forgotpassword"
import Online from "./Online"
import Signout from "./Signout"

const { io } = require("socket.io-client");




const socket = io("https://chatappend.herokuapp.com", { transports: ["websocket"] });

function App() {

  //   const [userName,setUserName] = useState("")
  //   const [room,setRoom] = useState("")
  //   const [isloggedin,setlogin] = useState(false)

  //   const joinRoom = ()=>{

  //     if(userName !== "" && room !== ""){
  //       socket.emit("join_room", room)
  //       setlogin(true)
  //     }
  // }


  return (
    <Router>
      <div className='container mt-4'>
        {/* <Homepage></Homepage> */}
        {/* <Loginpage></Loginpage> */}
        <Routes>
         <Route path='/register' element={<Signup ></Signup>}></Route> 
         <Route path='/' element={<Loginpage></Loginpage>}></Route>
          <Route path='forgot-password' element={<Forgotpassword></Forgotpassword>}></Route>
          <Route path='/signout' element={<Signout></Signout>}></Route>
        </Routes>
        <Routes>
        <Route path="/online" element={<Online></Online>}></Route>
        <Route path="/chat" element={<Trial socket={socket}></Trial>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;