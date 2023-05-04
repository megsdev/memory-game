export interface GameSettings {
    start: boolean,
    difficulty: string,
    deckSize: number
}

export interface Gif {
    id: string,
    url: string,
    images: {original: {url: string}}
  }

  export interface Card {
    id: string,
    url: string,
    isShown: boolean,
    isFound: boolean
}

export interface CardWithId extends Card {
    uniqueId: number,
}

