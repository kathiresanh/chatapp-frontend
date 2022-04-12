import  React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function AlignItemsList() {
     
    const [user,setuser] = useState([1])

    useEffect(()=>{
    
  const fetchhandler = async () => {
      try {
         await  axios.get("https://chatappend.herokuapp.com/getuser").then(function (response) {
              setuser(response.data)
             
          })
      }
      catch (error) {
          console.log(error)
          alert("something went wrong")
      }
  }
  fetchhandler()
    },[])
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
         {
             user.map((obj)=>{
                 return        <div className='card mb-3'>
                 <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                         <Avatar alt="Remy Sharp" src="" />
                     </ListItemAvatar>
                     <ListItemText
                         primary={obj.name}
                         secondary={
                             <React.Fragment>
                                 <Typography
                                     sx={{ display: 'inline' }}
                                     component="span"
                                     variant="body2"
                                     color="text.primary"
                                 >
                                    {obj.isloggedin == true  ? <p style={{color:"green"}}>online</p> : <p style={{color:"red"}} >offline</p>}
                                 </Typography>
                                
                             </React.Fragment>
                         }
                     />
                 </ListItem>
 
             </div>
             })
         }
        </List>
    );
}
