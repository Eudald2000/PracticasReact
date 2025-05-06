const apiKey = 'JODmfCYe8LSCs5Sl2YcAXBrA46im91Vj'

export default function getGifs({keyWord = 'anime'} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyWord}&limit=10&offset=0&rating=g&lang=en`
  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response
      if (Array.isArray(data)) {
        const gifs = data.map(gif => {
          const {images, title, id} = gif
          const {url} = images.downsized_medium
          return {title, id, url}
        })
        return gifs
      }
    })
}