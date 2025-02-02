// Copyright © 2025 Sustains AI, All Rights Reserved
import { Footer } from "./partials/footer/Main";
import { MainAbsoluteTop } from "./partials/navbar/MainAbsoluteTop";
import Lottie from "lottie-react";

export const About = () => (
  <>
    {/* Required Meta Tags Always Come First */}
    <meta charSet = "utf-8" />
    <meta
      name = "viewport"
      content = "width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/* Title */}
    <title>About | sustains.ai</title>
    {/* Favicon */}
    <link
      rel = "shortcut icon"
      href = "{{ url_for('static', filename='css/favicon.ico') }}"
    />
    {/* Font */}
    <link href = "@@vars.themeFont" rel = "stylesheet" />
    {/* CSS Implementing Plugins */}
    {/* bundlecss:vendor [@@autopath] */}
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
    <link
      rel = "stylesheet"
      type = "text/css"
      href = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
    />
    {/* ========== HEADER ========== */}
    <MainAbsoluteTop />
    <main id = "content" role = "main">
      {/* Hero Section */}
      <div className = "container content-space-t-3 content-space-t-lg-4">
        <div className = "row align-items-center">
          {/* Left Column: About Section */}
          <div className = "col-md-6">
            <h1 className = "display-4">About</h1>
            <p className = "lead">
              At Sustains.ai, we simplify the complex, empowering businesses in
              finance and energy to break barriers, redefine possibilities, and
              drive meaningful change. Our cutting-edge solutions and
              data-driven insights enable our clients to navigate challenges
              with precision and unlock unlimited opportunities for a smarter,
              more sustainable world.
            </p>
          </div>
          {/* Right Column: Animation */}
          <div className = "col-md-6 text-md-end">
            <Lottie
              animationData = {require("../static/json/Animation_1.json")}
              style = {{ width: "100%", maxWidth: 500, height: "auto" }}
              loop
              autoPlay
            />
          </div>
        </div>
      </div>
    </main>
    {/* End Hero */}
    {/* Features */}
    <div className = "container content-space-2 content-space-lg-3">
      <div className = "row justify-content-lg-between">
        <div className = "col-md-6 mb-5 mb-md-0">
          <h2>About us</h2>
          <p>
            Sustains.ai was born from a shared passion for risk analysis and a
            fascination with markets.
          </p>
          <p>
            It all began on Friday evenings in a cozy coffee shop, where a group
            of risk analysis enthusiasts gathered to share lively discussions
            about quantitative strategies, market trends, world economics, and
            the books we’d explored that week—often sprinkled with a dash of
            office gossip and the inevitable boss banter.
          </p>
          <p>
            These lively debates, fueled by camaraderie and curiosity, sparked a
            dream of creating a firm dedicated to risk analytics. One Friday,
            that dream turned into a reality, and sustains.ai was born.
          </p>
        </div>
        {/* End Col */}
        <div className = "col-md-6 col-lg-5">
          <div className = "d-grid gap-5">
            {/* Media */}
            <div className = "d-flex">
              <div className = "flex-shrink-0">
                <i className = "bi-lightbulb fs-2" />
              </div>
              <div className = "flex-grow-1 ms-4">
                <h5>Our Roots</h5>
                <p>
                  With a strong foundation in financial markets,energy and
                  coding, our team brings together deep domain expertise and a
                  relentless drive for innovation. Backed by over 70 years of
                  collective experience, we began as a consultancy and soon
                  evolved into a product-focused company—while continuing to
                  offer specialized consulting services to our clients.
                </p>
              </div>
            </div>
            {/* End Media */}
            {/* Media */}
            <div className = "d-flex">
              <div className = "flex-shrink-0">
                <i className = "bi-people fs-2" />
              </div>
              <div className = "flex-grow-1 ms-4">
                <h5>Our Philosophy</h5>
                <p>
                  At Sustains.ai, we believe in building not just great products
                  but also a great workplace. Our goal is to create a happy and
                  supportive environment where work-life balance is a priority.
                  We’ve embraced a fully remote policy to give our team the
                  flexibility they need.
                </p>
              </div>
            </div>
            {/* End Media */}
            {/* Media */}
            <div className = "d-flex">
              <div className = "flex-shrink-0">
                <i className = "bi-shield-check fs-2" />
              </div>
              <div className = "flex-grow-1 ms-4">
                <h5>Our Vision</h5>
                <p>
                  As businesses race to adopt AI, many feel left behind. At
                  Sustains.ai, we’re here to bridge that gap, empowering
                  companies with cutting-edge tools and insights to navigate the
                  future with confidence.
                </p>
              </div>
            </div>
            {/* End Media */}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
    </div>
    {/* End Features */}
    {/* Card Grid */}
    <div className = "container">
      {/* Heading */}
      <div className = "w-lg-65 text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10">
        <h2>Explore sustains.ai</h2>
      </div>
      {/* End Heading */}
      <div className = "row justify-content-lg-center">
        <div className = "col-sm-7 col-md-8 col-lg-6 mb-4">
          {/* Card */}
          <a className = "card card-sm card-transition-zoom" href = "#">
            <div className = "card-transition-zoom-item">
              <img
                className = "img-fluid"
                src = {require("../static/img/580x480/cutting_edge_risk_analytics.jpg")}
                alt = "Image Description"
              />
            </div>
            <div className = "card-img-overlay top-auto">
              <div className = "d-flex justify-content-end flex-column bg-white rounded-3 p-2">
                <h4 className = "card-title"> Cutting-Edge Risk Analytics</h4>
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Col */}
        <div className = "col-sm-5 col-md-4 col-lg-3 align-self-sm-end mb-4">
          {/* Card */}
          <a className = "card card-sm card-transition-zoom" href = "#">
            <div className = "card-transition-zoom-item">
              <img
                className = "img-fluid"
                src = {require("../static/img/950x950/sustainable_solutions3.jpg")}
                alt = "Image Description"
              />
            </div>
            <div className = "card-img-overlay top-auto">
              <div className = "d-flex justify-content-end flex-column bg-white rounded-3 p-2">
                <h4 className = "card-title">Sustainable Energy Solutions</h4>
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Col */}
        <div className = "w-100" />
        <div className = "col-lg-4 mb-4 mb-lg-0">
          {/* Card */}
          <a className = "card card-sm card-transition-zoom" href = "#">
            <div className = "card-transition-zoom-item">
              <img
                className = "img-fluid"
                src = {require("../static/img/580x480/tech_meeting.jpg")}
                alt = "Image Description"
              />
            </div>
            <div className = "card-img-overlay top-auto">
              <div className = "d-flex justify-content-end flex-column bg-white rounded-3 p-1">
                <h4 className = "card-title">Our Team of Experts</h4>
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Col */}
        <div className = "col-sm-6 col-lg-4 mb-4 mb-sm-0">
          {/* Card */}
          <a className = "card card-sm card-transition-zoom" href = "#">
            <div className = "card-transition-zoom-item">
              <img
                className = "img-fluid"
                src = {require("../static/img/950x950/AI_powered_insights.jpg")}
                alt = "Image Description"
              />
            </div>
            <div className = "card-img-overlay top-auto">
              <div className = "d-flex justify-content-end flex-column bg-white rounded-3 p-2">
                <h4 className = "card-title">AI-Powered Insights</h4>
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Col */}
        <div className = "col-sm-6 col-lg-4">
          {/* Card */}
          <a className = "card card-sm card-transition-zoom" href = "#">
            <div className = "card-transition-zoom-item">
              <img
                className = "img-fluid"
                src = {require("../static/img/500x650/building_sustainable_future2.jpg")}
                alt = "Image Description"
              />
            </div>
            <div className = "card-img-overlay top-auto">
              <div className = "d-flex justify-content-end flex-column bg-white rounded-3 p-3">
                <h4 className = "card-title">Building a Sustainable Future</h4>
              </div>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
    </div>
    {/* End Card Grid */}
    {/* Technology Ecosystem */}
    <div className = "container content-space-2 content-space-lg-3">
      <div className = "row justify-content-lg-between align-items-md-center">
        <div className = "col-md-6 mb-10 mb-md-0">
          <h2>Our Technology Ecosystem</h2>
          <p>
            At Sustains.ai, our technology ecosystem reflects our commitment to
            innovation, scalability, and seamless collaboration. These tools and
            platforms form the backbone of our solutions, enabling us to deliver
            advanced risk analytics and resource optimization.
          </p>
          <h4 className = "mt-4">Tech Stack</h4>
          <ul className = "list-checked list-checked-primary mb-4">
            <li className = "list-checked-item">
              Flask: The foundation of our web applications, ensuring
              flexibility and performance.
            </li>
            <li className = "list-checked-item">
              Django: A high-level web framework for rapid development and
              scalability.
            </li>
            <li className = "list-checked-item">
              FastAPI: For building high-performance APIs quickly and
              efficiently.
            </li>
            <li className = "list-checked-item">
              Python: Powering our analytics and AI models with robust
              capabilities.
            </li>
            <li className = "list-checked-item">
              MongoDB: Managing complex datasets efficiently for scalability.
            </li>
            <li className = "list-checked-item">
              PostgreSQL: Advanced, reliable relational database storage.
            </li>
            <li className = "list-checked-item">
              Docker: Streamlining deployment and ensuring consistent
              environments.
            </li>
            <li className = "list-checked-item">
              Kubernetes: Orchestrating containerized applications for
              scalability and reliability.
            </li>
            <li className = "list-checked-item">
              AWS: Delivering cloud-based reliability, scalability, and global
              reach.
            </li>
          </ul>
          <h4 className = "mt-4">Integrations</h4>
          <ul className = "list-checked list-checked-primary mb-4">
            <li className = "list-checked-item">
              Slack: Keeping teams connected with real-time notifications and
              updates.
            </li>
            <li className = "list-checked-item">
              Jira: Facilitating efficient project tracking and task management.
            </li>
            <li className = "list-checked-item">
              Dropbox: Supporting seamless file storage and sharing.
            </li>
            <li className = "list-checked-item">
              Google APIs: Enhancing our applications with advanced AI and data
              processing.
            </li>
            <li className = "list-checked-item">
              GitHub: Ensuring smooth collaboration and version control.
            </li>
          </ul>
          <h4 className = "mt-4">AI Tools</h4>
          <ul className = "list-checked list-checked-primary mb-0">
            <li className = "list-checked-item">
              TensorFlow: Driving machine learning models with precision and
              scalability.
            </li>
            <li className = "list-checked-item">
              PyTorch: Providing flexibility for cutting-edge AI development.
            </li>
            <li className = "list-checked-item">
              Grafana: Monitoring and visualizing application performance in
              real time.
            </li>
          </ul>
        </div>
        <div className = "col-md-6 col-lg-5">
          <div className = "row justify-content-center">
            {/* Flask */}
            <div className = "col-4 mb-4">
              <div className = "d-block avatar avatar-lg rounded-circle shadow-sm p-3 mx-auto">
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/brands/python.svg").default}
                  alt = "Django"
                />
              </div>
            </div>
            {/* Django */}
            <div className = "col-4 mb-4">
              <div className = "d-block avatar avatar-lg rounded-circle shadow-sm p-3 mx-auto">
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/brands/matlab.svg").default}
                  alt = "Django"
                />
              </div>
            </div>
            {/* FastAPI */}
            <div className = "col-4 mb-4">
              <div className = "d-block avatar avatar-lg rounded-circle shadow-sm p-3 mx-auto">
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/brands/julia.svg").default}
                  alt = "FastAPI"
                />
              </div>
            </div>
          </div>
          <div className = "row justify-content-center">
            {/* MongoDB */}
            <div className = "col-4 mb-4">
              <div className = "d-block avatar avatar-lg rounded-circle shadow-sm p-3 mx-auto">
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/brands/mongodb.svg").default}
                  alt = "MongoDB"
                  style = {{ height: 40, width: 40 }}
                />
              </div>
            </div>
            {/* AWS */}
            <div className = "col-4 mb-4">
              <div className = "d-block avatar avatar-lg rounded-circle shadow-sm p-3 mx-auto">
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/brands/aws.svg").default}
                  alt = "AWS"
                />
              </div>
            </div>
            {/* Kubernetes */}
            <div className = "col-4 mb-4">
              <div className = "d-block avatar avatar-lg rounded-circle shadow-sm p-3 mx-auto">
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/brands/kubernetes.svg").default}
                  alt = "Kubernetes"
                />
              </div>
            </div>
          </div>
          <div className = "row justify-content-center">
            {/* TensorFlow */}
            <div className = "col-4 mb-4">
              <div className = "d-block avatar avatar-lg rounded-circle shadow-sm p-3 mx-auto">
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/brands/tensorflow.svg").default}
                  alt = "TensorFlow"
                />
              </div>
            </div>
            {/* PyTorch */}
            <div className = "col-4 mb-4">
              <div className = "d-block avatar avatar-lg rounded-circle shadow-sm p-3 mx-auto">
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/brands/github.svg").default}
                  alt = "PyTorch"
                />
              </div>
            </div>
            {/* Grafana */}
            <div className = "col-4 mb-4">
              <div className = "d-block avatar avatar-lg rounded-circle shadow-sm p-3 mx-auto">
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/brands/postgresql.svg").default}
                  alt = "Grafana"
                />
              </div>
            </div>
            <div className = "col-4 mb-4">
              <div className = "d-block avatar avatar-lg rounded-circle shadow-sm p-3 mx-auto">
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/brands/flask-wordmark-light.svg").default}
                  alt = "Grafana"
                />
              </div>
            </div>
            <div className = "col-4 mb-4">
              <div className = "d-block avatar avatar-lg rounded-circle shadow-sm p-3 mx-auto">
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/brands/django.svg").default}
                  alt = "Grafana"
                />
              </div>
            </div>
            <div className = "col-4 mb-4">
              <div className = "d-block avatar avatar-lg rounded-circle shadow-sm p-3 mx-auto">
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/brands/fastapi.svg").default}
                  alt = "Grafana"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Technology Ecosystem */}
    {/* Team */}
    <div className = "container content-space-b-1 content-space-b-lg-3">
      {/* Heading */}
      <div className = "w-lg-65 text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10">
        <h2>Our Team</h2>
      </div>
      {/* End Heading */}
      <div className = "row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div className = "col mb-10">
          {/* Team */}
          <div className = "w-sm-65 text-center mx-auto">
            <img
              className = "img-fluid"
              src = {require("../static/img/350x350/aswin2.jpg")}
              alt = "Image Description"
            />
            <h5 className = "mb-1">Aswin Nambiar</h5>
            <span className = "d-block">Co-Founder / CEO</span>
          </div>
          {/* End Team */}
        </div>
        {/* End Col */}
        <div className = "col mb-10">
          {/* Team */}
          <div className = "w-sm-65 text-center mx-auto">
            <img
              className = "img-fluid"
              src = {require("../static/img/350x350/sachin3.png")}
              alt = "Image Description"
            />
            <h5 className = "mb-1">Sachin Muralee Krishna</h5>
            <span className = "d-block">Co-Founder/Senior analyst</span>
          </div>
          {/* End Team */}
        </div>
        {/* End Col */}
        <div className = "col mb-10">
          {/* Team */}
          <div className = "w-sm-65 text-center mx-auto">
            <img
              className = "img-fluid"
              src = {require("../static/img/350x350/arjun2.jpg")}
              alt = "Image Description"
            />
            <h5 className = "mb-1">Arjun C Unni</h5>
            <span className = "d-block">Co-founder/Product manager</span>
          </div>
          {/* End Team */}
        </div>
        {/* End Col */}
        {/* End Team */}
      </div>
      {/* End Col */}
    </div>
    {/* End Row */}
    {/* End Team */}
    {/* CTA */}
    {/* <div className="container content-space-b-2 content-space-b-lg-3">
      <div className="w-lg-75 text-center mx-lg-auto">
        <figure className="mb-7">
          <img
            className="img-fluid"
            src={require("../static/svg/illustrations/plane.svg").defaut}
            alt="Image Description"
          />
        </figure>
        <h2 className="mb-7">
          We're always looking for talented freelancers to work with. Get in
          touch if you think you’d be a good fit!
        </h2>
        <a className="link link-pointer" href="{{ url_for('careers') }}">
          View all open positions
        </a>
      </div>
    </div> */}
    {/* CTA */}
    <div className = "container content-space-b-2 content-space-b-lg-3">
      <div className = "w-lg-75 text-center mx-lg-auto">
        <figure className = "mb-7">
          <img
            className = "img-fluid"
            src = {require("../static/svg/illustrations/plane.svg").default}
            alt = "We're Hiring Illustration"
          />
        </figure>
        <h2 className = "mb-7">
          Join Our Team and Shape the Future of Risk Analytics and
          Sustainability!
        </h2>
        <p className = "mb-5">
          At Sustains.ai, we’re always on the lookout for passionate
          professionals and innovative thinkers. Whether you're a seasoned
          expert or an aspiring talent, we invite you to be part of our journey
          in transforming finance and energy sectors with cutting-edge AI
          solutions.
        </p>
        <a className = "btn btn-primary" href = "/careers">
          Apply now
        </a>
      </div>
    </div>
    {/* End CTA */}
    <Footer />
    {/* ========== END SECONDARYlayouts-components/go-to.html CONTENTS ========== */}
    {/* JS Global Compulsory @@deleteLine:build */}
    {/* JS Implementing Plugins */}
    {/* bundlejs:vendor [@@autopath] */}
    {/* JS Unify */}
    {/* bundlejs:theme [@@autopath] */}
    {/* JS Plugins Init. */}
  </>
)
