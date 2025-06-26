import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { movies } = useMovies()
  const { error, setSearch, search } = useSearch()

  function handleSubmit (e) {
    e.preventDefault()
    console.log({ search })
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
      <Movies pelis={movies}/>
    </main>
    </div>
  )
}

export default App
