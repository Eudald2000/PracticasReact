import { useEffect, useState } from 'react'

export function App () {
  const [fact, setFact] = useState()

  const ApiCat = 'https://catfact.ninja/fact'
  // const apiIMG = 'https://cataas.com/cat/says/hello'

  useEffect(() => {
    fetch(ApiCat)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }
  , [])

  return (
    <main>
      <h1>GATOS</h1>
      {fact && <span>{fact}</span>}
    </main>
  )
}
