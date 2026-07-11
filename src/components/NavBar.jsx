import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          Campus Placement App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

            <Link className="nav-link active" to="/">
              Add Registration
            </Link>

            <Link className="nav-link" to="/search">
              Search Registration
            </Link>

            <Link className="nav-link" to="/delete">
              Delete Registration
            </Link>

            <Link className="nav-link" to="/view">
              View All Registrations
            </Link>

          </div>
        </div>

      </div>
    </nav>
  )
}

export default NavBar