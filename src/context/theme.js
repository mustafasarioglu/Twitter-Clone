import React from "react"



const ThemeContext = React.createContext({
    theme: null,
    themeChanger:()=>{},

});

export default ThemeContext