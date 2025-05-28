import './App.css'
import { useCatimage } from './hooks/useCatimage'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './Components/Otro'

// const CAT_ENDPOINT_IMG = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatimage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <>
      <h1>FETCH GATOS</h1>
      <button onClick={ handleClick }>New fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={ imageUrl } alt={`Random image with ${fact}`} />}

      <Otro/>
    </>
  )
}

export default App
