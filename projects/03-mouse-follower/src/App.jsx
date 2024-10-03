import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState('rgba(0, 0, 0, 0.5)')
  const [time, setTime] = useState(0)

  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  }

  useEffect(() => {
    let timer;

    if(enabled){
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return() => {
      clearInterval(timer);
      setTime(0)
    }

  },[enabled])

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    //clean (se ejecuta cuando se desmonta el componente o cambian las dependencias)
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])


  return (
    <main>
      {enabled &&
        <div style={{
          position: 'absolute',
          backgroundColor: `${color}`,
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px`
        }}>
        </div>
      }
      <button onClick={() => { setEnabled(!enabled) }}>
        {enabled ? 'Desactivar' : 'Activar'} seguir el puntero
      </button>
      {
        enabled &&
        <button onClick={changeColor}>Cambiar color aleatorio</button>
      }

      <p>Tiempo transcurrido con el puntero activo: {time} segundos</p>
    </main>
  )
}

export default App
