import { Avatar } from '@mui/material'
import React,{useContext}from 'react';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import './Post.css';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThemeContext from '../../context/theme';

function Post({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar
}) 
    
    {const {theme} = useContext(ThemeContext)
    return (
        <div className={theme=== "light"? "post":"post-dark"}>
            <div className="post-avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className={theme === "light"?"post-headertext":"post-headertext-dark"}>
                        <h3>{displayName}{" "} <span className="post-headerspecial">{verified && <VerifiedUserIcon className="verified-icon"/>} @{username}</span></h3>
                        <button className={theme=== "light"?"morehorizicon-btn":"morehorizicon-btn-dark"}><MoreHorizIcon className={theme === "light"?"threedot":"threedot-dark"}/></button>
                    </div>
                    <div className={theme === "light" ?"postheader-description" : "postheader-description-dark"}>
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image}/>
                <div className="post-footer">
                    <ChatBubbleOutlineIcon  className={theme === "light" ? "comment-icon" :"comment-icon-dark"}/>
                    <RepeatIcon className={theme === "light" ? "retweet-icon" :"retweet-icon-dark"}/>
                    <FavoriteBorderIcon className={theme === "light" ? "like-icon" :"like-icon-dark"}/>
                    <PublishIcon className={theme === "light" ? "publish-icon" :"publish-icon-dark"}/>
                </div>
            </div>   
        </div>
    )
}

export default Post
