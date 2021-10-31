import React,{useState} from 'react'
import './Userdetails.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {HashRouter as Router,Link,Switch,Route,Redirect} from "react-router-dom";
import Home from '../Home/Home';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';


function Userdetails() {
    const {pathname} = useLocation();
    const history = useHistory();

  const routeChange = () =>{ 
    if (id&&password){
       let path ="/home"; 
    history.push(path); 
    } 
  }
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

     
    return (
        <div className="user-container">
           
            <TextField className="input-area"id="outlined-basic" label="ID" variant="outlined" onChange={(e)=>{
                setId(e.target.value)
            }}/>
            <TextField className="input-area"type="password"id="outlined-basic" label="Password" variant="outlined"size="large" onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <Button variant="outlined" className="btn-login"size="large" onClick={() => { routeChange(); dispatch({
                    type:"login",
                    first_name : id,
                    last_name : password
            });}}
                
               
            >Giriş yap</Button>
            
        </div>
    )
}

export default Userdetails





