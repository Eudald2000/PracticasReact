import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import { Movies } from './components/Movies'

function App () {
  const movies = responseMovies.Search
  return (
    <div className='page'>
    <header>
      <h1>Buscador de peliculas</h1>
      <form action="">
        <input placeholder='Avengers, Star Wars ...' type="text" name="campoPeliculas" id="" />
        <button type="submit">Buscar</button>
      </form>
    </header>

    <main>
      <Movies pelis={movies}/>
    </main>
    </div>
  )
}

export default App
