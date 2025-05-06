import { useState } from "react";
import "./App.css";

import { Square } from "./components/Square";
import { PLAYER_TURNS, WINNER_COMBO } from "./constants";
import { WinnerModal } from "./components/WinnerModal";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = JSON.parse(
      window.localStorage.getItem("board")
    );
    if (boardFromLocalStorage) {
      return boardFromLocalStorage;
    }
    return Array(9).fill(null);
  });
  
  const [currentTurn, setCurrentTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem("turn");
    if (turnFromLocalStorage) return turnFromLocalStorage;
    return PLAYER_TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  //comprueba si hay ganador segun los patrones de winnwer_combo
  const checkWinner = (boardToCheck) => {
    for (let i = 0; i < WINNER_COMBO.length; i++) {
      const [a, b, c] = WINNER_COMBO[i];
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const checkEndGame = (newBoard) => {
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === null) {
        return false; // Si hay al menos una casilla vacía, el juego no ha terminado
      }
    }
    return true; // Si no hay casillas vacías, el juego ha terminado
  };

  const updateBoard = (index) => {
    // si ya hay figura sale o ganador
    if (board[index] || winner) return;

    //crea una copia del board
    const newBoard = [...board];
    newBoard[index] = currentTurn;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    } else {
      const newTurn =
        currentTurn === PLAYER_TURNS.X ? PLAYER_TURNS.O : PLAYER_TURNS.X;
      setCurrentTurn(newTurn);
      // Guardar turno
      window.localStorage.setItem("turn", newTurn);
    }
    // Guardar tablero
    window.localStorage.setItem("board", JSON.stringify(newBoard));
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentTurn(PLAYER_TURNS.X);
    setWinner(null);
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  };

  return (
    <main className="board">
      <h1>3 en raya</h1>
      <button onClick={restartGame}>New Game</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} onSquareClick={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={PLAYER_TURNS.X === currentTurn}>
          {PLAYER_TURNS.X}
        </Square>
        <Square isSelected={PLAYER_TURNS.O === currentTurn}>
          {PLAYER_TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={restartGame} winner={winner} />
    </main>
  );
}

export default App;
