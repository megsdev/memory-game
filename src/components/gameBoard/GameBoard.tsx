import styled from 'styled-components'

import Card from '../Card'
import Result from '../Result'

import { GameSettings } from 'src/common/types'
import useGameBoard from './useGameBoard'

interface IGameBoard {
  gameSettings: GameSettings,
  restartGame: () => void
}

const GameBoard = ({gameSettings, restartGame}: IGameBoard) => {
  const {isWin, isLoading, cards, onCardClick} = useGameBoard(gameSettings)

    return (
        <>
        {isWin && <Result restartGame={restartGame}/>}
        {isLoading ? <>Loading...</> : 
        <Board>      
       {cards.map(card => 
        <Card key={card.uniqueId} card={card} onCardClick={onCardClick}/>
        )}
      </Board>}
        </>
    )
}

export default GameBoard

const Board = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`