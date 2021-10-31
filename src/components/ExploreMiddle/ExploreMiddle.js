import React,{useContext} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import News from '../News/News';
import './ExploreMiddle.css'
import newsimage from './newsimage1.jpg'
import ThemeContext from '../../context/theme';

function ExploreMiddle() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className="explore-middle-container">
            <div className={theme=== "light" ? "search-bar": "search-bar-dark"}>
               <SearchIcon />
               <input className={theme=== "light" ? "search-input": "search-input-dark"}type="text" placeholder="Twitter'da ara" />
            </div>
            <div className="search-img"><img src={newsimage} alt="" /></div>
            <div className={theme==="light"?"latest":"latest-dark"}>
               <div className="latest-header">
                    <h3>İlgini çekebilecek gündemler</h3>
                    
               </div>
                <News />
                <News />
                <News />
                <News />
                <News />
                <News />    
           </div>
        </div>
    )
}

export default ExploreMiddle
