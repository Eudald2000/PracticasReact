import { useEffect, useState } from 'react'
import { getcatImg } from '../services/facts'

export function useCatimage ({ fact }) {
  // Estado para almacenar la URL de la imagen
  const [imageUrl, setimageUrl] = useState()

  // useEffect que se ejecuta cuando cambia el 'fact'
  useEffect(() => {
    // Si no hay fact, no hacer nada
    if (!fact) return

    // Obtener las primeras 3 palabras del hecho
    const TreeFirstWord = fact.split(' ').slice(0, 3).join(' ')
    // Obtener la imagen y actualizar el estado
    getcatImg(TreeFirstWord).then(url => setimageUrl(url))
  }, [fact]) // <-- Dependencia: se ejecuta cuando 'fact' cambia

  return { imageUrl }
}
// retorna { imageUrl: 'https://...' }
