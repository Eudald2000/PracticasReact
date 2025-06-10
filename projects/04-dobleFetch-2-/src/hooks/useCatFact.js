import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  // Estado para almacenar el hecho sobre gatos
  const [fact, setFact] = useState()

  // Función para obtener un nuevo hecho
  const refreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // useEffect para obtener el primer hecho al montar el componente
  useEffect(refreshRandomFact, [])
  // [] como dependencia significa: ejecutar SOLO al montar el componente

  return { fact, refreshRandomFact }
}
