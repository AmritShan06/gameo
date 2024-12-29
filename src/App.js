import React from 'react';
import './App.css';
import Board from "./TicTacToeGame/Board";
import Header from "./TicTacToeGame/Header";
import Copyright from "./TicTacToeGame/Copyright";
function App() {
  return (
    
    <div className="App">
      <Header/>
      <Board/>
      <Copyright/>
    </div>
  );
    
  
}

export default App;
