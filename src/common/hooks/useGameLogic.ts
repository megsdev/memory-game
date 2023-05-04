import { useEffect, useState } from "react";
import { CardWithId, Gif } from 'src/common/types'
import { addUniqueIds, buildCards, duplicateCards, shuffleCards } from '../utils'

const useGameLogic = (gifs: Gif[], difficulty: string) => {
const [cards, setCards] = useState<CardWithId[]>([])
const [visibleCards, setVisibleCards] = useState<CardWithId[]>([])
const [score, setScore] = useState(0);
const [isWin, setIsWin] = useState(false);

const MAX_VISIBLE_CARDS = 2;
const PACES: object = {
    easy: 1500,
    medium: 1000,
    hard: 500,
    pro: 200,
}

const prepareCards = () => {
const initialCards = buildCards(gifs)
const duplicatedCards = duplicateCards(initialCards)
const cardsWithUniqueIds = addUniqueIds(duplicatedCards)
const shuffledCards = shuffleCards(cardsWithUniqueIds)

setCards(shuffledCards)
}

const flipCard = (clickedCardId: number) => {
    const flippedCards = cards?.map(card => {
        if(card.uniqueId === clickedCardId) {
            card.isShown = true
        }

        if(card.isShown) setVisibleCards(prevState => [...prevState, card])

        return card
    })
    
    setCards(flippedCards)
}

const onCardClick = (clickedCardId: number)=> {
    if(visibleCards?.length < MAX_VISIBLE_CARDS) {

        flipCard(clickedCardId)
    }
}

const updateScore = () => {
    setScore(oldScore => oldScore +1)
}

const checkMatch = () => {
    const visible = cards.filter(card => visibleCards.indexOf(card) !== -1)
    const matched = visible[0].id === visible[1].id

    const updatedCards = cards.map(card => {
        if (visibleCards.indexOf(card) !== -1) {
            card.isShown = false
            card.isFound = matched
        }
        return card
    })

    setTimeout(() => {
        setCards(updatedCards)
        setVisibleCards([])
        if (matched) updateScore()
        
    }, PACES[difficulty as keyof object]);
}

useEffect(() => {
    if (gifs.length > 0) prepareCards()
}, [gifs]) 

useEffect(() => {
    if (visibleCards?.length >= MAX_VISIBLE_CARDS) {
        checkMatch()
    }
}, [visibleCards])

useEffect(() => {
    if (gifs.length && score === gifs.length) {
        setIsWin(true)
    }
})

return {cards, onCardClick, isWin}
}

export default useGameLogic