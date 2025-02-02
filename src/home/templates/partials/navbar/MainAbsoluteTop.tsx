// Copyright © 2025 Sustains AI, All Rights Reserved
import React from "react"

export const MainAbsoluteTop = () => (
  <header
    id = "header"
    className = "navbar navbar-expand-lg navbar-absolute-top navbar-light navbar-show-hide"
    data-hs-header-options = '{"fixMoment": 500,"fixEffect": "slide"}'
  >
    <div className = "container">
      <nav className = "js-mega-menu navbar-nav-wrap">
        {/* Default Logo */}
        <a
          className = "navbar-brand"
          href = "/"
          aria-label = "Sustains.ai"
        >
          <img
            className = "navbar-brand-logo p-0"
            src = {require("../../../static/svg/logos/Frame10.svg").default}
            alt = "Sustains.ai Logo"
          />
        </a>
        {/* End Default Logo */}
        {/* Toggler */}
        <button
          className = "navbar-toggler"
          type = "button"
          data-bs-toggle = "collapse"
          data-bs-target = "#navbarNavDropdown"
          aria-controls = "navbarNavDropdown"
          aria-expanded = "false"
          aria-label = "Toggle navigation"
        >
          <span className = "navbar-toggler-default">
            <i className = "bi-list" />
          </span>
          <span className = "navbar-toggler-toggled">
            <i className = "bi-x" />
          </span>
        </button>
        {/* End Toggler */}
        {/* Collapse */}
        <div className = "collapse navbar-collapse" id = "navbarNavDropdown">
          <div className = "navbar-absolute-top-scroller">
            <ul className = "navbar-nav nav-pills">
              {/* Navbar Links */}
              <li className = "nav-item">
                <a className = "nav-link" href = "/">
                  Home
                </a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href = "/about">
                  About
                </a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href = "/products">
                  Products
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/entropy">
                  Entropy
                </a>
              </li> */}
              <li className = "nav-item">
                <a className = "nav-link" href = "/contact">
                  Contact
                </a>
              </li>
              <li className = "nav-item ms-lg-auto">
                <a
                  className = "btn btn-ghost-dark me-2 me-lg-0"
                  href = "{{ url_for('pagelogin') }}"
                >
                  Log in
                </a>
                <a
                  className = "btn btn-dark d-lg-none"
                  href = "{{ url_for('pagesignup') }}"
                >
                  Sign up
                </a>
              </li>
              <li className = "nav-item">
                <a
                  className = "btn btn-dark d-none d-lg-inline-block"
                  href = "{{ url_for('pagesignup') }}"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </div>
  </header>
)
