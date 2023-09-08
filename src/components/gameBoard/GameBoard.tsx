import styled from "styled-components"

import Card from "../Card"
import Result from "../Result"
import {
  StyledFrame,
  StyledBottomButtonContainer,
  StyledActionButton,
} from "../../common/styledComponents"

import { GameSettings } from "src/common/types"
import useGameBoard from "./useGameBoard"

interface IGameBoard {
  gameSettings: GameSettings
  restartGame: () => void
}

const GameBoard = ({ gameSettings, restartGame }: IGameBoard) => {
  const { isWin, isLoading, cards, onCardClick } = useGameBoard(gameSettings)
  return (
    <StyledFrame isWin={isWin}>
      {isWin ? (
        <Result />
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <Board>
          {cards.map(card => (
            <Card key={card.uniqueId} card={card} onCardClick={onCardClick} />
          ))}
        </Board>
      )}
      <StyledBottomButtonContainer>
        <StyledActionButton onClick={restartGame} isWin={isWin}>
          Play again
        </StyledActionButton>
      </StyledBottomButtonContainer>
    </StyledFrame>
  )
}

export default GameBoard

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(10rem, 100%), 1fr));
  place-content: start start;
  width: 100%;
  grid-gap: 10px 10px;
  margin-bottom: 2em;
`
