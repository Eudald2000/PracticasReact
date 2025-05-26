const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getcatImg = async (frase) => {
  const res = await fetch(`https://cataas.com/cat/says/${frase}?fontSize=50&fontColor=red&json=true`)
  const response = await res.json()
  // Funciona porque en el json de la respuesta viene la url
  const { url } = response
  return url
}
