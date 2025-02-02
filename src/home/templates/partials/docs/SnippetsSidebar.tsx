// Copyright © 2025 Sustains AI, All Rights Reserved
export const SnippetsSidebar = () => (
  <nav
    className = "js-nav-scroller navbar navbar-expand-lg navbar-sidebar navbar-vertical navbar-light bg-white border-end"
    data-hs-nav-scroller-options = '{"type": "vertical","target": ".navbar-nav .active","offset": 80}'
  >
    {/* Navbar Toggle */}
    <button
      type = "button"
      className = "navbar-toggler btn btn-white d-grid w-100"
      data-bs-toggle = "collapse"
      data-bs-target = "#navbarVerticalNavMenu"
      aria-label = "Toggle navigation"
      aria-expanded = "false"
      aria-controls = "navbarVerticalNavMenu"
    >
      <span className = "d-flex justify-content-between align-items-center">
        <span className = "h6 mb-0">Nav menu</span>
        <span className = "navbar-toggler-default">
          <i className = "bi-list" />
        </span>
        <span className = "navbar-toggler-toggled">
          <i className = "bi-x" />
        </span>
      </span>
    </button>
    {/* End Navbar Toggle */}
    {/* Navbar Collapse */}
    <div id = "navbarVerticalNavMenu" className = "collapse navbar-collapse">
      <div
        className = "navbar-brand-wrapper border-end"
        style = {{ height: "auto" }}
      >
        {/* Default Logo */}
        <div className = "d-flex align-items-center mb-3">
          <a
            className = "navbar-brand"
            href = "@@autopath/snippets/index.html"
            aria-label = "Unify"
          >
            <img
              className = "navbar-brand-logo"
              src = "@@autopath/assets/svg/logos/logo.svg"
              alt = "Logo"
            />
          </a>
          <a
            className = "navbar-brand-badge"
            href = "@@autopath/documentation/changelog.html"
          >
            <span className = "badge bg-soft-primary text-primary ms-2">
              v3.2.2
            </span>
          </a>
        </div>
        {/* End Default Logo */}
        {/* Nav */}
        <ul className = "nav nav-segment nav-fill nav-justified">
          <li className = "nav-item">
            <a className = "nav-link" href = "@@autopath/documentation/index.html">
              Docs
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link active"
              href = "@@autopath/snippets/index.html"
            >
              Snippets
            </a>
          </li>
        </ul>
        {/* End Nav */}
      </div>
      <div className = "docs-navbar-sidebar-aside-body navbar-sidebar-aside-body">
        <ul
          id = "navbarSettings"
          className = "navbar-nav nav nav-vertical nav-tabs nav-tabs-borderless nav-sm"
        >
          <li className = "nav-item">
            <span className = "nav-subtitle">Snippets</span>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='index.html'){active}"
              href = "@@autopath/snippets/index.html"
            >
              Introduction
            </a>
          </li>
          <li className = "nav-item my-2 my-lg-5" />
          <li className = "nav-item">
            <span className = "nav-subtitle">Navbar / Heroes</span>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='navbar.html'){active}"
              href = "@@autopath/snippets/navbar.html"
            >
              Headers (Navbar)
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='hero-sections.html'){active}"
              href = "@@autopath/snippets/hero-sections.html"
            >
              Hero Sections
            </a>
          </li>
          <li className = "nav-item my-2 my-lg-5" />
          <li className = "nav-item">
            <span className = "nav-subtitle">Foundations</span>
          </li>
          <li className = "nav-item @@if(category=='features'){active}">
            <a
              className = "nav-link dropdown-toggle dropdown-toggle-collapse"
              href = "#snippetsSidebarNavFeaturesCollapse"
              role = "button"
              data-bs-toggle = "collapse"
              aria-controls = "snippetsSidebarNavFeaturesCollapse"
            >
              Features
            </a>
            <div
              id = "snippetsSidebarNavFeaturesCollapse"
              className = "nav-collapse collapse @@if(category=='features'){show}"
            >
              <a
                className = "nav-link @@if(link=='features-general.html'){active}"
                href = "features-general.html"
              >
                General
              </a>
              <a
                className = "nav-link @@if(link=='features-stats.html'){active}"
                href = "features-stats.html"
              >
                Stats
              </a>
              <a
                className = "nav-link @@if(link=='features-step.html'){active}"
                href = "features-step.html"
              >
                Step
              </a>
              <a
                className = "nav-link @@if(link=='features-navs.html'){active}"
                href = "features-navs.html"
              >
                Navs (Tabs)
              </a>
            </div>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='icon-blocks.html'){active}"
              href = "@@autopath/snippets/icon-blocks.html"
            >
              Icon Blocks
            </a>
          </li>
          <li className = "nav-item @@if(category=='cards'){active}">
            <a
              className = "nav-link dropdown-toggle dropdown-toggle-collapse"
              href = "#snippetsSidebarNavCardsCollapse"
              role = "button"
              data-bs-toggle = "collapse"
              aria-controls = "snippetsSidebarNavCardsCollapse"
            >
              Cards
            </a>
            <div
              id = "snippetsSidebarNavCardsCollapse"
              className = "nav-collapse collapse @@if(category=='cards'){show}"
            >
              <a
                className = "nav-link @@if(link=='cards-grid.html'){active}"
                href = "cards-grid.html"
              >
                Grid
              </a>
              <a
                className = "nav-link @@if(link=='cards-list.html'){active}"
                href = "cards-list.html"
              >
                List
              </a>
            </div>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='testimonials.html'){active}"
              href = "@@autopath/snippets/testimonials.html"
            >
              Testimonials
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='pricing.html'){active}"
              href = "@@autopath/snippets/pricing.html"
            >
              Pricing
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='team-sections.html'){active}"
              href = "@@autopath/snippets/team-sections.html"
            >
              Team Sections
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='cta.html'){active}"
              href = "@@autopath/snippets/cta.html"
            >
              Call-to-Action (CTA)
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='gallery.html'){active}"
              href = "@@autopath/snippets/gallery.html"
            >
              Gallery
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='clients.html'){active}"
              href = "@@autopath/snippets/clients.html"
            >
              Clients
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='faq.html'){active}"
              href = "@@autopath/snippets/faq.html"
            >
              FAQ
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='comments.html'){active}"
              href = "@@autopath/snippets/comments.html"
            >
              Comments
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='user-profile.html'){active}"
              href = "@@autopath/snippets/user-profile.html"
            >
              User Profile
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='sidebar-examples.html'){active}"
              href = "sidebar-examples.html"
            >
              Sidebar Examples
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='content-sections.html'){active}"
              href = "@@autopath/snippets/content-sections.html"
            >
              Content Sections
            </a>
          </li>
          <li className = "nav-item my-2 my-lg-5" />
          <li className = "nav-item">
            <small className = "nav-subtitle">Forms</small>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='form-layouts-authentication.html'){active}"
              href = "form-layouts-authentication.html"
            >
              Authentication
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='form-layouts-feedback.html'){active}"
              href = "form-layouts-feedback.html"
            >
              Feedback
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='form-layouts-filters.html'){active}"
              href = "form-layouts-filters.html"
            >
              Filters
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='form-layouts-search.html'){active}"
              href = "form-layouts-search.html"
            >
              Search
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='form-layouts-subscribe.html'){active}"
              href = "form-layouts-subscribe.html"
            >
              Subscribe
            </a>
          </li>
          <li className = "nav-item my-2 my-lg-5" />
          <li className = "nav-item">
            <small className = "nav-subtitle">Contact / Footer</small>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='contact-sections.html'){active}"
              href = "@@autopath/snippets/contact-sections.html"
            >
              Contact Sections
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='footer.html'){active}"
              href = "@@autopath/snippets/footer.html"
            >
              Footer
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* End Navbar Collapse */}
  </nav>
)
