import { useState } from "react"
import styled from "styled-components"

import GameBoard from "./components/gameBoard/GameBoard"
import Settings from "./components/settings/Settings"
import { GameSettings } from "./common/types"
import { DEFAULT_DECK_SIZE, DEFAULT_DIFFICULTY, COLORS } from "./common/constants"

function App() {
  const [gameSettings, setGameSettings] = useState<GameSettings>()

  const startGame = (settings: GameSettings) => {
    setGameSettings(settings)
  }

  const restartGame = () => {
    setGameSettings({
      start: false,
      difficulty: DEFAULT_DIFFICULTY,
      deckSize: DEFAULT_DECK_SIZE,
    })
  }

  return (
    <MemoryApp>
      <Background />
      {!gameSettings?.start ? (
        <Settings startGame={startGame} />
      ) : (
        <GameBoard gameSettings={gameSettings} restartGame={restartGame} />
      )}
    </MemoryApp>
  )
}

export default App

const MemoryApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${COLORS.darkBlue};
  width: calc(100% - 4em);
  min-height: calc(100vh - 4em);
  position: relative;
  color: ${COLORS.lightBlue};
  padding: 2em 2em 4em;
`

const Background = styled.div`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  mix-blend-mode: luminosity;
  opacity: 0.15;
  background-attachment: fixed;
  background-image: url(https://assets.dmi.umgapps.com/assets/taylor-swift/playlist-generator/1678542710857-background.jpg);
  background-size: cover;
`
