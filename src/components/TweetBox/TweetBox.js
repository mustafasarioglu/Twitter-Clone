import React,{useState,useContext} from 'react'
import {Avatar, Button } from '@mui/material';
import './TweetBox.css';
import GifIcon from '@mui/icons-material/Gif';
import MoodIcon from '@mui/icons-material/Mood';
import EventIcon from '@mui/icons-material/Event';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import db from '../../firebase';
import ThemeContext from '../../context/theme.js';
import tweetboximage from './gumball.jpg'


function TweetBox() {
    const {theme} = useContext(ThemeContext)

    const[tweetMessage,setTweetMessage] = useState("")
    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Mustafa Sarioglu",
            username : "mustafasarioglu",
            verified : true,
            text : tweetMessage,
            image : "",
            avatar : tweetboximage
        })
        setTweetMessage("");;
    }

    return (
        <div className={theme === "light" ? "tweet-box" : "tweet-box-dark"}>
            <form >
                <div className="tweetbox-input">
                <Avatar src={tweetboximage}/>
                <input className={theme === "light" ?"input-box" :"input-box-dark"}type="text" onChange={(e)=> setTweetMessage(e.target.value)}value={tweetMessage} placeholder="Neler oluyor?" />
                </div>
                
                <div className="bottom-box">
                    <div className="bottombox-icons">
                    <PermMediaIcon style={{color: "var(--twitter-color)"}}/>
                    <GifIcon style={{color: "var(--twitter-color)"}}/>
                    <AlignHorizontalLeftIcon style={{color: "var(--twitter-color)"}}/> 
                    <MoodIcon style={{color: "var(--twitter-color)"}}/>
                    <EventIcon style={{color: "var(--twitter-color)"}}/>
                    </div>
                    <Button onClick={sendTweet} type="submit" className="btn-tweet">Tweetle</Button>
                </div>
            </form>
            
        </div>
    )
}

export default TweetBox
