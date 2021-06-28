import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">TMDB</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/upcoming" className="nav-link">UPCOMING</Link>
              </li>
              <li className="nav-item">
                <Link to="/latest" className="nav-link">LATEST</Link>
              </li>
            </ul>
          </div>
        </div>


      </nav>

    </div>
  )
}

export default Navbar
