// Copyright © 2025 Sustains AI, All Rights Reserved
export const Base = () => (
  <>
    <meta charSet = "UTF-8" />
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0" />
    <title>
      {"{"}% block title %{"}"}Sustains.ai{"{"}% endblock %{"}"}
    </title>
    <meta
      name = "description"
      content = "AI-Driven Risk Analytics for Finance and Energy"
    />
    {/* Main CSS */}
    <link
      href = "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      rel = "stylesheet"
    />
    <link
      href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel = "stylesheet"
    />
    <link
      rel = "stylesheet"
      href = "{{ url_for('static', filename='css/theme.min.css') }}"
    />
    <link
      rel = "stylesheet"
      href = "{{ url_for('static', filename='css/style.css') }}"
    />
    <link
      rel = "stylesheet"
      href = "{{ url_for('static', filename='css/bootstrap-icons.css') }}"
    />
    <link
      rel = "stylesheet"
      href = "{{ url_for('static', filename='css/hs-mega-menu.css') }}"
    />
    <link
      rel = "stylesheet"
      href = "{{ url_for('static', filename='css/snippets.min.css') }}"
    />
    {/* Header */}
    <header
      id = "header"
      className = "navbar navbar-expand-lg navbar-end navbar-light navbar-absolute-top navbar-show-hide"
      data-hs-header-options = '{"fixMoment": 0, "fixEffect": "slide"}'
    >
      <div className = "container">
        <nav className = "js-mega-menu navbar-nav-wrap">
          <a
            className = "navbar-brand"
            href = "{{ url_for('index') }}"
            aria-label = "Sustains.ai"
          >
            <img
              className = "navbar-brand-logo"
              src = "{{ url_for('static', filename='images/logo.png') }}"
              alt = "Sustains.ai Logo"
            />
          </a>
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
          <div className = "collapse navbar-collapse" id = "navbarNavDropdown">
            <ul className = "navbar-nav nav-pills ms-auto">
              <li className = "nav-item">
                <a className = "nav-link" href = "{{ url_for('index') }}">
                  Home
                </a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href = "{{ url_for('about') }}">
                  About Us
                </a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href = "{{ url_for('services') }}">
                  Services
                </a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href = "{{ url_for('hire_us') }}">
                  Hire us
                </a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href = "{{ url_for('contact') }}">
                  Contact
                </a>
              </li>
              <li className = "nav-item">
                <a
                  className = "btn btn-primary"
                  href = "{{ url_for('pagelogin') }}"
                >
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    {/* End Header */}
    {/* Main Content */}
    <main className = "container">
      {"{"}% block content %{"}"}
      {"{"}% endblock %{"}"}
    </main>
    {/* End Main Content */}
    {/* Footer */}
    <footer className = "p-5 bg-dark text-white">
      <div className = "container">
        <div className = "row">
          {/* Company Info */}
          <div className = "col-md-4">
            <h5>About Sustains.ai</h5>
            <p>
              We provide AI-driven solutions for financial and energy sectors,
              helping businesses make smarter, sustainable decisions.
            </p>
            <p>© 2024 Sustains.ai</p>
          </div>
          {/* End Company Info */}
          {/* Quick Links */}
          <div className = "col-md-4">
            <h5>Quick Links</h5>
            <ul className = "list-unstyled">
              <li>
                <a href = "{{ url_for('pagelogin') }}" className = "text-white">
                  Login
                </a>
              </li>
              <li>
                <a href = "{{ url_for('pagesignup') }}" className = "text-white">
                  Sign Up
                </a>
              </li>
              <li>
                <a href = "{{ url_for('careers') }}" className = "text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href = "#" className = "text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* End Quick Links */}
          {/* Contact Info */}
          <div className = "col-md-4">
            <h5>Contact Us</h5>
            <address>
              Kumaraswami Layout 2nd Stage
              <br />
              Bangalore, 560078
              <br />
              India
              <br />
              <a href = "mailto:contact@sustains.ai" className = "text-white">
                contact@sustains.ai
              </a>
              <br />
              <a href = "tel:+919876543210" className = "text-white">
                +91-98765-43210
              </a>
            </address>
          </div>
          {/* End Contact Info */}
        </div>
        <div className = "row mt-3">
          <div className = "col text-center">
            <p>Built with ❤️ by Sustains.ai Team</p>
          </div>
        </div>
      </div>
    </footer>
    {/* End Footer */}
    {/* JavaScript Libraries */}
  </>
)
