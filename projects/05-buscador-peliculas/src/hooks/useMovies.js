import responseMovies from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'

export const useMovies = () => {
  const movies = responseMovies.Search

  const mappedMovies = movies.map(movie => ({
    title: movie.Title,
    image: movie.Poster,
    id: movie.imdbID,
    year: movie.Year
  }))

  return { movies: mappedMovies }
}
