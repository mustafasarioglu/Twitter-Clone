import React from 'react';
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from '../SidebarOption/SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import {useHistory} from 'react-router-dom';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {useContext} from 'react';
import ThemeContext from '../../context/theme';


function Sidebar() {
    const history = useHistory();

    const pageHandler = () =>{ 
      
         let path ="/explore"; 
      history.push(path); 
      
      
    }
    const homePageHandler = () => {
        let path ="/home"; 
        history.push(path); 
    }
    const {theme,themeChanger} = useContext(ThemeContext);


    return (
        <div className={theme === "light" ? "sidebar" : "sidebar-dark"}>
            <TwitterIcon  className="twitter-icon"/>
            <button className={theme=== "light" ? "sidebaroption-btn" : "sidebaroption-btn-dark"}onClick={homePageHandler}><SidebarOption active Icon={HomeIcon}text="Anasayfa"/></button>
            <button className="sidebaroption-btn"onClick={pageHandler}><SidebarOption Icon={SearchIcon}text="Keşfet"/></button>
            <button className="sidebaroption-btn"><SidebarOption Icon={NotificationsNoneIcon}text="Bildirimler"/></button>
            <button className="sidebaroption-btn"><SidebarOption Icon={MailOutlineIcon}text="Mesajlar"/></button>
            <button className="sidebaroption-btn"><SidebarOption Icon={BookmarkBorderIcon}text="Yer İşaretleri"/></button>
            <button className="sidebaroption-btn"><SidebarOption Icon={ListAltIcon}text="Listeler"/></button>
            <button className="sidebaroption-btn"><SidebarOption Icon={PersonOutlineIcon}text="Profil"/></button>
            <button className="sidebaroption-btn"><SidebarOption Icon={MoreHorizIcon}text="Daha fazla"/></button>
            <Button variant="outlined" className="sidebar-btn" fullWidth>Tweetle</Button>
            <button className={theme==="light"? "theme-changer":"theme-changer-dark"}onClick={themeChanger}><WbSunnyIcon/></button>
            
        </div>
    )
}

export default Sidebar
