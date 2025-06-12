const ListOfMovies = ({ movies }) => {
  return (
    <ul>
      {
        movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} />
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
