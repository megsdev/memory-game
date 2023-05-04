import { Card, CardWithId, Gif } from 'src/common/types'

export const shuffleCards = (cards: CardWithId[]) => {
    let cardsRemaining = cards.length
    let index
    let shuffledIndex

    while (cardsRemaining) {
        index = Math.floor(Math.random() * cardsRemaining--)
        shuffledIndex = cards[cardsRemaining]
        cards[cardsRemaining] = cards[index]
        cards[index] = shuffledIndex
    }
    return cards
}

export const buildCards = (data: Gif[]): Card[] => {
    return data.map((gif) => ({
        id: gif.id,
        url: gif.images.original.url,
        isShown: false,
        isFound: false
    }))
}

export const duplicateCards = (data: Card[]) => {
    return data.concat(data);
}

export const addUniqueIds = (data: Card[]): CardWithId[] => {
    return data.map((card, i) => ({
        ...card,
        uniqueId: i
    }))
}