// ESTE DOCUMENTO ES CORRECTO, BUENAS PRACTICAS, BIEN ESTRUCTURADO,
// PERO CON APP2.JSX PRACTICAS LOS HOOKS Y COMPONETIZAR, TODO LO QUE CONTENGA
// UN 2 EN EL TITULO ES PARA LOS HOOKS Y COMPONETIZAR

import { useEffect, useState } from 'react'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  const ApiCat = 'https://catfact.ninja/fact'
  const preFixApi = 'https://cataas.com'

  const getRandomFact = () => {
    fetch(ApiCat)
      .then(res => res.json())
      .then(data => {
        // Coje de todo el data, solo el fact
        const { fact } = data
        setFact(fact)
        // const { length } = data
        // setFact(length)
      })
  }
  // Carga la frase al cargar la pagina
  useEffect(() => {
    getRandomFact()
  }
  , [])

  // Cada vez que cambie la frase cambia la imagen
  useEffect(() => {
    if (!fact) return
    // Asi coje solo la primera palabra
    // const firstWorld = fact.split(' ')[0]

    // Selecciona desde x hasta y y las junta con un espacio
    const xWorlds = fact.split(' ').slice(0, 3).join(' ')

    fetch(`https://cataas.com/cat/says/${xWorlds}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageURL(url)
      })
  }, [fact])

  const handleClick = () => {
    getRandomFact()
  }

  return (
    <main>
      <h1>GATITOS</h1>
      <button onClick={handleClick}>Nueva frase</button>
      <section>
        {fact && <span>{fact}</span>}
        {imageURL && <img src={`${preFixApi}${imageURL}`} alt={`ImageURLn de gato sacada con ${fact}`} />}
      </section>
    </main>

  )
}
