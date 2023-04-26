import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const allUsers = useSelector(state => state.app.users)
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h4 className="navbar-brand">UApp</h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to={"/"} className="nav-link">Create User</Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/read"} className="nav-link">All Users ({allUsers.length})</Link>
                    </li>
                </ul>
                <form className="d-flex w-50 mx-auto" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar