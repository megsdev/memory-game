import { useState } from 'react';
import styled from 'styled-components'

import GameBoard from './components/gameBoard/GameBoard'
import Settings from './components/settings/Settings'
import { GameSettings } from './common/types'
import { DEFAULT_DECK_SIZE, DEFAULT_DIFFICULTY } from './common/constants';


function App() {
  const [gameSettings, setGameSettings] = useState<GameSettings>()

  const startGame = (settings: GameSettings) => {
    setGameSettings(settings)
  }

  const restartGame = () => {
    setGameSettings({start: false, difficulty: DEFAULT_DIFFICULTY, deckSize: DEFAULT_DECK_SIZE})
  }

  return (
    <MemoryApp>
      <h1>Taylor Swift Memory Game</h1>
      {!gameSettings?.start ? (
                <Settings startGame={startGame} />
            ) : (
                <GameBoard gameSettings={gameSettings} restartGame={restartGame} />
            )}

    </MemoryApp>
  );
}

export default App;

const MemoryApp = styled.div`
text-align: center;
margin: auto;
`