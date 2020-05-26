import React,{ Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
// import Greet from './component/Greet';

import Game from './component/Game'
import PlayerForm from './component/PlayerForm'
class App extends Component{
  render(){
  
    return(
    <div>
    
    <PlayerForm/>
    <hr/>
    <Game/>
    <hr/>
    <div className="footer">ReactJS assignment by Lakshay Dua <a href="https://github.com/lakshaydua08/Tic-Tac-Toe-App"> GitHub</a></div>
    </div>
  );
  }
}

export default App;
