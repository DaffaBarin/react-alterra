import React from 'react'

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand ms-3" href>
            <img src="assets/img/logo-ALTA.png" width={101} height={50} alt="Alta" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active text-end">
                <a className="nav-link home1 active" href>HOME</a>
              </li>
              <li className="nav-item text-end">
                <a className="nav-link about1" href>ABOUT</a>
              </li>
              <li className="nav-item text-end">
                <a className="nav-link ex1" href>EXPERIENCE</a>
              </li>
              <li className="nav-item text-end">
                <a className="nav-link con1" href="contact_us.html">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
