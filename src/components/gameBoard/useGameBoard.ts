import { useEffect, useState } from "react";
import { GameSettings } from "src/common/types";
import useGameLogic from "src/common/hooks/useGameLogic";
import useGetGifs from "src/common/hooks/useGetGifs";

const useGameBoard = (gameSettings: GameSettings) => {
    const gifs = useGetGifs(gameSettings)
    const {cards, onCardClick, isWin} = useGameLogic(gifs, gameSettings.difficulty)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (gifs.length > 0) setIsLoading(false)
      }, [gifs])

      return {isWin, isLoading, cards, onCardClick}
}

export default useGameBoard