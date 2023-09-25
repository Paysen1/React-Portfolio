import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Paysen
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/AboutMe">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Resume">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

export default Navigation;