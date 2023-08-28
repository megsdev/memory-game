import styled from "styled-components"

interface IResultProps {
  restartGame: () => void
}

const Result = ({restartGame}: IResultProps) => (
  <div>
    <h1>You can still make the whole place ✨shimmer✨</h1>
    <button onClick={restartGame} >Play Again</button>
  </div>
)
export default Result

