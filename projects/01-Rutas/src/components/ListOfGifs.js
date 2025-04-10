import React, { useState, useEffect } from 'react';
import getGifs from '../services/getGifs'
import Gif from "./gif";

export default function ListOfGifs({ params }) {

  const keyWord = params.keyWord
  const [gifs, setGifs] = useState([])
  const [cargando, setCargando] = useState(false)

  useEffect(function () {
    setCargando(true)
    getGifs({ keyWord })
      .then(gifs => {
        setGifs(gifs)
        setCargando(false)
      }

      )
  }, [keyWord])

  if (cargando) return <i>  <span role="img" aria-label="cargando">⏳</span> Cargando </i>

  return <div>{
    gifs.map(({ id, url, title }) =>
      <Gif
        key={id}
        id={id}
        url={url}
        title={title} />
    )
  }

  </div>
}