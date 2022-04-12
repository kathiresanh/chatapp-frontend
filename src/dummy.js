// import { useEffect, useState } from 'react';
// import Chat from './Chat';
// import './App.css';
// import Board from './Board';
// import OutlinedCard from './Card';
// const { io } = require("socket.io-client");



// const socket = io("http://localhost:3001",{ transports: ["websocket"] });

// function App() {
 
//   const [userName,setUserName] = useState("")
//   const [room,setRoom] = useState("")
//   const [isloggedin,setlogin] = useState(false)
  
//   const joinRoom = ()=>{

//     if(userName !== "" && room !== ""){
//       socket.emit("join_room", room)
//       setlogin(true)
//     }
// }


//   return (
//     <div className="container">
//      <div className='col-sm-6'>
//      <h1>This is chat app</h1>
//   <input type="text" placeholder='name' onChange={(event)=>{setUserName(event.target.value)}} ></input>
//   <input type="text" placeholder='room name' onChange={(event)=>{setRoom(event.target.value)}}  ></input>
//      <button onClick={joinRoom}>Join A Room</button>
//     {isloggedin ? <Chat socket={socket} username={userName} room={room}></Chat>  : null} 
//        </div> 
//     </div>
//   );
// }

// export default App;
