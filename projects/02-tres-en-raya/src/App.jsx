import { useState } from "react";
import "./App.css";

import { Square } from "./components/Square";
import { PLAYER_TURNS, WINNER_COMBO } from "./constants";
import { WinnerModal } from "./components/WinnerModal";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState(PLAYER_TURNS.X);
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

  const handleSquareClick = (index) => {
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
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentTurn(PLAYER_TURNS.X);
    setWinner(null);
  };

  return (
    <main className="board">
      <h1>3 en raya</h1>

      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} onSquareClick={handleSquareClick}>
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
