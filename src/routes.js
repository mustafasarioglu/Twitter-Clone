import React from "react"
import {HashRouter as Router,Link,Switch,Route,Redirect} from "react-router-dom"
// import useLogin from "./hooks/useLogin";
// import Chat from './pages/chat/chat';
// import Login from './pages/login/login';
// import Userdetails from "./pages/userdetails/userdetails";
import Login from './pages/Login/Login';
import Home from "./pages/Home/Home";
import Userdetails from "./pages/Userdetails/Userdetails";
import Explore from "./pages/Explore/Explore";
function Routes() {
    
    return (
      <Router>
     
        
       <Switch>
         
         <Route path="/" exact>
           <Login />
         </Route>
         <Route path="/home" exact>
           <Home />
         </Route>
         <Route path="/login/userdetails" exact>
           <Userdetails />
         </Route>
         <Route path="/explore" exact>
           <Explore />
         </Route>
         

          
          
          

          
         
       </Switch>
  
      </Router>
    )
  }
  export default Routes;