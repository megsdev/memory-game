import { DECK_CHANGE, DIFFICULTY } from 'src/common/constants'
import useSettings from './useSettings'
import { GameSettings } from 'src/common/types'

export interface ISettingsProps {
    startGame: (gameSettings: GameSettings) => void
}

const Settings = (startGame: ISettingsProps) => {
    const {changeDeckSize, deckSize, onStartGameClick, onDifficultySelect} = useSettings(startGame)

    return (
    <>
        <h2>Settings</h2>
        <h4>Difficulty</h4>
        <select onChange={e => onDifficultySelect(e.target.value)}>
            {DIFFICULTY.map((difficulty, i) => (
                <option value={difficulty} key={i}>{difficulty}</option>
            ))}
        </select>
        <h4>Deck Size {deckSize}</h4>
        <>
        <button onClick={() => changeDeckSize(DECK_CHANGE.DECREASE)}>-</button>
        <button onClick={() => changeDeckSize(DECK_CHANGE.INCREASE)}>+</button>
        </>

        <button onClick={onStartGameClick}>Start</button>
    </>
    )
}

export default Settings