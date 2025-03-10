// Copyright © 2025 Sustains AI, All Rights Reserved
export const PageCareersRoleOverview = () => (
  <>
    {/* Required Meta Tags Always Come First */}
    <meta charSet = "utf-8" />
    <meta
      name = "viewport"
      content = "width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/* Title */}
    <title>Careers: Role Overview | sustains.ai</title>
    {/* Favicon */}
    <link rel = "shortcut icon" href = "./favicon.ico" />
    {/* Font */}
    <link
      href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
      rel = "stylesheet"
    />
    {/* CSS Unify Template */}
    <link rel = "stylesheet" href = "./assets/css/theme.min.css" />
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
    {"{"}% include 'partials/navbar/main-absolute-top.html' %{"}"}
    {/* ========== END HEADER ========== */}
    {/* ========== MAIN CONTENT ========== */}
    <main id = "content" role = "main">
      {/* Content */}
      <div className = "container content-space-1 content-space-b-lg-3">
        <div className = "row mb-7">
          <div className = "col-md mb-3 mb-md-0">
            <div className = "mb-3">
              <a
                className = "link link-secondary"
                href = "{{ url_for('page_careers_role') }}"
              >
                <i className = "bi-arrow-left small me-1" /> Back to Listings
              </a>
            </div>
            <h1 className = "mb-0">Product Manager</h1>
          </div>
          {/* End Col */}
          <div className = "col-md-auto align-self-md-end">
            <a className = "btn btn-primary" href = "./page-careers-apply.html">
              Apply now
            </a>
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        <div className = "row">
          <div className = "col-lg-3 order-lg-2 mb-5 mb-lg-0">
            <div id = "stickyBlockStartPoint">
              {/* Card */}
              <div
                className = "js-sticky-block card card-borderless bg-soft-dark"
                data-hs-sticky-block-options = '{"parentSelector": "#stickyBlockStartPoint","targetSelector": "#header","breakpoint": "lg","startPoint": "#stickyBlockStartPoint","endPoint": "#stickyBlockEndPoint","stickyOffsetTop": 20}'
              >
                <div className = "card-body">
                  <dl>
                    <dt>Application Deadline:</dt>
                    <dd>December 31, 2021</dd>
                    <dt>Department:</dt>
                    <dd>Product</dd>
                    <dt>Employment Type:</dt>
                    <dd>Full Time</dd>
                    <dt>Location:</dt>
                    <dd>Remote</dd>
                    <dt>Compensation:</dt>
                    <dd>£80,000 - £100,000 / year</dd>
                    <dt>Reporting To:</dt>
                    <dd>CEO</dd>
                  </dl>
                  <hr />
                  <h6>This role's hiring manager:</h6>
                  <div className = "mb-3">
                    <img
                      className = "avatar avatar-xl avatar-circle"
                      src = "./assets/img/160x160/img10.jpg"
                      alt = "Image Description"
                    />
                  </div>
                  <h6>Louise Donadieu</h6>
                  <a className = "link link-secondary link-pointer" href = "#">
                    View Christina's Profile
                  </a>
                </div>
              </div>
              {/* End Card */}
            </div>
          </div>
          {/* End Col */}
          <div className = "col-lg-9">
            <div className = "mb-7">
              <p>Hello 👋</p>
              <p>I'm Christina-CEO here at Unify.</p>
              <p>
                We're a high-growth, bootstrapped HR-tech start-up building and
                selling software that helps in-house talent acquisition teams
                attract, hire and retain the best talent.
              </p>
              <p>
                We launched in 2018, and have since grown to hundreds of
                customers, millions in revenue, consistent triple-digit
                year-on-year growth, a team of ~20 incredible people, and a
                robust and beautiful product used by growing organisations every
                day, all without taking on a penny of outside capital.
              </p>
              <p>
                The journey so far has been awesome - and we're just getting
                started - but these first signs of meaningful scale have meant
                our team are spread thin, our customer base (and their
                expectations of our product) has broadened, and it's harder to
                manage the competing priorities of our various stakeholders
                (customers, internal teams, etc.).
              </p>
            </div>
            <div className = "mb-7">
              <h4>It's time for our first product manager.</h4>
              <p>
                We need someone to own product end-to-end, and (more
                importantly), we need someone with a set of skills and
                experience that I (CEO and de-facto product manager to date)
                don't have! The role will report directly into me, but you'll
                work closely with every leader in the business (Customer
                Success, Engineering, Sales, Marketing, etc.) and in time will
                be responsible for building out a fully-fledged product team.
              </p>
              <p>
                If this sounds like the kind of role that'd be appealing to you,
                read on - but before we dive into the detail, here are a few
                things about Unify that'll either make you say "hell, yeah", or
                "hell, no":
              </p>
              <ul className = "list-py-1">
                <li>
                  We don't mind where you're based, but you'll need to ensure
                  you have at least four hours of timezone overlap with UK to
                  ensure we can work together as productively as possible.
                  You'll need a quiet location to work from with good internet
                  connectivity if you're working remote (we are happy to pay for
                  access to a co-working space if needed).
                </li>
                <li>
                  We're growing fast and this role is key to our growth. You'll
                  be well compensated (as well as a meaningful equity
                  allocation, great benefits and so on), but expectations are
                  high and we all work hard here - we're not the company you
                  join if you're looking to 'slow down'.
                </li>
                <li>
                  We don't work with one particular industry or size of
                  organization, and we sell to all European and US time zones.
                  You'll be expected to quickly understand the challenges faced
                  by all of these different types of organisations, position our
                  product to maximise the value we're adding to these
                  organisations and so on. It's not easy.
                </li>
                <li>
                  We're bootstrapped, profitable, and have no plans to raise
                  external capital at this stage. We have a clearly defined
                  strategy from today through to exit (we'll share this in
                  detail with you through the hiring process) and we believe
                  there are a number of huge benefits to our approach, but being
                  bootstrapped also introduces challenges - our team is smaller
                  than an average VC-backed business at our stage, we each carry
                  more responsibility than would be typical, and we are much
                  more intentional about how we deploy our capital.
                </li>
                <li>
                  Our HQ is in Jersey, UK but we built the company to be
                  remote-first and have a distributed remote team across the UK
                  and US.
                </li>
              </ul>
            </div>
            <div className = "mb-7">
              <h4>What you'll be doing</h4>
              <p>
                You'll help us drive the product vision and development of our
                core user experience across our three main personas - in-house
                recruiters, hiring managers and their candidates.
              </p>
              <p>
                To do this, you'll own the complete product lifecycle - defining
                product requirements, working with the team on low-fi
                wireframes, drafting and reviewing specs and partnering with
                engineering, design, marketing, sales and customer success to
                deliver meaningful product improvements for our customers and
                prospects against a planned schedule.
              </p>
              <p>
                The specifics of how you allocate your time, what initiatives /
                projects you prioritise from a product perspective and so on are
                all up for grabs. The team and I all know that we need to
                level-up the way we think about product, and this role is going
                to help us do that. We're looking for someone who can very
                quickly ramp up (i.e. in weeks, not months), develop an
                understanding of our market, product, team, processes and so on
                - once you've done so, basically everything about how we deliver
                product is up for grabs.
              </p>
              <p>
                That said, if you're looking for examples of how we're spending
                our time from a product perspective at the moment, here are a
                few:
              </p>
              <ul className = "list-py-1">
                <li>
                  Understanding our customers, their pain points, and how
                  they're using our product - having direct conversations with
                  customers, reviewing support requests, evaluating survey
                  responses and digging into analytics.
                </li>
                <li>
                  Reviewing our 'product stack' and implementing systems and
                  tools to help streamline and scale product internally - e.g.
                  Linear for issue tracking, Segment for customer data /
                  logging, Abstract for design review and so on.
                </li>
                <li>
                  Defining both a short and long-term roadmap and communicating
                  that effectively both internally and externally.
                </li>
                <li>
                  Implementing better product education (again, both internally
                  and externally) - working with sales and customer success to
                  ensure they're aware of new releases and the ramifications of
                  those releases on our customers and prospects, and working
                  with customer success specifically to ensure we're delivering
                  a fantastic in-product support experience.
                </li>
                <li>
                  Working on our ecosystem - we are strong believers in an open
                  ecosystem - we want to 'stay in our lane' and focus on the ATS
                  market, but have an Open API and a large (and rapidly growing)
                  ecosystem of third-party integration partners that offer
                  best-in-class point solutions across the wider HR Tech
                  landscape. There's work to be done to improve our partner
                  programme, better roadmap integrations, continually improve
                  and better document our Open API, etc.
                </li>
              </ul>
            </div>
            <div className = "mb-7">
              <h4>What you'll need to do well in this role</h4>
              <p>Our ideal candidate will have:</p>
              <ul className = "list-py-1">
                <li>
                  3+ years' work experience in a product lead / product
                  management role at a growth stage SaaS business, ideally in
                  the B2B space.
                </li>
                <li>
                  Much better than average written and verbal communication
                  skills.
                </li>
                <li>
                  Exceptional listening skills and the ability to assess
                  information quickly.
                </li>
                <li>
                  Strong technical acumen, plus solid data and analytical
                  skills. We want someone who has a real instinct and can think
                  strategically, but who can validate / back up their strategy
                  with data.
                </li>
                <li>
                  Strong user experience and design sensibilities. We care a lot
                  about design, and we'll need you to do so as well.
                </li>
                <li>
                  The ability to tell compelling stories that offer valuable
                  perspectives / the ability to evangelise our product both
                  internally and externally.
                </li>
                <li>
                  The ability to communicate effectively with stakeholders of
                  all roles and levels within the business - you'll need to
                  ensure engineering, sales, marketing and customer success are
                  all working in alignment, and build authority and mutual
                  respect with individuals within all of these teams to deliver
                  in the role.
                </li>
                <li>
                  The ability to learn fast and get up to speed with our systems
                  and processes quickly, as well as to help us define and
                  implement new systems and processes as needed.
                </li>
                <li>
                  A desire and ability to perform exceptionally well in an
                  ambiguous and fast-paced start-up environment.
                </li>
              </ul>
              <p>
                Please note that the experience, skills and so on listed above
                are not explicit requirements. They're there to give you a feel
                for the type of person we're looking for - if you have some but
                not all of these, but don't be put off from applying - but be
                prepared to explain how your perspective / experience / skills /
                etc set you apart from our applicants when we speak.
              </p>
            </div>
            <div className = "mb-7">
              <h4>We expect a lot from you, but in return you'll</h4>
              <ul className = "list-py-1">
                <li>
                  Be part of a business where Product is massively respected
                  across the board - whilst we don't yet have a dedicated
                  product team, we made considerable early investments in our
                  brand, build out a design system to prepare us for product
                  scale, have a robust customer success team that engages
                  proactively with our customers to understand their product
                  requirements and so on. We all understand the importance of
                  getting this hire right.
                </li>
                <li>
                  Make a meaningful, measurable contribution to the business and
                  define both the direction of the product itself, as well as
                  the design, structure and execution of our entire product
                  organisation as we scale over the coming years.
                </li>
                <li>
                  Get the support you need to do a great job (MacBook Pro, the
                  software you need, personal development budget, regular 1:1s,
                  etc).
                </li>
                <li>
                  Work extremely closely with high-calibre, experienced and
                  bloody lovely team members from our founders down to our
                  newest team members.
                </li>
                <li>
                  Visit our office in Jersey regularly (if you're working
                  remote).
                </li>
                <li>
                  Have unlimited holidays (minimum requirement of 21 days per
                  year).
                </li>
                <li>
                  Be able to work where and when you want (as long as you're
                  getting the job done).
                </li>
                <li>Get top of the line healthcare for you and your family.</li>
                <li>Get a meaningful equity allocation.</li>
                <li>Grow your career, fast.</li>
              </ul>
              <p>
                We understand that this will be one of many jobs you hold over
                the course of your career, and we work extremely hard to get to
                know you personally, to understand as much as possible about
                your longer-term plans / career trajectory, and to shape your
                experience here at Unify in support of that. If the time comes
                that you want to move onto a new role in the future, you'll have
                loads of experience and a compelling story of how you made a
                huge impact, in a high-growth business, in a competitive market.
              </p>
            </div>
            <div className = "mb-7">
              <h3>About Unify</h3>
              <h4>
                We're changing the way companies hire, and rewriting the rules
                of recruitment.
              </h4>
              <p>
                With our simple, intelligent software and unlimited help from
                our team our customers attract more 'good fit' candidates,
                select from the best, and wow their new hire from the moment
                they say 'yes'.
              </p>
              <p>
                If you're looking for somewhere you can learn quickly, make a
                meaningful impact in a fast-paced business, and grow your
                career, you're in the right place.
              </p>
              <p>
                We'll enable you to do your best work with the tools you need,
                support from the rest of the team, and an expectation that
                you'll challenge that status quo—helping us continually improve
                what we do.
              </p>
            </div>
            <div className = "text-center">
              <a className = "btn btn-primary" href = "{{url_for('careers')}}">
                Apply now
              </a>
            </div>
            {/* End Sticky End Point */}
            <div id = "stickyBlockEndPoint" />
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        <hr className = "my-10" />
        {/* Heading */}
        <div className = "w-lg-65 text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10">
          <h3>How we hire our team</h3>
          <p>
            We like to keep things as simple as possible so we can get to what's
            really important - finding out more about you.
          </p>
        </div>
        {/* End Heading */}
        {/* List Timeline */}
        <ul className = "list-unstyled list-timeline list-py-3">
          <li className = "list-timeline-item">
            {/* Card */}
            <div className = "card card-lg">
              <div className = "card-body">
                {/* Media */}
                <div className = "d-flex">
                  <div className = "flex-shrink-0">
                    <i className = "bi-file-earmark-check text-dark fs-2" />
                  </div>
                  <div className = "flex-grow-1 ms-4">
                    <h4 className = "card-title">
                      <span className = "fs-2 text-primary">01.</span> Application
                      and recruiter screen
                    </h4>
                    <p className = "card-text">
                      The start of our application process is the same for all
                      of our roles. We want to learn a bit about you through a
                      casual conversation.
                    </p>
                  </div>
                </div>
                {/* End Media */}
              </div>
            </div>
            {/* End Card */}
          </li>
          <li className = "list-timeline-item ms-auto">
            {/* Card */}
            <div className = "card card-lg">
              <div className = "card-body">
                {/* Media */}
                <div className = "d-flex">
                  <div className = "flex-shrink-0">
                    <i className = "bi-clock-history text-dark fs-2" />
                  </div>
                  <div className = "flex-grow-1 ms-4">
                    <h4 className = "card-title">
                      <span className = "fs-2 text-primary">02.</span> First round
                      interview
                    </h4>
                    <p className = "card-text">
                      We love connecting with people who believe they'll make a
                      difference. At this stage, an interview will help us both
                      decide whether the interest is mutual.
                    </p>
                  </div>
                </div>
                {/* End Media */}
              </div>
            </div>
            {/* End Card */}
          </li>
          <li className = "list-timeline-item">
            {/* Card */}
            <div className = "card card-lg">
              <div className = "card-body">
                {/* Media */}
                <div className = "d-flex">
                  <div className = "flex-shrink-0">
                    <i className = "bi-pencil-square text-dark fs-2" />
                  </div>
                  <div className = "flex-grow-1 ms-4">
                    <h4 className = "card-title">
                      <span className = "fs-2 text-primary">03.</span> Task or
                      challenge
                    </h4>
                    <p className = "card-text">
                      Now it's time to apply your thinking to some real life
                      situations. Whether it's completing a technical test,
                      engaging in a role play or preparing a presentation to
                      address a challenge - we want to see you in action.
                    </p>
                  </div>
                </div>
                {/* End Media */}
              </div>
            </div>
            {/* End Card */}
          </li>
          <li className = "list-timeline-item ms-auto">
            {/* Card */}
            <div className = "card card-lg">
              <div className = "card-body">
                {/* Media */}
                <div className = "d-flex">
                  <div className = "flex-shrink-0">
                    <i className = "bi-hand-thumbs-up text-dark fs-2" />
                  </div>
                  <div className = "flex-grow-1 ms-4">
                    <h4 className = "card-title">
                      <span className = "fs-2 text-primary">04.</span> Final
                      interview and offer
                    </h4>
                    <p className = "card-text">
                      Once you've met the team, and we've gotten to know each
                      other, it's time for us to both decide whether we're a
                      match.
                    </p>
                  </div>
                </div>
                {/* End Media */}
              </div>
            </div>
            {/* End Card */}
          </li>
        </ul>
        {/* End List Timeline */}
        <hr className = "my-10" />
        <div className = "w-lg-65 text-center mx-lg-auto">
          <p>
            Don't worry if you don't see any roles you want to apply for now.
            Register your interest to be notified of any roles that come along
            that meet your criteria.
          </p>
          <a className = "btn btn-primary" href = "{{ url_for('careers') }}">
            Register your interest
          </a>
        </div>
      </div>
      {/* End Content */}
    </main>
    {/* ========== END MAIN CONTENT ========== */}
    {"{"}% include 'partials/footer/main.html' %{"}"}
    {"{"}% include 'partials/layouts-components/go-to.html' %{"}"}
  </>
)
