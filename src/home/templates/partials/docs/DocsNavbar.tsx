// Copyright © 2025 Sustains AI, All Rights Reserved

export const DocsNavbar = () => (
  <header
    id = "header"
    className = "navbar navbar-expand navbar-fixed navbar-end navbar-light navbar-sticky-lg-top bg-white"
  >
    <div className = "container-fluid">
      <nav className = "navbar-nav-wrap">
        <div className = "row flex-grow-1">
          {/* Default Logo */}
          <div className = "docs-navbar-sidebar-container d-flex align-items-center mb-2 mb-lg-0">
            <a
              className = "navbar-brand"
              href = "@@autopath/documentation/index.html"
              aria-label = "Unify"
            >
              <img
                className = "navbar-brand-logo"
                src = "@@autopath/assets/svg/logos/logo.svg"
                alt = "Logo"
              />
            </a>
            <a href = "@@autopath/documentation/changelog.html">
              <span className = "badge bg-soft-primary text-primary">v3.2.2</span>
            </a>
          </div>
          {/* End Default Logo */}
          <div className = "col-md px-lg-0">
            <div className = "d-flex justify-content-between align-items-center px-lg-5 px-xl-10">
              <div className = "d-none d-md-block">
                {/* Search Form */}
                <form
                  id = "docsSearch"
                  className = "position-relative"
                  data-hs-list-options = '{
               "searchMenu": true,
               "keyboard": true,
               "item": "searchTemplate",
               "valueNames": ["component", "category", {"name": "link", "attr": "href"}],
               "empty": "#searchNoResults"
             }'
                >
                  {/* Input Group */}
                  <div
                    className = "input-group-merge navbar-input-group"
                    style = {{ minWidth: "20rem" }}
                  >
                    <div className = "input-group-prepend input-group-text">
                      <i className = "bi-search" />
                    </div>
                    <input
                      type = "search"
                      className = "search form-control"
                      placeholder = "Search in docs"
                      aria-label = "Search in docs"
                    />
                    <a
                      className = "input-group-append input-group-text"
                      href = "javascript:;"
                    >
                      <i
                        id = "clearSearchResultsIcon"
                        className = "bi-x"
                        style = {{ display: "none" }}
                      />
                    </a>
                  </div>
                  {/* End Input Group */}
                  {/* List */}
                  <div
                    className = "list dropdown-menu w-100 overflow-auto"
                    style = {{ maxHeight: "16rem" }}
                  />
                  {/* End List */}
                  {/* Empty */}
                  <div id = "searchNoResults" style = {{ display: "none" }}>
                    <div className = "text-center p-4">
                      <img
                        className = "mb-3"
                        src = "@@autopath/assets/svg/illustrations/oc-error.svg"
                        alt = "Image Description"
                        style = {{ width: "7rem" }}
                      />
                      <p className = "mb-0">No Results</p>
                    </div>
                  </div>
                  {/* End Empty */}
                </form>
                {/* End Search Form */}
                {/* List Item Template */}
                <div className = "d-none">
                  <div id = "searchTemplate" className = "dropdown-item">
                    <a className = "d-block link" href = "#">
                      <span className = "category d-block text-muted mb-1" />
                      <span className = "component fw-bold text-dark" />
                    </a>
                  </div>
                </div>
                {/* End List Item Template */}
              </div>
              {/* Navbar */}
              <ul className = "navbar-nav p-0">
                <li className = "nav-item">
                  <a
                    className = "btn btn-ghost-secondary"
                    href = "https://htmlstream.com/contact-us"
                    target = "_blank" rel="noreferrer"
                  >
                    Get Support <i className = "bi-box-arrow-up-right ms-1" />
                  </a>
                </li>
                <li className = "nav-item">
                  <a className = "btn btn-primary" href = "@@autopath/index.html">
                    <i className = "bi-eye me-1" /> Preview Demo
                  </a>
                </li>
              </ul>
              {/* End Navbar */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </nav>
    </div>
  </header>
)
