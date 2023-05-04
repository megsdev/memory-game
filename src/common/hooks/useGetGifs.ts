import { useEffect, useState } from "react"
import { GameSettings, Gif } from '../types'


const getRandomOffset = (): number => Math.round(Math.random() * (100 - 1) + 1)

const useGetGifs = (gameSettings: GameSettings): Gif[] => {
    const [gifs, setGifs] = useState<Gif[]>([])
    const buildUrl = () => {
        let url = new URL('https://api.giphy.com/v1/gifs/search')
        const limit = gameSettings.deckSize / 2
        url.search = new URLSearchParams({
          api_key: process.env.REACT_APP_AUTH_KEY ?? '',
          q: `taylor+swift`,
          limit: limit.toString(),
          offset: getRandomOffset().toString(), 
          rating: 'pg-13',
          lang: 'en'
      }).toString()
    
      return url
    }
    
    const fetchGifs = () => {
      fetch(buildUrl()).then(data => data.json())
      .then(data => setGifs(data.data))
    }

    useEffect(() => {
      if(!gameSettings) return
    fetchGifs()
    }, [gameSettings])

    return gifs;
}

export default useGetGifs