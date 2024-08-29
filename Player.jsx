import './Player.css'
import { useState } from 'react';
function Player(props){

    let [playerName, setPlayerName ]=useState("Player");
    let[isEditing, setIsEditing] = useState(false);

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    function handleClick() {
        if(isEditing == true) {
            props.setPlayer(playerName);
            setIsEditing(false);
        }
        else{
            setIsEditing(true);
        }
    }

    function handleKey(event) {
        if(event.key == "Enter") {
            props.setPlayer(playerName); // "onkar"
            setIsEditing(false);
        }
    }


    let editablePlayerName=<span className='player-name'>{playerName}</span>
    if (isEditing==true){
        editablePlayerName=
        <input type="text" required onChange={handleChange} 
        value={playerName}
        onKeyDown={handleKey}   />
    }


    return(
        <div className="player-container">

            {editablePlayerName}

            <span>{props.symbol}</span>
            <button onClick={handleClick}> {isEditing? "save":"edit"}</button>
        </div>
    );
}     

export default Player;