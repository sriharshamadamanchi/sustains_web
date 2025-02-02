// Copyright © 2025 Sustains AI, All Rights Reserved
export const MainAbsoluteTopSlide = () => (
  <header
    id = "header"
    className = "navbar navbar-expand-lg navbar-absolute-top navbar-light navbar-show-hide"
    data-hs-header-options = '{
    "fixMoment": 500,
    "fixEffect": "slide"
  }'
  >
    <div className = "container">
      <nav className = "js-mega-menu navbar-nav-wrap">
        {/* Default Logo */}
        <a
          className = "navbar-brand"
          href = "{{ url_for('index') }}"
          aria-label = "Sustains.ai"
        >
          <img
            className = "navbar-brand-logo"
            src = "{{ url_for('static', filename='svg/logos/logo.svg') }}"
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
                <a className = "nav-link" href = "{{ url_for('index') }}">
                  Home
                </a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href = "{{ url_for('about') }}">
                  About
                </a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href = "{{ url_for('services') }}">
                  Services
                </a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href = "{{ url_for('contact') }}">
                  Contact
                </a>
              </li>
              {/* End Navbar Links */}
              {/* Log in */}
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
              {/* End Log in */}
              {/* Sign up */}
              <li className = "nav-item">
                <a
                  className = "btn btn-dark d-none d-lg-inline-block"
                  href = "{{ url_for('pagesignup') }}"
                >
                  Sign up
                </a>
              </li>
              {/* End Sign up */}
            </ul>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </div>
  </header>
)
