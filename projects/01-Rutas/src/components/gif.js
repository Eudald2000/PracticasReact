import React from "react";
import './Gif.css';
// Rutas con wouter

export default function Gif({ title, id, url }) {
  return (
    <a href={id} className="gif">
      <h4>{title}</h4>
      <img alt={id} src={url} />
    </a>
  )
}