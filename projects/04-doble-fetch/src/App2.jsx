import { useEffect, useState } from 'react'
import './App.css'
import { getCatImage, getRandomFact } from './services/facts2'

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  const preFixApi = 'https://cataas.com'

  // Carga la frase al cargar la pagina
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }
  , [])

  // Cada vez que cambie la frase cambia la imagen
  useEffect(() => {
    if (!fact) return
    // Asi coje solo la primera palabra
    // const firstWorld = fact.split(' ')[0]

    // Selecciona desde x hasta y, las junta con un espacio
    const xWorlds = fact.split(' ').slice(0, 3).join(' ')
    getCatImage(xWorlds).then(newUrl => setImageURL(newUrl))
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>GATITOS</h1>
      <button onClick={handleClick}>Nueva frase </button>
      <section>
        {fact && <span>{fact}</span>}
        {imageURL && <img src={`${preFixApi}${imageURL}`} alt={`ImageURLn de gato sacada con ${fact}`} />}
      </section>
    </main>

  )
}
