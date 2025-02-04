// Copyright © 2025 Sustains AI, All Rights Reserved
import React from "react"
import { MainAbsoluteTop } from "./partials/navbar/MainAbsoluteTop"
import { GoTo } from "./partials/layouts-components/GoTo"
import { Footer } from "./partials/footer/Footer"
import ScheduleMeeting from "./ScheduleMeeting"
import { scheduleMeetingDialog } from "../redux/actions"
import { useDispatch } from "react-redux"

export const Home = () => {
  
  const dispatch = useDispatch()

 return (
  <>
    {/* Required Meta Tags Always Come First */}
    <meta charSet = "utf-8" />
    <meta
      name = "viewport"
      content = "width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/* Title */}
    <title>Home | sustains.ai</title>
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
    <MainAbsoluteTop />

    {/* ========== MAIN CONTENT ========== */}
    <main id = "content" role = "main">
      {/* Hero */}
      <div className = "container content-space-t-3">
        <div className = "row justify-content-lg-between align-items-lg-center">
          <div className = "col-lg-5 mb-5 mb-lg-0">
            <div className = "mb-5">
              <h1 className = "display-4 text-dark mb-5">
                Start your journey with{" "}
                <span className = "text-primary">sustains.ai</span>
              </h1>
              <p className = "fs-3">AI Driven risk analytics.</p>
            </div>
            <div className = "d-grid d-sm-flex gap-3 mb-5">
              <a className = "btn btn-primary" onClick={() => {
                dispatch(scheduleMeetingDialog({isVisible: true}))
              }}>
                Schedule a meeting
              </a>
              {/* <a class="btn btn-ghost-dark btn-pointer" href="#">Sign up free</a> */}
            </div>
          </div>
          {/* End Col */}
          <div className = "col-lg-6">
            <div className = "position-relative">
              <div className = "position-relative">
                <img
                  className = "img-fluid"
                  src = {require("../static/img/950x950/img4.jpg")}
                  alt = "Image Description"
                />
                <div className = "position-absolute bottom-0 end-0">
                  <img
                    className = "img-fluid"
                    src = {require("../static/svg/illustrations/grid-grey.svg").default}
                    alt = "Image Description"
                  />
                </div>
              </div>
              {/* Media */}
              <div
                className = "d-inline-block position-absolute top-0 start-0 bg-white w-100 rounded-pill shadow-sm p-2 mt-5 ms-n5"
                style = {{ maxWidth: "12rem" }}
              >
                <div className = "d-flex align-items-center">
                  <div className = "flex-shrink-0">
                    <span className = "avatar avatar-sm avatar-circle">
                      <img
                        className = "img-fluid rounded rounded-circle"
                        src = {require("../static/img/160x160/img9.jpg")}
                        alt = "Image Description"
                      />
                    </span>
                  </div>
                  <div className = "flex-grow-1 ms-2">
                    <div className = "fs-5 fw-bold mb-0">Julia</div>
                    <span className = "d-block fs-6">Fantastic team</span>
                  </div>
                </div>
              </div>
              {/* End Media */}
              {/* Media */}
              <div
                className = "d-inline-block position-absolute bottom-0 start-0 bg-warning w-100 rounded-pill shadow-sm p-2 mb-10 ms-n10"
                style = {{ maxWidth: "16rem" }}
              >
                <div className = "d-flex align-items-center">
                  <div className = "flex-shrink-0">
                    <span className = "avatar avatar-sm avatar-circle">
                      <img
                        className = "img-fluid rounded rounded-circle"
                        src = {require("../static/img/160x160/img10.jpg")}
                        alt = "Image Description"
                      />
                    </span>
                  </div>
                  <div className = "flex-grow-1 ms-2">
                    <div className = "fs-5 fw-bold text-dark mb-0">Kriti</div>
                    <span className = "d-block fs-6 text-dark">
                      {" "}
                      Excellent quantitative skills 🔥👋
                    </span>
                  </div>
                </div>
              </div>
              {/* End Media */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Hero */}
      {/* Icon Blocks */}
      {/* Icon Blocks */}
      <div className = "container content-space-t-2 content-space-t-lg-3">
        <div className = "row">
          <div className = "col-sm-6 col-lg mb-5 mb-lg-0">
            {/* Icon Block */}
            <div className = "text-center icon-block">
              <div className = "mb-3">
                <i className = "bi-graph-up-arrow fs-1 text-dark" />
              </div>
              <h5>Precision Risk Analytics</h5>
              <span className = "d-block">
              Leverage cutting-edge tools to assess and mitigate risks with
              unparalleled accuracy, empowering decision-makers in both finance
              and energy sectors to navigate uncertainties effectively.{" "}
              </span>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
          <div className = "col-sm-6 col-lg mb-5 mb-lg-0">
            {/* Icon Block */}
            <div className = "text-center icon-block">
              <div className = "mb-3">
                <i className = "bi-bar-chart-line fs-1 text-dark" />
              </div>
              <h5>Quantitative Excellence</h5>
              <span className = "d-block">
              Showcase our expertise in quantitative analysis, including risk
              modeling, forecasting, and optimization, to solve complex
              challenges in financial investments and energy resource planning.
              </span>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
          <div className = "col-sm-6 col-lg mb-5 mb-sm-0">
            {/* Icon Block */}
            <div className = "text-center icon-block">
              <div className = "mb-3">
                <i className = "bi-briefcase fs-1 text-dark" />
              </div>
              <h5>Seamless Web Solutions &amp; API Integration</h5>
              <span className = "d-block">
                {" "}
              Provide tailored solutions through user-friendly web platforms and
              robust API integrations, enabling seamless access to advanced
              analytics for managing portfolios, energy strategies, and beyond.
              </span>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
          {/* End Icon Block */}
        </div>
        {/* End Col */}
      </div>
      <div className = "overflow-hidden">
        <div className = "container content-space-2 content-space-lg-3">
          <div className = "row align-items-lg-center">
            <div className = "col-lg-7 me-auto ms-lg-n10 mb-5 mb-lg-0">
              <div className = "row align-items-center">
                <div className = "col-4">
                  <img
                    className = "img-fluid"
                    src = {require("../static/img/580x480/iStock-2.jpg")}
                    alt = "Image Description"
                  />
                </div>
                {/* End Col */}
                <div className = "col-3">
                  <img
                    className = "img-fluid"
                    src = {require("../static/img/350x700/img1.jpg")}
                    alt = "Image Description"
                  />
                </div>
                {/* End Col */}
                <div className = "col-5">
                  <img
                    className = "img-fluid"
                    src = {require("../static/img/400x700/iStock-6.jpg")}
                    alt = "Image Description"
                  />
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Col */}
            <div className = "col-lg-5">
              <div className = "mb-5">
                <h2>Empowering Financial Decisions</h2>
                <p>
                      At Sustains.ai, we are obsessed with mastering the
                      complexities of risk analysis. Our mission is to empower
                      businesses with precise tools and actionable insights to
                      navigate uncertainty with confidence.
                </p>
              </div>
              {/* List Checked */}
              <ul className = "list-checked list-checked-soft-bg-primary list-checked-lg">
                <li className = "list-checked-item">
                  <span className = "fw-bold">
                        Sandbox – The Financial Vertical
                  </span>{" "}
                      - Delivering advanced risk analytics for fund managers to
                      optimize portfolios, mitigate market risks, and drive
                      sustainable financial growth.{" "}
                </li>
                <li className = "list-checked-item">
                  <span className = "fw-bold">
                        Entropy – The Energy Vertical
                  </span>{" "}
                      – Revolutionizing energy sector risk management with
                      AI-powered solutions for ESG compliance, resource
                      planning, and technical risk assessments.
                </li>
                <li className = "list-checked-item">
                  <span className = "fw-bold">Sustainability Focus</span> –
                      Combine financial growth with ESG compliance.
                </li>
              </ul>
              {/* End List Checked */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
      {/* End Features */}
      {/* Icon Blocks */}
      <div className = "container">
        <div className = "row">
          <div className = "col-sm-6 col-lg-4 mb-5">
            <div className = "text-center px-md-5">
              <div className = "mb-3">
                <i className = "bi-code-slash fs-1 text-dark" />
              </div>
              <p>
                <span className = "fw-bold"> Mastering the Art of Risk</span>{" "}
                    – At Sustains.ai, we don’t just analyze risk; we decode its
                    patterns, turning challenges into opportunities with
                    precision and foresight.
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className = "col-sm-6 col-lg-4 mb-5">
            <div className = "text-center px-md-5">
              <div className = "mb-3">
                <i className = "bi-lightbulb fs-1 text-dark" />
              </div>
              <p>
                <span className = "fw-bold">
                      Sandbox – Where Finance Meets Strategy
                </span>{" "}
                    – Sandbox empowers financial experts to see beyond numbers,
                    offering tools that unravel market complexities and unlock
                    sustainable growth..
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className = "col-sm-6 col-lg-4 mb-5">
            <div className = "text-center px-md-5">
              <div className = "mb-3">
                <i className = "bi-graph-up-arrow fs-1 text-dark" />
              </div>
              <p>
                <span className = "fw-bold">
                      Entropy – Energizing Tomorrow
                </span>{" "}
                    – Entropy drives innovation in the energy sector, merging AI
                    with expertise to mitigate risks and foster efficient,
                    sustainable energy solutions.
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className = "col-sm-6 col-lg-4 mb-5 mb-lg-0">
            <div className = "text-center px-md-5">
              <div className = "mb-3">
                <i className = "bi-bar-chart-line fs-1 text-dark" />
              </div>
              <p>
                <span className = "fw-bold">
                      Beyond Insights: Actionable Intelligence
                </span>{" "}
                    – Our solutions are not just data-driven but
                    action-oriented, designed to empower decisions that create
                    measurable impact across industries.
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className = "col-sm-6 col-lg-4 mb-5 mb-sm-0">
            <div className = "text-center px-md-5">
              <div className = "mb-3">
                <i className = "bi-globe fs-1 text-dark" />
              </div>
              <p>
                <span className = "fw-bold">Risk-First Innovation</span> –
                    Innovation begins with understanding risk. By placing risk
                    analysis at the heart of our technology, we ensure every
                    solution is resilient, adaptive, and forward-looking.
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className = "col-sm-6 col-lg-4">
            <div className = "text-center px-md-5">
              <div className = "mb-3">
                <i className = "bi-cpu fs-1 text-dark" />
              </div>
              <p>
                <span className = "fw-bold">
                      Empowering Visionaries, Transforming Industries
                </span>{" "}
                    – From fund managers to energy strategists, we empower
                    visionaries with tools and insights that reshape industries
                    and build a sustainable future.
              </p>
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Icon Blocks */}
      {/* Features */}
      <div className = "container content-space-t-2 content-space-t-lg-3">
        <div className = "row justify-content-lg-between align-items-lg-center">
          <div className = "col-lg-6 mb-5 mb-lg-0">
            <img
              className = "img-fluid"
              src = {require("../static/img/950x950/iStock-1.jpg")}
              alt = "Image Description"
            />
          </div>
          {/* End Col */}
          <div className = "col-lg-5">
            <div className = "mb-5">
              <h2>Explore Our Core Products</h2>
              <p>
                    At Sustains.ai, we empower businesses with cutting-edge
                    solutions tailored to the financial and energy sectors. Our
                    expertise drives innovation and delivers actionable insights
                    for our clients.
              </p>
            </div>
            {/* List Checked */}
            <ul className = "list-checked list-checked-soft-bg-primary list-checked-lg mb-5">
              <li className = "list-checked-item">
                <span className = "fw-bold"> Risk Analytics Platform</span> –
                    A comprehensive web application that enables fund managers
                    to analyze risks effectively and generate detailed risk
                    reports.
              </li>
              <li className = "list-checked-item">
                <span className = "fw-bold">
                      Standardized Equity Research Platform
                </span>{" "}
                    – A modern solution to predict the fair value of stocks and
                    provide buy/sell recommendations, streamlining processes
                    previously managed through spreadsheets.
              </li>
              <li className = "list-checked-item">
                <span className = "fw-bold">Energy Resource Planner</span> – A
                    powerful risk management tool for optimizing resource
                    planning in the energy sector, ensuring efficient and
                    sustainable resource utilization.
              </li>
              <li className = "list-checked-item">
                <span className = "fw-bold">
                      Load Flow Analysis Application
                </span>{" "}
                    – A specialized application that evaluates risks in resource
                    mixes (solar, wind, hydro) and recommends optimal
                    proportions for microgrid operations using load flow
                    analysis.
              </li>
              <li className = "list-checked-item">
                <span className = "fw-bold">Consultancy Services </span> –
                    Expert consulting powered by advanced risk analysis tools,
                    providing actionable strategies for both financial and
                    energy sectors.
              </li>
            </ul>
            {/* End List Checked */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Features */}
      {/* Stats */}
      <div className = "container content-space-2 content-space-lg-3">
        <div className = "row align-items-center">
          {/* Left Column */}
          <div className = "col-lg-8 mb-5 mb-lg-0">
            <div className = "mb-6">
              <h2>Delivering Precision, Speed, and Innovation</h2>
              <p>
                    At Sustains.ai, we are committed to creating cutting-edge
                    solutions that combine precision with efficiency. Our tools
                    are designed to deliver reliable insights, fast
                    implementation, and tailored strategies that empower
                    businesses to make smarter decisions. With a focus on
                    innovation and client success, we ensure excellence at every
                    step.
              </p>
            </div>
            {/* Blockquote */}
            <figure>
              <blockquote className = "blockquote">
                <em />
                    "Working with Sustains.ai for market risk consultancy has
                    been a transformative experience. Their expert insights and
                    innovative solutions have significantly enhanced our risk
                    management strategies, delivering measurable results and
                    exceeding our expectations."
              </blockquote>
              <figcaption className = "blockquote-footer">
                <div className = "d-flex align-items-center">
                  <div className = "flex-shrink-0">
                    <img
                      className = "img-fluid square"
                      src = {require("../static/img/160x160/Sooraj.jpg")}
                      alt = "Image Description"
                    />
                  </div>
                  <div className = "flex-grow-1 ms-3">
                    <span className = "fw-bold">Sooraj E</span>
                    <br />
                    <span className = "blockquote-footer-source">
                          Co-founder &amp; CTO | Marketfeed
                    </span>
                  </div>
                </div>
              </figcaption>
            </figure>
            {/* End Blockquote */}
          </div>
          {/* End Left Column, I made to an independent row and increased the width to a full screen */}
          {/* <div className="col-lg-4">
                <ul className="list-equal-height list-equal-height-2-cols">
                  <li className="list-equal-height-item">
                    <h4 className="display-5">3</h4>
                    <p className="mb-0">
                      active business partners leveraging our analytics
                      solutions
                    </p>
                  </li>
                  <li className="list-equal-height-item">
                    <h4 className="display-5">
                      <sub>
                        <i className="bi-arrow-up-short text-primary ms-n2" />
                      </sub>
                      30%
                    </h4>
                    <p className="mb-0">
                      improvement in portfolio returns for our clients
                    </p>
                  </li>
                  <li className="list-equal-height-item">
                    <h4 className="display-5">
                      <sub>
                        <i className="bi-arrow-up-short text-primary ms-n2" />
                      </sub>
                      15%
                    </h4>
                    <p className="mb-0">
                      reduction in risk using advanced models
                    </p>
                  </li>
                  <li className="list-equal-height-item">
                    <h4 className="display-5">3x</h4>
                    <p className="mb-0">
                      faster decision-making with real-time data insights
                    </p>
                  </li>
                </ul>
              </div> */}
          <div className = "col-lg-4">
            <img
              className = "img-fluid mb-3"
              loading = "lazy"
              src = {require("../static/img/random_pics/business-meeting-over-coffee.jpg")}
              alt = "Image 1"
            />
          </div>
          {/* End Right Column */}
        </div>
      </div>
      <div className = "container mt-0 content-space-lg-2">
        <div className = "row align-items-lg-center">
          {/* Left Column: Image */}
          <div className = "col-lg-4 mb-5 mb-lg-0">
            <img
              className = "img-fluid mb-3"
              loading = "lazy"
              src = {require("../static/img/random_pics/iStock-3.jpg")}
              alt = "Business Meeting Image"
            />
          </div>
          {/* End Left Column */}
          {/* Right Column: Stats List */}
          <div className = "col-lg-8">
            <ul className = "list-equal-height list-equal-height-2-cols">
              <li className = "list-equal-height-item">
                <h4 className = "display-5">3</h4>
                <p className = "mb-0">
                      active business partners leveraging our Sandbox analytics
                      solutions
                </p>
              </li>
              <li className = "list-equal-height-item">
                <h4 className = "display-5">2</h4>
                <p className = "mb-0">
                      Business partners leveraging our Entropy analytics
                </p>
              </li>
              <li className = "list-equal-height-item">
                <h4 className = "display-5">
                  <sub>
                    <i className = "bi-arrow-down-short text-primary ms-n2" />
                  </sub>
                      40%
                </h4>
                <p className = "mb-0">
                      reduction in risk reporting time, saving valuable hours.
                </p>
              </li>
              <li className = "list-equal-height-item">
                <h4 className = "display-5">3x</h4>
                <p className = "mb-0">
                      faster decision-making with real-time data insights
                </p>
              </li>
            </ul>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </main>
    <Footer />
    <GoTo />
  </>
)
}