import { useDispatch } from "react-redux"
import { scheduleMeetingDialog } from "../../../redux/actions"

// Copyright © 2025 Sustains AI, All Rights Reserved
export const Footer = () => {

  const dispatch = useDispatch()
  
  return (
  <>
    {/* <footer className="bg-dark">
      <div className="container">
        <div className="row align-items-center pt-8 pb-4">
          <div className="col-md mb-5 mb-md-0">
            <h2 className="fw-medium text-white-70 mb-0">
              Join the thriving
              <br />
              <span className="fw-bold text-white">sustains.ai</span> business
            </h2>
          </div>
          <div className="col-md-auto">
            <div className="d-grid d-sm-flex gap-3">
              <a className="btn btn-primary" href="#">
                Request demo
              </a>
              <a className="btn btn-ghost-light btn-pointer" href="#">
                Sign up free
              </a>
            </div>
          </div>
        </div>
        <div className="border-bottom border-white-10">
          <div className="row py-6">
            <div className="col-6 col-sm-4 col-lg mb-7 mb-lg-0">
              <span className="text-cap text-white">Resources</span>#
              <ul className="list-unstyled list-py-1 mb-0">
                <li>
                  <a className="link link-light link-light-75" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="link link-light link-light-75" href="#">
                    Guidance
                  </a>
                </li>
                <li>
                  <a className="link link-light link-light-75" href="#">
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a className="link link-light link-light-75" href="#">
                    Support <i className="bi-box-arrow-up-right ms-1" />
                  </a>
                </li>
                <li>
                  <a className="link link-light link-light-75" href="#">
                    API
                  </a>
                </li>
                <li>
                  <a className="link link-light link-light-75" href="#">
                    Packages
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-4 col-lg mb-7 mb-lg-0">
              <span className="text-cap text-white">Company</span>
              <ul className="list-unstyled list-py-1 mb-0">
                <li>
                  <a className="link link-light link-light-75" href="#">
                    Belonging <i className="bi-box-arrow-up-right ms-1" />
                  </a>
                </li>
                <li>
                  <a className="link link-light link-light-75" href="#">
                    Company
                  </a>
                </li>
                <li>
                  <a className="link link-light link-light-75" href="#">
                    Careers
                  </a>
                  <span className="fs-6 fw-bold text-primary">
                    — We're hiring
                  </span>
                </li>
                <li>
                  <a className="link link-light link-light-75" href="#">
                    Contacts
                  </a>
                </li>
                <li>
                  <a className="link link-light link-light-75" href="#">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-4 col-lg mb-7 mb-sm-0">
              <span className="text-cap text-white">Platform</span>
              <ul className="list-unstyled list-py-1 mb-0">
                <li>
                  <a className="link link-light link-light-75" href="#">
                    Web
                  </a>
                </li>

                <li>
                  <a className="link link-light link-light-75" href="#">
                    Mobile
                  </a>
                </li>

                <li>
                  <a className="link link-light link-light-75" href="#">
                    iOS
                  </a>
                </li>

                <li>
                  <a className="link link-light link-light-75" href="#">
                    Android
                  </a>
                </li>

                <li>
                  <a className="link link-light link-light-75" href="#">
                    Figma Importing
                  </a>
                </li>

              </ul>

            </div>
            <div className="col-6 col-sm-4 col-lg mb-7 mb-sm-0">
              <span className="text-cap text-white">Legal</span>
              <ul className="list-unstyled list-py-1 mb-5">

                <li>
                  <a className="link link-light link-light-75" href="#">
                    Terms of use
                  </a>
                </li>

                <li>
                  <a className="link link-light link-light-75" href="#">
                    Privacy policy <i className="bi-box-arrow-up-right ms-1" />
                  </a>
                </li>

              </ul>
                <span className="text-cap text-white">Docs</span>

              <ul className="list-unstyled list-py-1 mb-0">

                <li>
                  <a className="link link-light link-light-75" href="#">
                    Documentation
                  </a>
                </li>

                <li>
                  <a className="link link-light link-light-75" href="#">
                    Snippets
                  </a>
                </li>

              </ul>

            </div>
            <div className="col-6 col-sm-4 col-lg">

              <span className="text-cap text-white">Follow us</span>#

              <ul className="list-unstyled list-py-2 mb-0">

                <li>
                  <a className="link link-light link-light-75" href="#">

                    <div className="d-flex">

                      <div className="flex-shrink-0">

                        <i className="bi-envelope-open-fill" />

                      </div>

                      <div className="flex-grow-1 ms-2">

                       <span>Subscribe by email</span>

                      </div>

                    </div>

                  </a>
                </li>

                <li>
                  <a className="link link-light link-light-75" href="#">

                    <div className="d-flex">

                      <div className="flex-shrink-0">

                      <i className="bi-facebook" />

                      </div>

                      <div className="flex-grow-1 ms-2">

                      <span>Facebook</span>

                      </div>

                    </div>

                  </a>
                </li>

                <li>
                  <a className="link link-light link-light-75" href="#">

                    <div className="d-flex">

                      <div className="flex-shrink-0">

                       <i className="bi-linkedin" />

                      </div>

                      <div className="flex-grow-1 ms-2">

                      <span>Linkedin</span>

                      </div>

                    </div>

                  </a>
                </li>

                <li>
                  <a className="link link-light link-light-75" href="#">

                    <div className="d-flex">

                      <div className="flex-shrink-0">

                      <i className="bi-twitter" />

                      </div>

                      <div className="flex-grow-1 ms-2">

                      <span>Twitter</span>

                      </div>

                    </div>

                  </a>
                </li>

                <li>
                  <a className="link link-light link-light-75" href="#">

                    <div className="d-flex">

                      <div className="flex-shrink-0">

                       <i className="bi-slack" />

                      </div>

                      <div className="flex-grow-1 ms-2">
                        <span>Slack</span>
                      </div>

                      </div>

                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>

        <div className="row align-items-md-center py-6">

          <div className="col-md mb-3 mb-md-0">

            <ul className="list-inline list-px-2 mb-0">

              <li className="list-inline-item">
                <a className="link link-light link-light-75" href="#">
                  Privacy and Policy
                </a>
              </li>

              <li className="list-inline-item">
                <a className="link link-light link-light-75" href="#">
                  Terms
                </a>
              </li>

              <li className="list-inline-item">
                <a className="link link-light link-light-75" href="#">
                  Status
                </a>
              </li>

              <li className="list-inline-item">

                <div className="btn-group">

                  <a
                    className="link link-light link-light-75"
                    href="javascript:;"
                    id="selectLanguage"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >

                    <span className="d-flex align-items-center">

                      <img
                        className="avatar avatar-xss avatar-circle me-2"
                        src="{{ url_for('static', filename='vendor/flag-icon-css/flags/1x1/in.svg') }}"
                        alt="Image description"
                        width={16}
                      />
                        <span>English</span>

                    </span>

                  </a>

                  <div className="dropdown-menu">

                    <a
                      className="dropdown-item d-flex align-items-center active"
                      href="#"
                    >

                      <img
                        className="avatar avatar-xss avatar-circle me-2"
                        src="{{ url_for('static', filename='vendor/flag-icon-css/flags/1x1/in.svg') }}"
                        alt="Image description"
                        width={16}
                      />

                   <span>English</span>

                    </a>

                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >

                      <img
                        className="avatar avatar-xss avatar-circle me-2"
                        src="{{ url_for('static', filename='vendor/flag-icon-css/flags/1x1/de.svg') }}"
                        alt="Image description"
                        width={16}
                      />

                      <span>Deutsch</span>

                    </a>

                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >

                      <img
                        className="avatar avatar-xss avatar-circle me-2"
                        src="{{ url_for('static', filename='vendor/flag-icon-css/flags/1x1/es.svg') }}"
                        alt="Image description"
                        width={16}
                      />

                     <span>Español</span>

                    </a>

                  </div>

                </div>

              </li>

            </ul>

          </div>

          <div className="col-md-auto">

         <p className="fs-5 text-white-70 mb-0">© sustains.ai 2024</p>

          </div>

        </div>

      </div>

    </footer> */}

    <footer className = "bg-dark">
      <div className = "container">
        {/* Call-to-Action */}
        <div className = "row align-items-center pt-4 pb-3">
          <div className = "col-md">
            <h2 className = "fw-medium text-white-70 mb-0">
              {"Join the thriving "}
              <span className = "fw-bold text-white">sustains.ai</span> business
            </h2>
          </div>
          <div className = "col-md-auto">
            <a className = "btn btn-primary" onClick={() => {
              dispatch(scheduleMeetingDialog({isVisible: true}))
            }}>
              Request demo
            </a>
          </div>
        </div>
        {/* End Call-to-Action */}
        {/* Footer Links */}
        <div className = "row py-4">
          <div className = "col-sm-6">
            <span className = "text-cap text-white">Company</span>
            <ul className = "list-unstyled list-py-1 mb-0">
              <li>
                <a className = "link link-light link-light-75" href = "/about">
                  About Us
                </a>
              </li>
              <li>
                <a className = "link link-light link-light-75" href = "/careers">
                  Careers
                </a>
              </li>
              <li>
                <a className = "link link-light link-light-75" href = "/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className = "col-sm-6">
            <span className = "text-cap text-white">Legal</span>
            <ul className = "list-unstyled list-py-1 mb-0">
              <li>
                <a className = "link link-light link-light-75" href = "/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className = "link link-light link-light-75" href = "/terms-of-use">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* End Footer Links */}
        {/* Bottom Bar */}
        <div className = "row align-items-center py-3">
          <div className = "col-md">
            <p className = "fs-5 text-white-70 mb-0">© sustains.ai 2024</p>
          </div>
          <div className = "col-md-auto">
            <ul className = "list-inline mb-0">
              <li className = "list-inline-item">
                <a className = "link link-light link-light-75" href = "https://www.linkedin.com/company/sustains-ai/">
                  Facebook
                </a>
              </li>
              <li className = "list-inline-item">
                <a className = "link link-light link-light-75" href = "https://www.linkedin.com/company/sustains-ai/">
                  LinkedIn
                </a>
              </li>
              <li className = "list-inline-item">
                <a className = "link link-light link-light-75" href = "https://www.linkedin.com/company/sustains-ai/">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* End Bottom Bar */}
      </div>
    </footer>
  </>
)
}