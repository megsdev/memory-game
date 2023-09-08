import styled from "styled-components"
import { COLORS, TRANSITION } from "./constants"

export const StyledFrame = styled.div<{ isWin?: boolean }>`
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(66, 66, 69, 0.16);
  padding: 2em;
  position: relative;
  max-width: 80%;
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
  background-color: ${props => (props.isWin ? COLORS.lightBlue : "transparent")};
`

export const StyledActionButton = styled.button<{ isWin?: boolean }>`
  border: 0.5em solid ${props => (props.isWin ? COLORS.darkBlue : COLORS.lightBlue)};
  background-color: ${props => (props.isWin ? COLORS.lightBlue : COLORS.darkBlue)};
  color: ${props => (props.isWin ? COLORS.darkBlue : COLORS.lightBlue)};
  height: 3.5em;
  max-width: 40%;
  width: 100%;
  border-radius: 10em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  transition: ${TRANSITION};
  font-size: 1.75em;
  position: relative;
  font-weight: 600;
`
export const StyledBottomButtonContainer = styled.div`
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
