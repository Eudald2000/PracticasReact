const ListOfMovies = ({ movies }) => {
  return (
    <ul>
      {
        movies.map((movie) => (
          <li key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))
      }
    </ul>
  )
}

const NoMovies = () => {
  return (
    <p>No se han encontrado peliculas para esta busqueda</p>
  )
}

const Movies = ({ pelis }) => {
  const hasMovies = pelis?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={pelis}/>
      : <NoMovies/>
  )
}

export { Movies }
