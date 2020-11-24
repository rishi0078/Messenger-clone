import react, {useState,useEffect} from 'react'
import './App.css';
import Messages from "./Messages"
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';
import db from "./firebase"
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
const[input,setInput]=useState("");
const[messages,setMessages]=useState([]);
const[username,setUserName]=useState("");

useEffect(()=>{
 setUserName(prompt('Pleaser enter your name'));
},[])

useEffect(()=>{
  db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
  })
 },[]);

//console.log(messages);
const sendMessages=(e)=>{
 // all the logic to send a message goes
 e.preventDefault();
db.collection('messages').add({
  message:input,
  username:username,
  timestamp:firebase.firestore.FieldValue.serverTimestamp()
})

 {/*setMessages([...messages,{username:username,message:input}]);*/}
 setInput("");
}

  return (
    <div className="app">
    <img src="https://static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg" />
      
      <h1>Welcome {username}</h1>
     

      <form className="app__form">
        <FormControl className="app__formControl">
          
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event=>setInput(event.target.value)}/>
          
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessages}>

            <SendIcon />
          </IconButton>
          
          
        </FormControl>
      </form>

      {/*messege themselves*/}

    <FlipMove>
      {
        messages.map(({id,message})=>(
         
          <Messages key={id} username={username}  message={message} />
          
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
