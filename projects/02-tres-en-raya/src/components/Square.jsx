export const Square = ({ children, isSelected, onSquareClick, index }) => {
  const squareClass = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    onSquareClick(index)
  }

  return (
    <div onClick={handleClick} className={squareClass}>
      {children}
    </div>
  )
}
