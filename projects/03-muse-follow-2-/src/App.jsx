import { useEffect, useState } from 'react'
import { PointerEffect } from './components/PointerEffect'

function App () {
  const [isPointerEffectEnabled, setIsPointerEffectEnabled] = useState(false)
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })

  // pointer move event
  useEffect(() => {
    const updatePointerPosition = (event) => {
      const [mouseX, mouseY] = [event.clientX, event.clientY]
      setPointerPosition({ x: mouseX, y: mouseY })
    }
    if (isPointerEffectEnabled) {
      window.addEventListener('pointermove', updatePointerPosition)
    }
    return () => {
      window.removeEventListener('pointermove', updatePointerPosition)
    }
  }, [isPointerEffectEnabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', isPointerEffectEnabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [isPointerEffectEnabled])
  return (
    <>
      <main>
        <PointerEffect enabled={isPointerEffectEnabled} position={pointerPosition}></PointerEffect>
        <button onClick={() => setIsPointerEffectEnabled(!isPointerEffectEnabled)}>
          {isPointerEffectEnabled ? 'Desactivar' : 'Activar'} efecto del puntero
        </button>
      </main>
    </>
  )
}

export default App
