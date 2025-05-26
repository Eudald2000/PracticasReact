import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMG = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

function App () {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        // Fact contiene un array de palabras, con split las separamos por espacios
        // y con slice tomamos las primeras 3, y con join las unimos nuevamente
        const firstWord = fact.split(' ').slice(0, 3).join(' ')
        console.log(firstWord)

        // Asi cojemos solo la primera palabra
        // fact.split(' '[0])

        fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
          .then(res => res.json())
          .then(response => {
            // Funciona porque en el json de la respuesta viene la url
            const { url } = response
            setImgUrl(url)
            console.log(url)
          })
      })
  }, [])

  return (
    <>
      <h1>FETCH GATOS</h1>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={ imgUrl } alt={`Random image with ${fact}`} />}
    </>
  )
}

export default App
