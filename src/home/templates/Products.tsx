// Copyright © 2025 Sustains AI, All Rights Reserved
import { Footer } from "./partials/footer/Footer";
import { MainAbsoluteTop } from "./partials/navbar/MainAbsoluteTop";
import Lottie from "lottie-react";

export const Products = () => (
  <>
    {/* Required Meta Tags Always Come First */}
    <meta charSet = "utf-8" />
    <meta
      name = "viewport"
      content = "width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/* Title */}
    <title>Products | Risk analytics tools for finance and energy</title>
    {/* Favicon */}
    <link
      rel = "shortcut icon"
      href = "{{url_for('static',filename='css/favicon.ico') }}"
    />
    {/* Font */}
    <link
      href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel = "stylesheet"
    />
    <link
      rel = "stylesheet"
      href = "{{ url_for('static', filename='css/style.css') }}?v=1"
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
      href = "{{ url_for('static', filename='css/swiper-bundle.min.css') }}"
    />
    <link
      rel = "stylesheet"
      href = "{{ url_for('static', filename='css/theme.min.css') }}"
    />
    <link
      rel = "stylesheet"
      href = "{{ url_for('static', filename='css/snippets.min.css') }}"
    />
    <link
      rel = "stylesheet"
      href = "{{ url_for('static', filename='css/docs.min.css') }}"
    />
    <link
      rel = "stylesheet"
      href = "{{ url_for('static', filename='vendor/bootstrap-icons/font/bootstrap-icons.css') }}"
    />
    <link
      rel = "stylesheet"
      href = "{{ url_for('static', filename='vendor/hs-mega-menu/dist/hs-mega-menu.min.css') }}"
    />
    <link
      rel = "stylesheet"
      href = "{{ url_for('static', filename='vendor/swiper/swiper-bundle.min.css') }}"
    />
    {/* ========== HEADER ========== */}
    <MainAbsoluteTop />
    {/* ========== END HEADER ========== */}
    {/* ========== MAIN CONTENT ========== */}
    <main id = "content" role = "main">
      {/* Section Title */}
      <div className = "container content-space-t-3 content-space-t-lg-4">
        <div className = "row align-items-center">
          {/* Left Column: Text Content */}
          <div className = "col-md-6">
            <h1 className = "display-4 mb-5">
              Explore our core <span className = "text-primary">solutions</span>
            </h1>
            <div
              className = "border-top border-2 my-4"
              style = {{ maxWidth: "5rem" }}
            />
            {/* Blockquote */}
            <figure>
              <blockquote className = "blockquote">
                <em>
                  At Sustains.ai, we believe in empowering businesses with
                  actionable insights to make smarter decisions in finance and
                  energy. Together, we can shape a more sustainable future.
                </em>
              </blockquote>
              <figcaption className = "blockquote-footer">
                <div className = "d-flex align-items-center">
                  <div className = "flex-shrink-0">
                    <img
                      className = "img-fluid rounded-circle"
                      src = {require("../static/img/160x160/aswin3.jpg")}
                      alt = "Aswin Nambiar"
                    />
                  </div>
                  <div className = "flex-grow-1 ms-3">
                    Aswin Nambiar
                    <span className = "blockquote-footer-source">
                      CEO, Co-founder | Sustains.ai
                    </span>
                  </div>
                </div>
              </figcaption>
            </figure>
            {/* End Blockquote */}
            <p className = "lead mb-5 mt-5">
              Discover how our innovative solutions are shaping the future of
              finance and energy with precision and sustainability.
            </p>
          </div>
          {/* End Left Column */}
          {/* Right Column: Animation and Images */}
          <div className = "col-md-6">
            <div className = "d-flex flex-column align-items-center justify-content-center">
              {/* Lottie Animation */}
              <Lottie
                animationData = {require("../static/json/animation_4.json")}
                style = {{ width: "100%", maxWidth: 500, height: "auto" }}
                loop
                autoPlay
              />
              {/* Image Grid */}
              <div className = "row mt-4 gx-3">
                {/* Top Left Image */}
                <div className = "col-6 mb-3">
                  <img
                    className = "img-fluid rounded-3"
                    src = {require("../static/svg/components/three-arrows-1.svg").default}
                    alt = "Plus Circle Dotted"
                  />
                </div>
                {/* Top Right Image */}
                <div className = "col-6 mb-3">
                  <img
                    className = "img-fluid rounded-3"
                    src = {require("../static/img/950x950/finance_1.jpg")}
                    alt = "iStock 1"
                  />
                </div>
                {/* Bottom Left Image */}
                <div className = "col-6">
                  <img
                    className = "img-fluid rounded-3"
                    src = {require("../static/img/950x950/energy_1.jpg")}
                    alt = "Image 1"
                  />
                </div>
                {/* Bottom Right Image */}
                {/* <div className="col-6">
                  <img
                    className="img-fluid rounded-circle"
                    src={require("../static/svg/components/check.svg").default}
                    alt="Check Icon"
                  />
                </div> */}
              </div>
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </main>
    {/* Core Products Section */}
    <section id = "core-products" className = "py-5 mb-5 mt-5">
      <div className = "container">
        {/* Section Heading */}
        <div className = "text-center mb-10 mt-10">
          <h2 className = "display-5">Explore Our Core Products</h2>
          <p className = "lead">
            At sustains.ai, we empower businesses with cutting-edge solutions
            tailored to the financial and energy sectors. Our expertise drives
            innovation and delivers actionable insights to help our clients
            achieve their goals.
          </p>
        </div>
        {/* End Section Heading */}
        {/* Products Grid */}
        <div className = "row g-4">
          {/* Risk Analytics Platform */}
          <div className = "col-md-4">
            <div className = "card h-100 shadow-sm product-card">
              <div className = "card-body text-center">
                <i className = "bi-bar-chart fs-2 text-primary" />
                <h5 className = "card-title mt-3">Risk Analytics Platform</h5>
                <p className = "card-text">
              Analyze risks and generate detailed reports for fund managers.
                </p>
              </div>
            </div>
          </div>
          {/* Standardized Equity Research Platform */}
          <div className = "col-md-4">
            <div className = "card h-100 shadow-sm product-card">
              <div className = "card-body text-center">
                <i className = "bi-pie-chart fs-2 text-primary" />
                <h5 className = "card-title mt-3">Equity Research Platform</h5>
                <p className = "card-text">
              Predict stock values and streamline buy/sell recommendations.
                </p>
              </div>
            </div>
          </div>
          {/* Energy Resource Planner */}
          <div className = "col-md-4">
            <div className = "card h-100 shadow-sm product-card">
              <div className = "card-body text-center">
                <i className = "bi-lightbulb fs-2 text-primary" />
                <h5 className = "card-title mt-3">Energy Resource Planner</h5>
                <p className = "card-text">
              Optimize resource planning for efficiency and sustainability.
                </p>
              </div>
            </div>
          </div>
          {/* Load Flow Analysis Application */}
          <div className = "col-md-4">
            <div className = "card h-100 shadow-sm product-card">
              <div className = "card-body text-center">
                <i className = "bi-gear fs-2 text-primary" />
                <h5 className = "card-title mt-3">Load Flow Analysis</h5>
                <p className = "card-text">
              Evaluate and optimize resource mixes for microgrid operations.
                </p>
              </div>
            </div>
          </div>
          {/* Consultancy Services */}
          <div className = "col-md-4">
            <div className = "card h-100 shadow-sm product-card">
              <div className = "card-body text-center">
                <i className = "bi-person-workspace fs-2 text-primary" />
                <h5 className = "card-title mt-3">Consultancy Services</h5>
                <p className = "card-text">
              Expert consulting for actionable strategies in finance and energy.
                </p>
              </div>
            </div>
          </div>
          {/* Placeholder for Empty Space */}
          <div className = "col-md-4">
            <div className = "card h-100 shadow-sm product-card">
              <div className = "card-body text-center">
                <i className = "bi-star fs-2 text-muted" />
                <h5 className = "card-title mt-3">Coming Soon</h5>
                <p className = "card-text">
              Stay tuned for more innovative solutions from sustains.ai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id = "product-speciality" className = "py-5 mt-5 mb-5">
      <div className = "position-relative content-space-t-2 content-space-b-md-2">
        <div className = "row justify-content-lg-between align-items-md-center">
          {/* Left Column */}
          <div className = "col-md-6 col-lg-5 order-md-2 mb-7 mb-md-0">
            <div className = "mb-5">
              <h3>Empowering Businesses with Tailored Solutions</h3>
            </div>
            {/* Nav Pills */}
            <ul
              className = "nav nav-pills nav-pills-shadow flex-md-column gap-md-1"
              id = "featuresTab"
              role = "tablist"
            >
              {/* Quantitative Excellence */}
              <li className = "nav-item" role = "presentation">
                <a
                  className = "nav-link active"
                  href = "#featuresOne"
                  id = "featuresOne-tab"
                  data-bs-toggle = "tab"
                  data-bs-target = "#featuresOne"
                  role = "tab"
                  aria-controls = "featuresOne"
                  aria-selected = "true"
                >
                  <div className = "d-flex">
                    <i className = "bi-app-indicator fs-2 text-success" />
                    <div className = "flex-grow-1 ms-4">
                      <h6 className = "text-success mb-1">
                        Quantitative Excellence
                      </h6>
                      <p className = "text-body mb-0">
                        All our solutions are rooted in quantitative analysis,
                        leveraging advanced mathematical techniques for risk
                        assessment and decision-making.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              {/* Web Solutions for Easy Access */}
              <li className = "nav-item" role = "presentation">
                <a
                  className = "nav-link"
                  href = "#featuresTwo"
                  id = "featuresTwo-tab"
                  data-bs-toggle = "tab"
                  data-bs-target = "#featuresTwo"
                  role = "tab"
                  aria-controls = "featuresTwo"
                  aria-selected = "false"
                >
                  <div className = "d-flex">
                    <i className = "bi-graph-up fs-2 text-success" />
                    <div className = "flex-grow-1 ms-4">
                      <h6 className = "text-success mb-1">
                        Web Solutions for Easy Access
                      </h6>
                      <p className = "text-body mb-0">
                        Eliminate the hassle of integrating Excel and Python
                        workflows. Simply log in to our platform, and let us
                        handle the complex quantitative tasks while you focus on
                        strategic decision-making.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              {/* Sustainability-Driven Insights */}
              <li className = "nav-item" role = "presentation">
                <a
                  className = "nav-link"
                  href = "#featuresThree"
                  id = "featuresThree-tab"
                  data-bs-toggle = "tab"
                  data-bs-target = "#featuresThree"
                  role = "tab"
                  aria-controls = "featuresThree"
                  aria-selected = "false"
                >
                  <div className = "d-flex">
                    <i className = "bi-lightning fs-2 text-success" />
                    <div className = "flex-grow-1 ms-4">
                      <h6 className = "text-success mb-1">
                        Sustainability-Driven Insights
                      </h6>
                      <p className = "text-body mb-0">
                        Whether in finance or energy, we are committed to
                        building a sustainable future by embedding
                        sustainability into every solution we offer.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            {/* End Nav Pills */}
          </div>
          {/* End Left Column */}
          {/* Right Column */}
          <div className = "col-md-6">
            {/* Tab Content */}
            <div className = "tab-content" id = "featuresTabContent">
              <div
                className = "tab-pane fade show active"
                id = "featuresOne"
                role = "tabpanel"
                aria-labelledby = "featuresOne-tab"
              >
                <img
                  className = "img-fluid shadow rounded"
                  src = {require("../static/img/mockups/img2.png")}
                  alt = "Quantitative Excellence"
                />
              </div>
              <div
                className = "tab-pane fade"
                id = "featuresTwo"
                role = "tabpanel"
                aria-labelledby = "featuresTwo-tab"
              >
                <img
                  className = "img-fluid shadow rounded-3"
                  src = {require("../static/img/mockups/img8.png")}
                  alt = "Web Solutions for Easy Access"
                />
              </div>
              <div
                className = "tab-pane fade"
                id = "featuresThree"
                role = "tabpanel"
                aria-labelledby = "featuresThree-tab"
              >
                <img
                  className = "img-fluid shadow rounded-3"
                  src = {require("../static/img/mockups/img4.png")}
                  alt = "Sustainability-Driven Insights"
                />
              </div>
            </div>
            {/* End Tab Content */}
            {/* SVG Shape */}
            <figure
              className = "position-absolute top-0 end-0 mt-n5 me-n10"
              style = {{ width: "4rem" }}
            >
              <img
                className = "img-fluid"
                src = {require("../static/svg/components/pointer-up.svg").default}
                alt = "Pointer Shape"
              />
            </figure>
            {/* End SVG Shape */}
          </div>
          {/* End Right Column */}
        </div>
        {/* End Row */}
        {/* Background Decoration */}
        <div className = "position-absolute top-0 end-0 w-100 w-lg-65 h-65 h-md-100 bg-soft-primary rounded-3 zi-n1 me-n5" />
      </div>
    </section>
    <Footer />
    {/* ========== END SECONDARY CONTENTS ========== */}
    {/* JS Implementing Plugins */}
    {/* bundlejs:vendor [@@autopath] */}
    {/* JS Unify */}
    {/* bundlejs:theme [@@autopath] */}
    {/* JS Plugins Init. */}
    {/* JS Plugins Init. */}
  </>
)
