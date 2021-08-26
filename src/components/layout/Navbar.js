import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Movie List App</Link>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
