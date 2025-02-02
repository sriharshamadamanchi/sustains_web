// Copyright © 2025 Sustains AI, All Rights Reserved
export const MainStickyTopToggle = () => (
  <header
    id = "header"
    className = "navbar navbar-expand-lg navbar-end navbar-sticky-top navbar-show-hide navbar-light"
    data-hs-header-options = '{"fixMoment": 500,"fixEffect": "slide"}'
  >
    <div className = "container">
      <nav className = "js-mega-menu navbar-nav-wrap">
        {/* Default Logo */}
        <a
          className = "navbar-brand"
          href = "@@autopath/index.html"
          aria-label = "Unify"
        >
          <img
            className = "navbar-brand-logo"
            src = "@@autopath/assets/svg/logos/logo.svg"
            alt = "Logo"
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
          <div className = "navbar-sticky-top-scroller">
            <ul className = "navbar-nav nav-pills">
              @@include("../navbar/navbar-nav-menu.html", {"{"}
              "category": "@@category", "subcategory": "@@subcategory", "link":
              "@@link"
              {"}"}){/* Log in */}
              <li className = "nav-item ms-lg-auto">
                <a
                  className = "btn btn-ghost-dark me-2 me-lg-0"
                  href = "@@autopath/page-login.html"
                >
                  Log in
                </a>
                <a
                  className = "btn btn-dark d-lg-none"
                  href = "@@autopath/page-signup.html"
                >
                  Sign up
                </a>
              </li>
              {/* End Log in */}
              {/* Sign up */}
              <li className = "nav-item">
                <a
                  className = "btn btn-dark d-none d-lg-inline-block"
                  href = "@@autopath/page-signup.html"
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
