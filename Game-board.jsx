import { useEffect, useState } from 'react'
import './Game-board.css'

function Game_Board(props) {

    let [GameBoard, setGameBoard] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    let [turn, setTurn] = useState("X");
    // let [symbol, setsymbol] = useState("");
    let [winner, setwinner] = useState(false);
    let[winnerSymbol, setWinnerSymbol] = useState(null);

    let[conclusion,setConclusion]=useState(null);
    let gameResult=null;    


    function handleClick(event, row_idx, col_idx) {
        // if (turn == "X") {
        //     event.target.innerText = "X";
        //     turn = "O";
        // } 
        // else {
        //     event.target.innerText = "O";
        //     turn = "X"
        // }
        if (GameBoard[row_idx][col_idx] == null && winner != true) {
            // Updating Gameboard
            let NewGameBoard = [...GameBoard]; // Spred opration
            NewGameBoard[row_idx][col_idx] = (turn ===   "X") ? "X" : "O";
            setGameBoard(NewGameBoard);


            //updateing UI
            event.target.innerText = turn; // for display
            //Changing turn
            turn == 'X' ? setTurn('O') : setTurn('X');
            //Checking Winner
            checkWinner();

        }
    }
    // **************************************************************************


    function checkWinner() {
        //Check Winner for rows
        for (let i = 0; i < 3; i++) {
            if (GameBoard[i][0] == GameBoard[i][1] && GameBoard[i][1] == GameBoard[i][2] && GameBoard[i][0] != null) {
                console.log("Winner");
                setwinner(true);
                setWinnerSymbol(GameBoard[i][0])
            }
        }
        //Check Winner for columns
        for (let j = 0; j < 3; j++) {
            if (GameBoard[0][j] == GameBoard[1][j] && GameBoard[1][j] == GameBoard[2][j] && GameBoard[0][j] != null) {
                console.log("Winner");
                setwinner(true);
                setWinnerSymbol(GameBoard[0][j])
            }
        }
        //Check Winner for Digonally-1
        if (GameBoard[0][0] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][2] && GameBoard[0][0] != null) {
            console.log("Winner");
            setwinner(true);
            setWinnerSymbol(GameBoard[0][0])

        }
        //Check Winner for Digonally-2
        else if (GameBoard[0][2] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][0] && GameBoard[0][2] != null) {
            console.log("Winner");
            setwinner(true);
            setWinnerSymbol(GameBoard[0][2])
        }


        // if (GameBoard[0][0] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][2] && GameBoard[0][0] != null) {
        //     console.log("Winner");
        // }
        // else if (GameBoard[0][2] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][0] && GameBoard[0][2] != null) {
        //     console.log("Winner");
        // }



        // checking for Draw
        let bulb=false;
        GameBoard.map((row)=>{
            row.map((element)=>{
                if (element==null){
                    bulb=true;
                }
            })
        })
        if (bulb==false && winner==false){
            setConclusion("Draw");
        }
    }

    let gameWinner;

    if(winner) {
        if(winnerSymbol=="X") {
            gameWinner = props.player1;
        }
        else if(winnerSymbol == "O"){
            gameWinner = props.player2;
        }

        gameResult = <span id="winner-span"> Winner is {gameWinner} </span>
    }
    else {
        if(conclusion == "Draw") {
            gameResult = <span id="winner-span"> There is a Draw </span>
        }   
    }


    useEffect(()=>{
        console.log(GameBoard)
    },[GameBoard])

    function handleReset(){
        setGameBoard([
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ]);
        if (winner==true){
            setwinner(false);
        }
        if (conclusion=="Draw"){
            setConclusion("");
        }
        setTurn("X")
    }


    
   
    // **************************************************************************
    return (
       <div className='Game-bord-container'>
        {gameResult}
         <div className='game-board'>
            {
                GameBoard.map((row, row_idx) => {
                    return <div className='row' key={row_idx}>
                        {
                            row.map((element, col_idx) => {
                                return <button className='box' key={col_idx} onClick={(event) => { handleClick(event, row_idx, col_idx) }}>{element}</button>
                            })
                        }
                    </div>
                })
            }
        </div>
        <button className='reset'   onClick={handleReset}>Reset</button>
       </div>
    );
}

export default Game_Board;