import './App.css'
import tictac from './img/tictac.png'
import Player from './Component/Player';
import Game_Board from './Component/Game-board';
import { useState } from 'react';

function App (){
    let [player1, setPlayer1]=useState("");
    let [player2, setPlayer2]=useState("");                                                                     



    return(
       <div>
         <h1 className='title'>Tic Tac Toe </h1>
         <img src={tictac} alt="" />

        <div className='main'>

        <div className='game-container'>

            <div className='player-name'>
                
                <Player name="player1" symbol="X" setPlayer={setPlayer1}/>
                <Player name="player2" symbol="O" setPlayer={setPlayer2}/>

            </div>

            <div className='game-section'>
                <Game_Board player1={player1} player2={player2}/>
        </div>
        </div>    
        </div>
       </div>
    )
}

export default App;