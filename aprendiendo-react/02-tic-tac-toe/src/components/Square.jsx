
export const Square = ({children, uptadeBoard, index, isSelected}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    uptadeBoard(index);
  }

  return (
  <div className={className} onClick={handleClick}>
      {children}
  </div>
  )
}
