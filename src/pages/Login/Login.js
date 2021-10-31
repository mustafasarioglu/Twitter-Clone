import React,{useState} from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Login.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import loginbackground from './loginbackground.png'

function Login() {
    

    return (
        <div className="login-container">
                <div className="left-container">
                    <img src={loginbackground} alt="" />
                </div>
                <div className="right-container">
                    <TwitterIcon className="login-twittericon"/>
                    <h1>Şu anda olup bitenler</h1>
                    <h3>Twitter'a bugün katıl. </h3>
                    <Button className="btn-sign"variant="contained"><GoogleIcon/> <p>Google ile kaydolun</p> </Button>
                    <Button className="btn-sign"variant="contained"><AppleIcon/> <p>Apple ile kaydol</p> </Button>
                    <Button className="btn-sign"variant="contained">Telefon numarası veya e-posta adresi ile kaydol</Button>
                    <h4>Zaten hesabın var mı?<Link style={{color:"var(--twitter-color)"}}to="/login/userdetails"> Giriş yap</Link> </h4>
                </div>
            
        </div>
    )
}

export default Login