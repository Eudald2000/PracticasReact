import { useEffect, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const [sort, setSort] = useState(false)
  const { error, setSearch, search } = useSearch()
  const { sortedMovies, getMovies, loading } = useMovies({
    search,
    sort
  })

  function handleSort () {
    setSort(!sort)
  }

  function handleSubmit (e) {
    e.preventDefault()
    getMovies({ search })
  }

  function handleChange (e) {
    const newQuery = e.target.value
    // Aqui podemos hacer prevalidaciones
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
  }

  useEffect(() => {
    console.log('Reehecho')
  }, [getMovies])

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            placeholder="Avengers, Star Wars ..."
            type="text"
          />
          <button type="submit">Buscar</button>
          <label>
            <input type="checkbox" onChange={handleSort} checked={sort} />
            Ordenar alfabéticamente
          </label>
        </form>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando...</p> : <Movies pelis={sortedMovies} />}
      </main>
    </div>
  )
}

export default App
