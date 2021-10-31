import React,{useContext} from 'react';
import ThemeContext from '../../context/theme';
import './SidebarOption.css';

function SidebarOption({active,text, Icon}) {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme === "light"? "sidebarOption" :"sidebarOption-dark"}>
           <Icon />
           <h1>{text}</h1>
        </div>
    )
}

export default SidebarOption
