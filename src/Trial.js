import React from "react";
import { useEffect, useState } from 'react';
import Chat from './Chat';
import Totaluser from "./Totaluser"


export default function Trial({socket}){


    const [userName,setUserName] = useState(window.localStorage.getItem("name"))
    const [room,setRoom] = useState("kathir123")
    const [isloggedin,setlogin] = useState(false)
    
    const joinRoom = ()=>{
  
      if(userName !== "" && room !== ""){
        socket.emit("join_room", room)
        setlogin(true)
      }
  }

    return (
        <div className="container">
        <div className="row">
        <div className='col-sm-8'>
       {!isloggedin ? <button id="join-room" onClick={joinRoom}> Click here to Join Chat</button>:null}
       {isloggedin ? <Chat socket={socket} username={userName} room={room}></Chat>  : null} 
          </div> 
          <div className="col-sm-4 p-1">
              <div className="card" id="userdatas">
                  <div className="d-flex justify-content-center">
                      <h4>Users</h4>
                  </div>
               <Totaluser></Totaluser>
              </div>
          </div>
        </div>
       </div>
    )
}