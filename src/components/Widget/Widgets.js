import React,{useContext} from 'react'
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import News from '../News/News';
import FollowAdvice from '../FollowAdvice/FollowAdvice';
import ThemeContext from '../../context/theme';

function Widgets() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className="widgets">
           <div className={theme=== "light" ? "search-bar": "search-bar-dark"}>
               <SearchIcon />
               <input className={theme=== "light" ? "search-input": "search-input-dark"} type="text" placeholder="Twitter'da ara" />
           </div>
           <div className={theme=== "light"? "latest" :"latest-dark"}>
               <div className={theme=== "light"? "latest-header" :"latest-header-dark"}>
                    <h3>İlgini çekebilecek gündemler</h3>
                    <SettingsIcon />
               </div>
                <News />
                <News />
                <News />
                <News />
                <News />
                <News />    
           </div>
           <FollowAdvice />
           

        </div>
    )
}

export default Widgets
