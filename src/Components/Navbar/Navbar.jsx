import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import style from "./Navbar.module.css";
export default function Navbar() {
  return (
    <>
      <nav className={`${style.test} navbar navbar-expand-lg`}>
        <div className="container ">
          <Link className="navbar-brand fs-2 py-4" to="">
            START FRAMEWORK
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item px-3 ">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="about"
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item  px-3">
                <NavLink className="nav-link" to="/portfolio">
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item  px-3">
                <NavLink className="nav-link" to="/contact">
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
