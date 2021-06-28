import React from 'react'
import PopularMovies from '../movies_provider/PopularMovies';
import Latest from '../navs/Latest';

const Lase = () => {
  const { data, loading } = PopularMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=2a0f926961d00c667e191a21c14461f8&language=en-US&page=1');
  return (
    <div>
      {data && <Latest movies={data} />}
    </div>
  )
}

export default Lase
