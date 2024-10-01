import { useState } from "react"
import confetti from 'canvas-confetti'
import { Square } from "./components/Square"
import { TURNS, WINNER_COMBOS } from "./constants"
import { WinnerModal } from "./components/WinnerModal"
import { saveGameToStorage, resetGameStorage } from "./logic/storage"

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if(boardFromStorage) return JSON.parse(boardFromStorage)
      return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
    // ?? Esto mira si es null o undefined
    // || Esto mira si es false
  })
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((Square) => Square != null)
  }

  const updateBoard = (index) => {
    const newBoard = [...board]
    //let newTurn = turn;

    //Revisar casilla vacia o ganador
    if (board[index] || winner) {
      return
    }
    // Actualizar tablero
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    // SON LO MISMO
    // if(turn == TURNS.X){
    //   newTurn = TURNS.O
    // }else{
    //   newTurn = TURNS.X
    // }
    setTurn(newTurn)

    //Guardar partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    //Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>
        EMPEZAR DE NUEVO
      </button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App
