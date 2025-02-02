// Copyright © 2025 Sustains AI, All Rights Reserved
export const MainLeftAligned = () => (
  <header id = "header" className = "navbar navbar-expand-lg navbar-light bg-white">
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
            alt = "Image Description"
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
          <ul className = "navbar-nav nav-pills">
            @@include("../navbar/navbar-nav-menu.html", {"{"}
            "category": "@@category", "subcategory": "@@subcategory", "link":
            "@@link"
            {"}"})
            <li className = "nav-divider" />
            {/* Log in */}
            <li className = "nav-item">
              <a
                className = "js-animation-link btn btn-ghost-secondary btn-no-focus me-2 me-lg-0"
                href = "javascript:;"
                role = "button"
                data-bs-toggle = "modal"
                data-bs-target = "#signupModal"
                data-hs-show-animation-options = '{
                 "targetSelector": "#signupModalFormLogin",
                 "groupName": "idForm"
               }'
              >
                Log in
              </a>
              <a
                className = "js-animation-link d-lg-none btn btn-primary"
                href = "javascript:;"
                role = "button"
                data-bs-toggle = "modal"
                data-bs-target = "#signupModal"
                data-hs-show-animation-options = '{
                 "targetSelector": "#signupModalFormSignup",
                 "groupName": "idForm"
               }'
              >
                <i className = "bi-person-circle me-1" /> Sign up
              </a>
            </li>
            {/* End Log in */}
            {/* Sign up */}
            <li className = "nav-item">
              <a
                className = "js-animation-link d-none d-lg-inline-block btn btn-primary"
                href = "javascript:;"
                role = "button"
                data-bs-toggle = "modal"
                data-bs-target = "#signupModal"
                data-hs-show-animation-options = '{
                 "targetSelector": "#signupModalFormSignup",
                 "groupName": "idForm"
               }'
              >
                <i className = "bi-person-circle me-1" /> Sign up
              </a>
            </li>
            {/* End Sign up */}
          </ul>
        </div>
        {/* End Collapse */}
      </nav>
    </div>
  </header>
)
