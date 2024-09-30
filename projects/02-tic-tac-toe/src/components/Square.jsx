export const Square = ({ children, updateBoard, index, isSelected }) => {
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