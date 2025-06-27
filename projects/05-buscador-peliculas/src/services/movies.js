const API_KEY = '9b61b30b'
export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      title: movie.Title,
      image: movie.Poster,
      id: movie.imdbID,
      year: movie.Year
    }))
  } catch (error) {
    throw new Error('Error fetching movies: ' + error.message)
  }
}
