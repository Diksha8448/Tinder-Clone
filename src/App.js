import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import ChatScreen from './ChatScreen';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Chats from "./Chats";
import './App.css';

function App() {
  return (
    <div className="App">
     
      <Router>
        
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat"/>
            <ChatScreen/>
          </Route>
          <Route path="/chat">
            <Header backButton="/"/>
            <Chats/>
          </Route>
          <Route path="/">
            <Header/>
            <TinderCards/>
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}
{/* {/*Header */}
{/*<Header/> */}
      
{/*Tinder Cards */}
{/*Buttons Below tinder cards */}
{/*Chats Screen */}
{/*Individual chat screen*/}
export default App;
