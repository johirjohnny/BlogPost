import React from 'react';
import TopBar from './Component/topbar/TopBar.jsx'
import Home from './pages/home/Home.jsx';
import Single from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';
import Settings from './pages/settings/Settings.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  
  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <Home />
          </Route>
          <Route path="/register">
             <Register />
          </Route>
          <Route path="/login"> 
            <Login />
          </Route>
          <Route path="/single">
            <Single />
          </Route>
          <Route path="/write"><Write /> </Route>
          <Route path="/settings">
             <Settings /> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
