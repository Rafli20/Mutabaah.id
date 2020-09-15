import React from 'react'

const Navbar = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-success fixed-top">
                <div className="container">
                    <a className="navbar-brand text-white" href="/">Mutaba'ah</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link text-white" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/data-mutabaah">Data Mutaba'ah</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/absen-mutabaah">Absen Mutaba'ah</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;