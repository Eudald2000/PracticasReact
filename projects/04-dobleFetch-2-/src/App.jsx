import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'

// const CAT_ENDPOINT_IMG = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

function App () {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  },
  [])

  useEffect(() => {
    if (!fact) return

    const TreeFirstWord = fact.split(' ').slice(0, 3).join(' ')

    console.log(TreeFirstWord)
    fetch(`https://cataas.com/cat/says/${TreeFirstWord}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        // Funciona porque en el json de la respuesta viene la url
        const { url } = response
        setImgUrl(url)
      })
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <>
      <h1>FETCH GATOS</h1>
      <button onClick={ handleClick }>New fact</button>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={ imgUrl } alt={`Random image with ${fact}`} />}
    </>
  )
}

export default App
