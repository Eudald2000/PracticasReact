import React, { useState } from "react";

export default function Buscador({onSearch}) {
  const [nuevaPalabra, setNuevaPalabra] = useState('');

  function handleChange(event) {
    setNuevaPalabra(event.target.value)
  }
  function buscar(event){
    event.preventDefault();
    onSearch(nuevaPalabra)
  }
  return (
    <form onSubmit={buscar} >
      <label>Que gifs quieres mostrar?</label>
      <input onChange={handleChange} type='text' value={nuevaPalabra} />
      <button type="submit" >Buscar</button>
    </form>
  )
}