import React from 'react'

const Latest = ({ movies }) => {
  return (
    <div className="gri">
      {movies.map((movie) => (
        <div className="bod py-4 px-4" key={movie.id}>
          <div className="row">
            <div className="card mb-3 col-12" key={movie.id} style={{ maxWidth: "550px" }}>
              <div className="row ">
                <div className="col-lg-6 col-sm-12 p-3">
                  <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movies-posters" width="100%" />
                </div>
                <div className="col-lg-6 col-sm-12 mt-5">
                  <div className="card-body">
                    <div className="card-title">
                      {movie.title}
                    </div>
                    <div className="card-text">
                      {movie.overview.substring(0, 150) + '...'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Latest
