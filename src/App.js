import React, {useState} from 'react';

import './App.css';

const App = ()=>{
  const [board,setBoard] = useState(Array(9).fill(null));
  const [isXNext,setIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index)=>{
    const newBoard = board.slice();
    if(winner || newBoard[index])
      return;
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsNext(!isXNext);
  };
  const renderSquare = (index) => {
    return(
      <button className="square" onClick={()=>handleClick(index)}>{board[index]}</button>
    );
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsNext(true);
  };
  return (
    <div className="game">
      <h1>TIC-TAC-TOE</h1>
      <div className="board">
        {board.map((_,index)=>renderSquare(index))}
      </div>
      <div className="info">
        {winner ? `Player ${winner} Won!` : `Next Player: ${isXNext ? 'X' : 'O'}`}
      </div>
      <button className="reset" onClick={handleReset}>Reset</button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for(let i=0;i<lines.length;i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
