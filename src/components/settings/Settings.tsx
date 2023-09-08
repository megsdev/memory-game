import { DECK_CHANGE, DIFFICULTY, COLORS, TRANSITION } from "src/common/constants"
import useSettings from "./useSettings"
import { GameSettings } from "src/common/types"
import styled from "styled-components"
import arrow from "../../assets/arrow.png"
import {
  StyledFrame,
  StyledBottomButtonContainer,
  StyledActionButton,
} from "../../common/styledComponents"

export interface ISettingsProps {
  startGame: (gameSettings: GameSettings) => void
}

const Settings = (startGame: ISettingsProps) => {
  const { changeDeckSize, deckSize, onStartGameClick, onDifficultySelect } =
    useSettings(startGame)

  return (
    <StyledFrame>
      <StyledHeader>
        <StyledTS>Taylor Swift</StyledTS>
        <StyledTMG>The Memory Game</StyledTMG>
      </StyledHeader>
      <Heading2>Settings</Heading2>
      <StyledDifficultyContainer>
        <Heading2>Difficulty</Heading2>
        <StyledSelect onChange={e => onDifficultySelect(e.target.value)}>
          {DIFFICULTY.map((difficulty, i) => (
            <option value={difficulty} key={i}>
              {difficulty}
            </option>
          ))}
        </StyledSelect>
      </StyledDifficultyContainer>
      <StyledSizeContainer>
        <Heading2>Deck Size</Heading2>
        <StyledSizeContainer>
          <StyledSizeButton onClick={() => changeDeckSize(DECK_CHANGE.DECREASE)}>
            -
          </StyledSizeButton>
          <Heading2>{deckSize}</Heading2>
          <StyledSizeButton onClick={() => changeDeckSize(DECK_CHANGE.INCREASE)}>
            +
          </StyledSizeButton>
        </StyledSizeContainer>
      </StyledSizeContainer>
      <StyledBottomButtonContainer>
        <StyledActionButton onClick={onStartGameClick}>Start</StyledActionButton>
      </StyledBottomButtonContainer>
    </StyledFrame>
  )
}

export default Settings

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`

const Heading2 = styled.h2`
  @media (max-width: 600px) {
    font-size: 1em;
  }
`

const StyledTS = styled.h1`
  transform: scaleY(2.5);
  font-size: 48px;
  margin: 1em 0 0;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`
const StyledTMG = styled.h1`
  letter-spacing: 1.5px;
  transform: scaleY(1.5);

  @media (max-width: 600px) {
    font-size: 22px;
  }
`
const StyledDifficultyContainer = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;
  margin: 1em;
`

const StyledSizeContainer = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;
  margin-bottom: 2em;
`

const StyledSizeButton = styled.button`
  margin: 0.25em;
  border-radius: 100em;
  padding: 0;
  width: 2em;
  height: 2em;
  transition: ${TRANSITION};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.darkBlue};
  background: ${COLORS.lightBlue};
  border-radius: 10em;
  border: none;
  font-size: 1.5em;

  @media (max-width: 600px) {
    font-size: 1em;
  }
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

  @media (max-width: 600px) {
    font-size: 1em;
  }
`
