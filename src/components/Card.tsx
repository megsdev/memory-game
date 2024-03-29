import React from "react"
import styled from "styled-components"
import img from "../assets/card-back.jpg"
import { CardWithId } from "src/common/types"
import { COLORS, TRANSITION } from "src/common/constants"

interface ICardProps {
  card: CardWithId
  onCardClick: (clickedCardId: number) => void
}

interface ICardContainer {
  isFound: boolean
}

interface ICardBack {
  isFound: boolean
}

const Card = ({ card, onCardClick }: ICardProps) => {
  const onClick = () => {
    if (card.isShown || card.isFound) return
    onCardClick(card.uniqueId)
  }
  return (
    <Container onClick={onClick} isFound={card.isFound}>
      <CardContent>
        {card.isShown ? (
          <Front>
            <Gif src={card.url} />
          </Front>
        ) : (
          <Back isFound={card.isFound} />
        )}
      </CardContent>
    </Container>
  )
}
export default Card

const Container = styled.div<ICardContainer>`
  position: relative;
  perspective: 800px;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(66, 66, 69, 0.16);
  transition: ${TRANSITION};
  border: 0.5em solid ${COLORS.lightBlue};
  aspect-ratio: 779 / 1024;

  ${props =>
    props.isFound &&
    `
backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);
background: rgba(189, 224, 254, 0.46);
`}
`
const CardContent = styled.div`
  width: 100%;
  border: none;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 10px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  & div {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${img}) no-repeat contain center;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    transition: all 0.25s ease-in-out;
  }
`

const Front = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  background-color: ${COLORS.darkBlue};

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: all 0.25s ease-in-out;
`
const Gif = styled.img`
  max-width: 95%;
  max-height: 95%;
  border-radius: 6px;
  padding: 5px;
`

const Back = styled.div<ICardBack>`
  background: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: inherit;
  height: inherit;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    transition: all 0.25s ease-in-out;
  }

  ${props =>
    props.isFound &&
    `
      box-shadow: inset 0 0 0 2000px  rgb(43, 56, 77, 0.7);   
      &:hover {
      box-shadow: inset 0 0 0 2000px  rgb(43, 56, 77, 0.7);
      cursor: not-allowed;
      transform: none;
      transition: none;
    }
    `}
`
