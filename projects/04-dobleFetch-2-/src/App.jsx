import './App.css'
import { useCatimage } from './hooks/useCatimage'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './Components/Otro'

function App () {
  // Usar el hook de hechos (devuelve fact y función para refrescar)
  const { fact, refreshRandomFact } = useCatFact()

  // Usar el hook de imágenes (devuelve imageUrl dependiendo del fact)
  const { imageUrl } = useCatimage({ fact })

  // Manejador de clic para obtener nuevo hecho
  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <>
      <h1>FETCH GATOS</h1>
      <button onClick={handleClick}>New fact</button>

      {/* Mostrar el hecho si existe */}
      {fact && <p>{fact}</p>}

      {/* Mostrar la imagen si la URL está disponible */}
      {imageUrl && <img src={imageUrl} alt={`Random image with ${fact}`} />}

      <Otro/>
    </>
  )
}

export default App
