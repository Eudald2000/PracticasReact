import { useEffect, useState } from 'react'
import './App.css'
import { getcatImg, getRandomFact } from './services/facts'

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
    getcatImg(TreeFirstWord).then(url => setImgUrl(url))
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
