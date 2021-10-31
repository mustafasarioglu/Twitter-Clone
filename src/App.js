 
import './App.css';
import Routes from './routes';
import ThemeContext from './context/theme';
import {useState } from 'react';


function App() {
  const [theme, setTheme] = useState("light");
  const themeChanger = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  };
 
  return (
    
    <ThemeContext.Provider value={{

      theme,
      setTheme,
      themeChanger,
    }
      
    }>
    <div className={theme === "light" ? "app" : "app-dark"}>
     <Routes />
      
   
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
