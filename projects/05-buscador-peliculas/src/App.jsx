import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { error, setSearch, search } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })

  function handleSubmit (e) {
    e.preventDefault()
    getMovies()
  }

  function handleChange (e) {
    const newQuery = e.target.value
    // Aqui podemos hacer prevalidaciones
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
  }

  return (
    <div className='page'>
    <header>
      <h1>Buscador de peliculas</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={search} placeholder='Avengers, Star Wars ...' type="text"/>
        <button type="submit">Buscar</button>
      </form>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
    </header>

    <main>
      {
        loading ? <p>Cargando...</p> : <Movies pelis={movies}/>
      }
    </main>
    </div>
  )
}

export default App
