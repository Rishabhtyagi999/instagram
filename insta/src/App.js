import React from 'react';
import  NavBar from './components/Navbar'
import './App.css'
import Home from './components/screen/Home'
import Login from './components/screen/Login'
import Profile from './components/screen/Profile'
import Signup from './components/screen/Signup'
import CreatePost from './components/screen/CreatePost'
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/login">
      <Login />
      </Route>
      <Route path="/signup">
      <Signup />
      </Route>
      <Route path="/profile">
      <Profile />
      </Route>
      <Route path="/CreatePost">
      <CreatePost />
      </Route>


    </BrowserRouter>

  );
}

export default App;
