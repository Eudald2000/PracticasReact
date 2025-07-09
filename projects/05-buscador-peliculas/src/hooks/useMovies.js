// import withResults from '../mocks/with-results.json'
// import withoutResults from '../mocks/no-results.json'
import { useRef, useState, useMemo } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (search === previousSearch.current) return

      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (error) {
        setError(error.message)
        setMovies([])
      } finally {
        setLoading(false)
      }
    }
  }, [])

  const sortedMovies = useMemo(() => {
    if (!sort) return movies
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return { sortedMovies, getMovies, loading }
}
