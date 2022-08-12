// SCSS
import "../assets/scss/_navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: "none" }}>
            <a className="navbar-brand mx-2" href="/#">
              Vault <span className="small-brand"> - Financial Manager</span>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="https://github.com/IsaiahWright902"
                    target="blank"
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/isaiah-wright-4b89191a3/"
                    target="blank"
                  >
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Isaiah Wright
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Updates
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
