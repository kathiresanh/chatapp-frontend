import React, { useEffect, useState } from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Chat({ socket, username, room }) {

    const navigate = useNavigate();

    const [currentMessage, setCurrentMessage] = useState("")
    const [messagelist, setmessagelist] = useState([])
    const sendMessage = () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date().toLocaleTimeString(),
            }
            socket.emit("send_message", messageData)
            setmessagelist([...messagelist,messageData])   
            setCurrentMessage("")
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setmessagelist([...messagelist,data])
          

        })
    }, [messagelist,socket])

    let callLogout = async ()=>{
        try {
          await  axios.post(`https://chatappend.herokuapp.com/logout/${localStorage.getItem("email")}`).then(function(response){
              console.log(response)
             localStorage.clear()
             navigate("/")
            })
           } catch (error) {
             console.log(error)
           }
          
    }

    return (
        <div className="card bg-white col-sm-12" >
            <div className="chat-header bg-secondary text-white">
            <div class="d-flex justify-content-between">
            <h3 className="p-1">Live Chat</h3>     <button onClick={()=>{callLogout()}} className=" p-1 btn btn-danger">Logout</button>
            </div>
            
         
            </div>
       <ScrollToBottom className="bg-white" >
       <div className="card bg-white" id="board"> 
                {
                   
                    messagelist.map((item) => {
                        return <div class="container">
                        <div class={item.author === username ? "message-orange" : "message-blue"}>
                            <p class="message-content">{item.message} 
                            <br></br></p> 
                            <span style={{color:"black"}}> <small>{item.author}</small></span>
                            <span style={{color:"black"}}> <small> {item.time}  </small></span>
                        </div>
                     
                        </div>
                    })
                }

            </div>

       </ScrollToBottom>
            <div className="d-flex col-sm-12 bg-secondary">
            <input type="text" 
                className="form-control"
                value={currentMessage}
                placeholder="Enter your message...." 
                onKeyPress={(event)=>{event.key === "Enter" && sendMessage()}}
                onChange={(event) => { setCurrentMessage(event.target.value)
                 }}></input>
                <button className="btn btn-success" onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}