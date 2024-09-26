import { useState } from "react"

const TURNS = {
  X: 'X',
  O: 'O'
}

const Square = ({ children, updateBoard, index, isSelected }) => {
  const turnoActual = ` square ${isSelected ? 'is-selected' : ""} `

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div className={turnoActual} onClick={handleClick}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (boardToCheck[a] == boardToCheck[b] && boardToCheck[a] == boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {
    const newBoard = [...board]
    //let newTurn = turn;

    if (board[index] || winner) {
      return
    }
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    // SON LO MISMO
    // if(turn == TURNS.X){
    //   newTurn = TURNS.O
    // }else{
    //   newTurn = TURNS.X
    // }
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
  }

  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>
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

      <section>
        {winner !== null &&
          <div className="winner">
            <h2 className="text">AQUI VA TEXTO</h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button>
                EMPEZAR DE NUEVO
              </button>
            </footer>
          </div>
        }
      </section>
    </main>
  )
}

export default App
