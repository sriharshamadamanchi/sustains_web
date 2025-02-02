// Copyright © 2025 Sustains AI, All Rights Reserved
export const NavbarNavMenu = () => (
  <>
    {/* Landings */}
    <li
      className = "hs-has-mega-menu nav-item"
      data-hs-mega-menu-item-options = '{"desktop": {"maxWidth": "40rem"}}'
    >
      <a
        id = "landingsMegaMenu"
        className = "hs-mega-menu-invoker nav-link dropdown-toggle @@if(category=='landings'){active}"
        aria-current = "page"
        href = "#"
        role = "button"
        aria-expanded = "false"
      >
        Landings
      </a>
      {/* Mega Menu */}
      <div
        className = "hs-mega-menu dropdown-menu"
        aria-labelledby = "landingsMegaMenu"
        style = {{ minWidth: "25rem" }}
      >
        {/* Main Content */}
        <div className = "row">
          <div className = "col-lg d-none d-lg-block">
            <div className = "d-flex align-items-start flex-column bg-light rounded-3 h-100 p-4">
              <span className = "fs-3 fw-bold d-block">Landings</span>
              <p className = "text-body">
                Accelerate the way your business builds modern sites at scale.
              </p>
              <div className = "mt-auto">
                <p className = "mb-1">
                  <a className = "link link-dark link-pointer" href = "#">
                    Learn more
                  </a>
                </p>
                <p className = "mb-1">
                  <a className = "link link-dark link-pointer" href = "#">
                    Why Unify Template
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className = "col-sm">
            <div className = "navbar-dropdown-menu-inner">
              <span className = "dropdown-header">Classic</span>
              <a
                className = "dropdown-item @@if(link=='index.html'){active}"
                href = "@@autopath/index.html"
              >
                <i className = "bi-building me-2" /> Corporate
              </a>
              <a
                className = "dropdown-item @@if(link=='landing-business.html'){active}"
                href = "@@autopath/landing-business.html"
              >
                <i className = "bi-briefcase me-2" /> Business{" "}
                <span className = "badge text-primary">New</span>
              </a>
              <a
                className = "dropdown-item @@if(link=='landing-consulting.html'){active}"
                href = "@@autopath/landing-consulting.html"
              >
                <i className = "bi-chat-right-dots me-2" /> Consulting{" "}
                <span className = "badge text-primary">New</span>
              </a>
              <a
                className = "dropdown-item @@if(link=='landing-saas.html'){active}"
                href = "@@autopath/landing-saas.html"
              >
                <i className = "bi-tropical-storm me-2" /> SaaS
              </a>
              <a
                className = "dropdown-item @@if(link=='landing-services.html'){active}"
                href = "@@autopath/landing-services.html"
              >
                <i className = "bi-gear me-2" /> Services
              </a>
            </div>
          </div>
        </div>
        {/* End Main Content */}
      </div>
      {/* End Mega Menu */}
    </li>
    {/* End Landings */}
    {/* Pages */}
    <li className = "hs-has-mega-menu nav-item">
      <a
        id = "pagesMegaMenu"
        className = "hs-mega-menu-invoker nav-link dropdown-toggle @@if(category=='pages'){active}"
        href = "#"
        role = "button"
        aria-expanded = "false"
      >
        Pages
      </a>
      {/* Mega Menu */}
      <div
        className = "hs-mega-menu hs-position-right dropdown-menu w-100"
        aria-labelledby = "pagesMegaMenu"
        style = {{ minWidth: "42rem" }}
      >
        {/* Main Content */}
        <div className = "navbar-dropdown-menu-inner">
          <div className = "row">
            <div className = "col-sm-6 col-lg-3">
              <span className = "dropdown-header">Company</span>
              <a
                className = "dropdown-item @@if(link=='page-about.html'){active}"
                href = "@@autopath/page-about.html"
              >
                About
              </a>
              <a
                className = "dropdown-item @@if(link=='page-customer-stories.html'){active}"
                href = "@@autopath/page-customer-stories.html"
              >
                Customer Stories
              </a>
              <a
                className = "dropdown-item @@if(link=='page-customer-story.html'){active}"
                href = "@@autopath/page-customer-story.html"
              >
                Customer Story
              </a>
              <a
                className = "dropdown-item @@if(link=='page-help-center.html'){active}"
                href = "@@autopath/page-help-center.html"
              >
                Help Center
              </a>
              <a
                className = "dropdown-item @@if(link=='page-help-center-categories.html'){active}"
                href = "@@autopath/page-help-center-categories.html"
              >
                Help Center: Categories
              </a>
              <a
                className = "dropdown-item @@if(link=='page-help-center-article.html'){active}"
                href = "@@autopath/page-help-center-article.html"
              >
                Help Center: Article
              </a>
            </div>
            <div className = "col-sm-6 col-lg-3 mt-n5 mt-sm-0 mb-3 mb-lg-0">
              <span className = "dropdown-header invisible">Company</span>
              <a
                className = "dropdown-item @@if(link=='page-careers.html'){active}"
                href = "@@autopath/page-careers.html"
              >
                Careers
              </a>
              <a
                className = "dropdown-item @@if(link=='page-careers-role-overview.html'){active}"
                href = "@@autopath/page-careers-role-overview.html"
              >
                Careers: Role Overview
              </a>
              <a
                className = "dropdown-item @@if(link=='page-careers-apply.html'){active}"
                href = "@@autopath/page-careers-apply.html"
              >
                Careers: Apply
              </a>
              <a
                className = "dropdown-item @@if(link=='page-hire-us.html'){active}"
                href = "@@autopath/page-hire-us.html"
              >
                Hire Us
              </a>
              <a
                className = "dropdown-item @@if(link=='page-login.html'){active}"
                href = "@@autopath/page-login.html"
              >
                Log In
              </a>
              <a
                className = "dropdown-item @@if(link=='page-signup.html'){active}"
                href = "@@autopath/page-signup.html"
              >
                Sign Up
              </a>
              <a
                className = "dropdown-item @@if(link=='page-reset-password.html'){active}"
                href = "@@autopath/page-reset-password.html"
              >
                Forgot Password
              </a>
            </div>
            <div className = "col-sm-6 col-lg-3 mb-3 mb-lg-0">
              <span className = "dropdown-header">Portfolio</span>
              <a
                className = "dropdown-item @@if(link=='portfolio-modern.html'){active}"
                href = "@@autopath/portfolio-modern.html"
              >
                Modern
              </a>
              <a
                className = "dropdown-item @@if(link=='portfolio-case-study.html'){active}"
                href = "@@autopath/portfolio-case-study.html"
              >
                Case Study
              </a>
            </div>
            <div className = "col-sm-6 col-lg-3">
              <span className = "dropdown-header">Specialty pages</span>
              <a
                className = "dropdown-item @@if(link=='page-pricing.html'){active}"
                href = "@@autopath/page-pricing.html"
              >
                Pricing
              </a>
              <a
                className = "dropdown-item @@if(link=='page-contacts.html'){active}"
                href = "@@autopath/page-contacts.html"
              >
                Contacts
              </a>
              <a
                className = "dropdown-item @@if(link=='page-coming-soon.html'){active}"
                href = "@@autopath/page-coming-soon.html"
              >
                Coming Soon
              </a>
              <a
                className = "dropdown-item @@if(link=='page-coming-soon-simple.html'){active}"
                href = "@@autopath/page-coming-soon-simple.html"
              >
                Coming Soon: Simple
              </a>
              <a
                className = "dropdown-item @@if(link=='page-error-404.html'){active}"
                href = "@@autopath/page-error-404.html"
              >
                Error 404
              </a>
              <a
                className = "dropdown-item @@if(link=='page-terms.html'){active}"
                href = "@@autopath/page-terms.html"
              >
                Terms &amp; Conditions
              </a>
              <a
                className = "dropdown-item @@if(link=='page-privacy.html'){active}"
                href = "@@autopath/page-privacy.html"
              >
                Privacy &amp; Policy
              </a>
            </div>
          </div>
          {/* End Row */}
        </div>
        {/* End Main Content */}
      </div>
      {/* End Mega Menu */}
    </li>
    {/* End Pages */}
    {/* Blog */}
    <li
      className = "hs-has-mega-menu nav-item"
      data-hs-mega-menu-item-options = '{"desktop": {"maxWidth": "50rem"}}'
    >
      <a
        id = "blogMegaMenu"
        className = "hs-mega-menu-invoker nav-link dropdown-toggle @@if(category=='blog'){active}"
        href = "#"
        role = "button"
        aria-expanded = "false"
      >
        Blog
      </a>
      {/* Mega Menu */}
      <div
        className = "hs-mega-menu dropdown-menu"
        aria-labelledby = "blogMegaMenu"
        style = {{ minWidth: "12rem" }}
      >
        {/* Main Content */}
        <div className = "row">
          <div className = "col-lg d-none d-lg-block">
            <div className = "bg-light rounded-3 h-100 p-4">
              <span className = "d-block fs-4 fw-bold text-dark mb-3">
                Latest from the Blog
              </span>
              <div className = "row">
                <div className = "col-md-6 mb-3 mb-md-0">
                  {/* Card */}
                  <a
                    className = "d-block"
                    href = "@@autopath/documentation/index.html"
                  >
                    <img
                      className = "img-fluid rounded-2 mb-2"
                      src = "@@autopath/assets/svg/components/card-1.svg"
                      alt = "Image Description"
                    />
                    <span className = "fs-4 fw-medium text-dark text-inherit">
                      Documentation
                    </span>
                    <p className = "fs-6 text-body">
                      Development guides for building projects with Unify
                    </p>
                    <span className = "link link-pointer">Learn more</span>
                  </a>
                  {/* End Card */}
                </div>
                {/* End Col */}
                <div className = "col-md-6">
                  {/* Card */}
                  <a className = "d-block" href = "@@autopath/snippets/index.html">
                    <img
                      className = "img-fluid rounded-2 mb-2"
                      src = "@@autopath/assets/svg/components/card-2.svg"
                      alt = "Image Description"
                    />
                    <span className = "fs-4 fw-medium text-dark text-inherit">
                      Snippets
                    </span>
                    <p className = "fs-6 text-body">
                      Move quickly with copy-to-clipboard feature
                    </p>
                    <span className = "link link-pointer">Learn more</span>
                  </a>
                  {/* End Card */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          <div className = "col-lg-4">
            <div className = "navbar-dropdown-menu-inner">
              <span className = "dropdown-header">Classic</span>
              <a
                className = "dropdown-item @@if(link=='blog-modern.html'){active}"
                href = "@@autopath/blog-modern.html"
              >
                Modern <span className = "badge text-primary">New</span>
              </a>
              <a
                className = "dropdown-item @@if(link=='blog-grid.html'){active}"
                href = "@@autopath/blog-grid.html"
              >
                Grid
              </a>
              <a
                className = "dropdown-item @@if(link=='blog-list.html'){active}"
                href = "@@autopath/blog-list.html"
              >
                List
              </a>
              <a
                className = "dropdown-item @@if(link=='blog-article.html'){active}"
                href = "@@autopath/blog-article.html"
              >
                Article <span className = "badge text-primary">New</span>
              </a>
              <a
                className = "dropdown-item @@if(link=='blog-author-profile.html'){active}"
                href = "@@autopath/blog-author-profile.html"
              >
                Author Profile
              </a>
            </div>
          </div>
        </div>
        {/* End Main Content */}
      </div>
      {/* End Mega Menu */}
    </li>
    {/* End Blog */}
    {/* Docs */}
    <li
      className = "hs-has-mega-menu nav-item"
      data-hs-mega-menu-item-options = '{"desktop": {"maxWidth": "20rem"}}'
    >
      <a
        id = "docsMegaMenu"
        className = "hs-mega-menu-invoker nav-link dropdown-toggle @@if(category=='docs'){active}"
        href = "#"
        role = "button"
        aria-expanded = "false"
      >
        Docs
      </a>
      {/* Mega Menu */}
      <div
        className = "hs-mega-menu hs-position-right-fix dropdown-menu"
        aria-labelledby = "docsMegaMenu"
        style = {{ minWidth: "20rem" }}
      >
        {/* Link */}
        <a
          className = "navbar-dropdown-menu-media-link"
          href = "@@autopath/documentation/index.html"
        >
          <div className = "d-flex">
            <div className = "flex-shrink-0">
              <i className = "bi-file-earmark-text fs-2 text-dark" />
            </div>
            <div className = "flex-grow-1 ms-3">
              <span className = "navbar-dropdown-menu-media-title">
                Documentation{" "}
                <span className = "badge badge-sm bg-primary rounded-pill ms-1">
                  v3.2.2
                </span>
              </span>
              <p className = "navbar-dropdown-menu-media-desc">
                Development guides for building projects with Unify
              </p>
            </div>
          </div>
        </a>
        {/* End Link */}
        <div className = "dropdown-divider" />
        {/* Link */}
        <a
          className = "navbar-dropdown-menu-media-link"
          href = "@@autopath/snippets/index.html"
        >
          <div className = "d-flex">
            <div className = "flex-shrink-0">
              <i className = "bi-layers fs-2 text-dark" />
            </div>
            <div className = "flex-grow-1 ms-3">
              <span className = "navbar-dropdown-menu-media-title">Snippets</span>
              <p className = "navbar-dropdown-menu-media-desc">
                Move quickly with copy-to-clipboard feature
              </p>
            </div>
          </div>
        </a>
        {/* End Link */}
      </div>
      {/* End Mega Menu */}
    </li>
    {/* End Docs */}
  </>
)
