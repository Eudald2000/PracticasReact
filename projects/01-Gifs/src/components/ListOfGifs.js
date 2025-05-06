import React, { useState, useEffect } from 'react';
import getGifs from '../services/getGifs'
import Gif from "./gif";

export default function ListOfGifs({keyWord}){
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    getGifs({ keyWord })
    .then(gifs => setGifs(gifs))
  }, [keyWord])
  
  return(
    gifs.map(({id, url, title}) =>
      <Gif 
      key={id}
      id={id} 
      url={url} 
      title={title}/>
    )
  )
}