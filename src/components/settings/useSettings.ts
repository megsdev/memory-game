import { useState } from "react"
import { DECK_CHANGE, DECK_INCREMENT, DEFAULT_DECK_SIZE, DEFAULT_DIFFICULTY } from "src/common/constants"
import {ISettingsProps} from './Settings'

const useSettings = ({startGame}: ISettingsProps) => {
    const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY)
    const [deckSize, setDeckSize]= useState(DEFAULT_DECK_SIZE)

    const onDifficultySelect = (difficulty: string) => {
        setDifficulty(difficulty) 
    }

    const onStartGameClick = () => {
        startGame({start: true, difficulty, deckSize})
    }

    const changeDeckSize = (change: string) => {
        const newSize = change === DECK_CHANGE.INCREASE ? deckSize + DECK_INCREMENT : deckSize - DECK_INCREMENT
        if (newSize >= 2 && newSize <=160) setDeckSize(newSize)
    }

    return { changeDeckSize, deckSize, onStartGameClick, onDifficultySelect}
}

export default useSettings