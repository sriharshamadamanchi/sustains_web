// Copyright © 2025 Sustains AI, All Rights Reserved
import React from "react"

export const DocsSidebar = () => (
  <nav
    className = "js-nav-scroller navbar navbar-expand-lg navbar-sidebar navbar-vertical navbar-light bg-white border-end"
    data-hs-nav-scroller-options = '{"type": "vertical","target": ".navbar-nav .active","offset": 80}'
  >
    {/* Navbar Toggle */}
    <div className = "d-grid flex-grow-1 px-2">
      <button
        type = "button"
        className = "navbar-toggler btn btn-white"
        data-bs-toggle = "collapse"
        data-bs-target = "#navbarVerticalNavMenu"
        aria-label = "Toggle navigation"
        aria-expanded = "false"
        aria-controls = "navbarVerticalNavMenu"
      >
        <span className = "d-flex justify-content-between align-items-center">
          <span className = "h3 mb-0">Nav menu</span>
          <span className = "navbar-toggler-default">
            <i className = "bi-list" />
          </span>
          <span className = "navbar-toggler-toggled">
            <i className = "bi-x" />
          </span>
        </span>
      </button>
    </div>
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
            href = "@@autopath/documentation/index.html"
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
            <a
              className = "nav-link active"
              href = "@@autopath/documentation/index.html"
            >
              Docs
            </a>
          </li>
          <li className = "nav-item">
            <a className = "nav-link" href = "@@autopath/snippets/index.html">
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
            <span className = "nav-subtitle">Documentation</span>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='index.html'){active}"
              href = "@@autopath/documentation/index.html"
            >
              Introduction
            </a>
          </li>
          <li className = "nav-item my-2 my-lg-5" />
          <li className = "nav-item">
            <span className = "nav-subtitle">Getting started</span>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='getting-started.html'){active}"
              href = "@@autopath/documentation/getting-started.html"
            >
              Getting Started
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='gulp.html'){active}"
              href = "@@autopath/documentation/gulp.html"
            >
              Gulp
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='customization.html'){active}"
              href = "@@autopath/documentation/customization.html"
            >
              Customization
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='credits.html'){active}"
              href = "@@autopath/documentation/credits.html"
            >
              Credits
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='changelog.html'){active}"
              href = "@@autopath/documentation/changelog.html"
            >
              Changelog
            </a>
          </li>
          <li className = "nav-item my-2 my-lg-5" />
          <li className = "nav-item">
            <span className = "nav-subtitle">Design &amp; Graphics</span>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='bs-icons.html'){active}"
              href = "@@autopath/documentation/bs-icons.html"
            >
              Bootstrap Icons
            </a>
          </li>
          <li className = "nav-item my-2 my-lg-5" />
          <li className = "nav-item">
            <span className = "nav-subtitle">Components</span>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='accordion.html'){active}"
              href = "@@autopath/documentation/accordion.html"
            >
              Accordion
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='alerts.html'){active}"
              href = "@@autopath/documentation/alerts.html"
            >
              Alerts
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='avatars.html'){active}"
              href = "@@autopath/documentation/avatars.html"
            >
              Avatars
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='badge.html'){active}"
              href = "@@autopath/documentation/badge.html"
            >
              Badge
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='breadcrumb.html'){active}"
              href = "@@autopath/documentation/breadcrumb.html"
            >
              Breadcrumb
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='buttons.html'){active}"
              href = "@@autopath/documentation/buttons.html"
            >
              Buttons
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='cards.html'){active}"
              href = "@@autopath/documentation/cards.html"
            >
              Cards
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='collapse.html'){active}"
              href = "@@autopath/documentation/collapse.html"
            >
              Collapse
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='column-divider.html'){active}"
              href = "@@autopath/documentation/column-divider.html"
            >
              Column Divider
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='devices.html'){active}"
              href = "@@autopath/documentation/devices.html"
            >
              Devices
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='divider.html'){active}"
              href = "@@autopath/documentation/divider.html"
            >
              Divider
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='dropdowns.html'){active}"
              href = "@@autopath/documentation/dropdowns.html"
            >
              Dropdowns
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='list-group.html'){active}"
              href = "@@autopath/documentation/list-group.html"
            >
              List Group
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='lists.html'){active}"
              href = "@@autopath/documentation/lists.html"
            >
              Lists
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='modal.html'){active}"
              href = "@@autopath/documentation/modal.html"
            >
              Modal
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='offcanvas.html'){active}"
              href = "@@autopath/documentation/offcanvas.html"
            >
              Offcanvas
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='pagination.html'){active}"
              href = "@@autopath/documentation/pagination.html"
            >
              Pagination
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='popovers.html'){active}"
              href = "@@autopath/documentation/popovers.html"
            >
              Popovers
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='progress.html'){active}"
              href = "@@autopath/documentation/progress.html"
            >
              Progress
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='shapes.html'){active}"
              href = "@@autopath/documentation/shapes.html"
            >
              Shapes
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='sliding-img.html'){active}"
              href = "@@autopath/documentation/sliding-img.html"
            >
              Sliding Image
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='spinners.html'){active}"
              href = "@@autopath/documentation/spinners.html"
            >
              Spinners
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='steps.html'){active}"
              href = "@@autopath/documentation/steps.html"
            >
              Steps
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='tab.html'){active}"
              href = "@@autopath/documentation/tab.html"
            >
              Tab
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='tables.html'){active}"
              href = "@@autopath/documentation/tables.html"
            >
              Tables
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='toasts.html'){active}"
              href = "@@autopath/documentation/toasts.html"
            >
              Toasts
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='tooltips.html'){active}"
              href = "@@autopath/documentation/tooltips.html"
            >
              Tooltips
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='typography.html'){active}"
              href = "@@autopath/documentation/typography.html"
            >
              Typography
            </a>
          </li>
          <li className = "nav-item my-2 my-lg-5" />
          <li className = "nav-item">
            <small className = "nav-subtitle d-block">Navbars</small>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='navbar.html'){active}"
              href = "@@autopath/documentation/navbar.html"
            >
              Navbar
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='navs.html'){active}"
              href = "@@autopath/documentation/navs.html"
            >
              Navs
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='mega-menu.html'){active}"
              href = "@@autopath/documentation/mega-menu.html"
            >
              Mega Menu
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='scrollspy.html'){active}"
              href = "@@autopath/documentation/scrollspy.html"
            >
              Scrollspy
            </a>
          </li>
          <li className = "nav-item my-2 my-lg-5" />
          <li className = "nav-item">
            <small className = "nav-subtitle d-block">Basic forms</small>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='basic-forms.html'){active}"
              href = "@@autopath/documentation/basic-forms.html"
            >
              Basic Forms
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='checks-and-switches.html'){active}"
              href = "@@autopath/documentation/checks-and-switches.html"
            >
              Checks &amp; Switches
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='input-group.html'){active}"
              href = "@@autopath/documentation/input-group.html"
            >
              Input Group
            </a>
          </li>
          <li className = "nav-item my-2 my-lg-5" />
          <li className = "nav-item">
            <small className = "nav-subtitle">Media</small>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='fslightbox.html'){active}"
              href = "@@autopath/documentation/fslightbox.html"
            >
              Fullscreen Lightbox
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='swiper.html'){active}"
              href = "@@autopath/documentation/swiper.html"
            >
              Swiper Touch Slider
            </a>
          </li>
          <li className = "nav-item my-2 my-lg-5" />
          <li className = "nav-item">
            <small className = "nav-subtitle">Others</small>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='sticky-block.html'){active}"
              href = "@@autopath/documentation/sticky-block.html"
            >
              Sticky Block
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='countdown.html'){active}"
              href = "@@autopath/documentation/countdown.html"
            >
              Countdown
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='video-bg.html'){active}"
              href = "@@autopath/documentation/video-bg.html"
            >
              Video Background
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='go-to.html'){active}"
              href = "@@autopath/documentation/go-to.html"
            >
              Go To
            </a>
          </li>
          <li className = "nav-item my-2 my-lg-5" />
          <li className = "nav-item">
            <small className = "nav-subtitle d-block">Utilities</small>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='backgrounds.html'){active}"
              href = "@@autopath/documentation/backgrounds.html"
            >
              Backgrounds
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='borders.html'){active}"
              href = "@@autopath/documentation/borders.html"
            >
              Borders
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='colors.html'){active}"
              href = "@@autopath/documentation/colors.html"
            >
              Colors
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='links.html'){active}"
              href = "@@autopath/documentation/links.html"
            >
              Links
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='position.html'){active}"
              href = "@@autopath/documentation/position.html"
            >
              Position
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='shadows.html'){active}"
              href = "@@autopath/documentation/shadows.html"
            >
              Shadows
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='sizing.html'){active}"
              href = "@@autopath/documentation/sizing.html"
            >
              Sizing
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='spacing.html'){active}"
              href = "@@autopath/documentation/spacing.html"
            >
              Spacing
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = "nav-link @@if(link=='z-index.html'){active}"
              href = "@@autopath/documentation/z-index.html"
            >
              Z-index
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* End Navbar Collapse */}
  </nav>
)
