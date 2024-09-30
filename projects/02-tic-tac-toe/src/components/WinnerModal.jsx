import { Square } from "./Square"

export function WinnerModal({ winner, resetGame }) {
    if (winner == null) return null

    const winnerText = winner == false ? 'Empate' : 'El ganador es:'
    
    return (
        <section className="winner">
            <div className="text">
                <h2>
                    {winnerText}
                </h2>
                {winner !== false && (
                    <header className="win">
                        <Square>{winner}</Square>
                    </header>
                )}
                <footer>
                    <button onClick={resetGame}>
                        EMPEZAR DE NUEVO
                    </button>
                </footer>
            </div>
        </section>
    )
}