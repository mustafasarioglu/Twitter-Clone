import React,{useContext} from 'react';
import './News.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThemeContext from '../../context/theme';

function News() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme==="light"?"news" : "news-dark"}>
            <div className={theme==="light"?"news-info":"news-info-dark"}>
                <p className={theme === "light"?"news-details":"news-details-dark"}>Futbol-Gündemdekiler</p>
                <h3 className={theme === "light"?"news-topic":"news-topic-dark"}>#Cristiano Ronaldo</h3>
                <p className={theme === "light"?"news-details":"news-details-dark"}>15,6B Tweet</p>
            </div>
            <MoreHorizIcon />
            
        </div>
    )
}

export default News
