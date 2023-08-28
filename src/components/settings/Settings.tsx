import { DECK_CHANGE, DIFFICULTY, COLORS, TRANSITION } from "src/common/constants"
import useSettings from "./useSettings"
import { GameSettings } from "src/common/types"
import styled from "styled-components"
import arrow from "../../assets/arrow.png"

export interface ISettingsProps {
  startGame: (gameSettings: GameSettings) => void
}

const Settings = (startGame: ISettingsProps) => {
  const { changeDeckSize, deckSize, onStartGameClick, onDifficultySelect } =
    useSettings(startGame)

  return (
    <StyledSettings>
      <StyledHeader>
        <StyledTS>Taylor Swift</StyledTS>
        <StyledTMG>The Memory Game</StyledTMG>
      </StyledHeader>
      <h2>Settings</h2>
      <StyledSelectContainer>
        <h4>Difficulty</h4>
        <StyledSelect onChange={e => onDifficultySelect(e.target.value)}>
          {DIFFICULTY.map((difficulty, i) => (
            <option value={difficulty} key={i}>
              {difficulty}
            </option>
          ))}
        </StyledSelect>
      </StyledSelectContainer>
      <h4>Deck Size {deckSize}</h4>
      <>
        <button onClick={() => changeDeckSize(DECK_CHANGE.DECREASE)}>-</button>
        <button onClick={() => changeDeckSize(DECK_CHANGE.INCREASE)}>+</button>
      </>
      <StyledBottomButtonContainer>
        <StyledStartButton onClick={onStartGameClick}>Start</StyledStartButton>
      </StyledBottomButtonContainer>
    </StyledSettings>
  )
}

export default Settings

const StyledSettings = styled.div`
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(66, 66, 69, 0.16);
  width: 30%;
  padding: 0 4em 2em;
  position: relative;
  max-width: 55em;
  width: 100%;
  margin: auto;
  border: 0.5em solid ${COLORS.lightBlue};
  border-radius: 5em;
  transition: ${TRANSITION};
  font-family: "Neue Haas Grotesk Display Pro", sans-serif;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`

const StyledTS = styled.h1`
  transform: scaleY(2.5);
  font-size: 48px;
  margin: 3em 0 0;
`
const StyledTMG = styled.h1`
  letter-spacing: 1.5px;
  transform: scaleY(1.5);
`
const StyledSelectContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`
const StyledSelect = styled.select`
  width: 50%;
  text-transform: capitalize;
  padding: 1em;
  font-size: 1.5em;
  color: ${COLORS.darkBlue};
  border: none;
  outline: none;
  background: ${COLORS.lightBlue};
  border-radius: 10em;
  appearance: none;
  display: inline-block;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: url(${arrow});
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), 100% 0;
  background-size: 1em;
  background-repeat: no-repeat;
`
const StyledStartButton = styled.button`
  border: 0.5em solid ${COLORS.lightBlue};
  background-color: ${COLORS.darkBlue};
  color: ${COLORS.lightBlue};
  height: 4.5em;
  max-width: 42%;
  width: 100%;
  border-radius: 10em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  font-size: 1em;
  transition: TRANSITION;
`
const StyledBottomButtonContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  transform: translateY(50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  font-family: "Neue Haas Grotesk Display Pro", sans-serif;
`
