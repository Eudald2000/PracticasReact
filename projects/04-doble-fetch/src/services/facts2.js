const ApiCat = 'https://catfact.ninja/fact'

// Ahora esto es reutilizable, importante no tener aqui el setFact
export const getRandomFact = async () => {
  const res = await fetch(ApiCat)
  const data = await res.json()
  // Coje de todo el data, solo el fact
  const { fact } = data
  return fact
}

export const getCatImage = async (palabras) => {
  const res = await fetch(`https://cataas.com/cat/says/${palabras}?size=50&color=red&json=true`)
  const response = await res.json()
  const { url } = response
  return url
}

// ESTUCTURA BASICA DE UN FETCH FACIL DE TRANSFORMAR EN ASYNC
export const estructura = () => {
  return fetch('https://api.com/')
    .then(res => res.json())
    .then(response => {
    })
}
