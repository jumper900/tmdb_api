import React from 'react'
import MoviesList from './moies_lists/MoviesList';
import PopularMovies from './movies_provider/PopularMovies'


const Home = () => {
  const { data, loading } = PopularMovies('https://api.themoviedb.org/3/movie/popular?api_key=2a0f926961d00c667e191a21c14461f8&language=en-US&page=1');
  return (
    <div>
      {data && <MoviesList movies={data} />}
    </div>
  )
}

export default Home
