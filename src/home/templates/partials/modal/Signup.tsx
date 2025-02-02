// Copyright © 2025 Sustains AI, All Rights Reserved
export const Signup = () => (
  <div
    className = "modal fade"
    id = "signupModal"
    tabIndex = {-1}
    role = "dialog"
    aria-hidden = "true"
  >
    <div className = "modal-dialog modal-dialog-centered" role = "document">
      <div className = "modal-content">
        {/* Header */}
        <div className = "modal-close">
          <button
            type = "button"
            className = "btn-close"
            data-bs-dismiss = "modal"
            aria-label = "Close"
          />
        </div>
        {/* End Header */}
        {/* Body */}
        <div className = "modal-body p-sm-5">
          {/* Log in */}
          <div
            id = "signupModalFormLogin"
            style = {{ display: "none", opacity: 0 }}
          >
            {/* Heading */}
            <div className = "text-center mb-7">
              <h4>Log in</h4>
              <p>
                Don't have an account yet?
                <a
                  className = "js-animation-link"
                  href = "javascript:;"
                  role = "button"
                  data-hs-show-animation-options = '{
                 "targetSelector": "#signupModalFormSignup",
                 "groupName": "idForm"
               }'
                >
                  Sign up here
                </a>
              </p>
            </div>
            {/* End Heading */}
            <div className = "d-grid gap-2">
              <a className = "btn btn-white btn-lg" href = "#">
                <span className = "d-flex justify-content-center align-items-center">
                  <img
                    className = "avatar avatar-xss me-2"
                    src = "@@autopath/assets/svg/brands/google-icon.svg"
                    alt = "Image Description"
                  />
                  Log in with Google
                </span>
              </a>
              <a
                className = "js-animation-link btn btn-primary btn-lg"
                href = "#"
                data-hs-show-animation-options = '{
               "targetSelector": "#signupModalFormLoginWithEmail",
               "groupName": "idForm"
             }'
              >
                Log in with Email
              </a>
            </div>
          </div>
          {/* End Log in */}
          {/* Log in with Modal */}
          <div
            id = "signupModalFormLoginWithEmail"
            style = {{ display: "none", opacity: 0 }}
          >
            {/* Heading */}
            <div className = "text-center mb-7">
              <h4>Log in</h4>
              <p>
                Don't have an account yet?
                <a
                  className = "js-animation-link"
                  href = "javascript:;"
                  role = "button"
                  data-hs-show-animation-options = '{
                 "targetSelector": "#signupModalFormSignup",
                 "groupName": "idForm"
               }'
                >
                  Sign up here
                </a>
              </p>
            </div>
            {/* End Heading */}
            <form className = "js-validate needs-validation" noValidate = {true}>
              {/* Form */}
              <div className = "mb-3">
                <label
                  className = "form-label"
                  htmlFor = "signupModalFormLoginEmail"
                >
                  Your email
                </label>
                <input
                  type = "email"
                  className = "form-control form-control-lg"
                  name = "email"
                  id = "signupModalFormLoginEmail"
                  placeholder = "email@site.com"
                  aria-label = "email@site.com"
                  required = {true}
                />
                <span className = "invalid-feedback">
                  Please enter a valid email address.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className = "mb-3">
                <div className = "d-flex justify-content-between align-items-center">
                  <label
                    className = "form-label"
                    htmlFor = "signupModalFormLoginPassword"
                  >
                    Password
                  </label>
                  <a
                    className = "js-animation-link form-label-link"
                    href = "javascript:;"
                    data-hs-show-animation-options = '{
               "targetSelector": "#signupModalFormResetPassword",
               "groupName": "idForm"
             }'
                  >
                    Forgot Password?
                  </a>
                </div>
                <input
                  type = "password"
                  className = "form-control form-control-lg"
                  name = "password"
                  id = "signupModalFormLoginPassword"
                  placeholder = "8+ characters required"
                  aria-label = "8+ characters required"
                  required = {true}
                  minLength = {8}
                />
                <span className = "invalid-feedback">
                  Please enter a valid password.
                </span>
              </div>
              {/* End Form */}
              <div className = "d-grid mb-3">
                <button type = "submit" className = "btn btn-primary btn-lg">
                  Log in
                </button>
              </div>
            </form>
          </div>
          {/* End Log in with Modal */}
          {/* Sign up */}
          <div id = "signupModalFormSignup">
            {/* Heading */}
            <div className = "text-center mb-7">
              <h4>Sign up</h4>
              <p>
                Already have an account?
                <a
                  className = "js-animation-link"
                  href = "javascript:;"
                  role = "button"
                  data-hs-show-animation-options = '{
                 "targetSelector": "#signupModalFormLogin",
                 "groupName": "idForm"
               }'
                >
                  Log in here
                </a>
              </p>
            </div>
            {/* End Heading */}
            <div className = "d-grid gap-3">
              <a className = "btn btn-white btn-lg" href = "#">
                <span className = "d-flex justify-content-center align-items-center">
                  <img
                    className = "avatar avatar-xss me-2"
                    src = "@@autopath/assets/svg/brands/google-icon.svg"
                    alt = "Image Description"
                  />
                  Sign up with Google
                </span>
              </a>
              <a
                className = "js-animation-link btn btn-primary btn-lg"
                href = "#"
                data-hs-show-animation-options = '{
               "targetSelector": "#signupModalFormSignupWithEmail",
               "groupName": "idForm"
             }'
              >
                Sign up with Email
              </a>
              <div className = "text-center">
                <p className = "small mb-0">
                  By continuing you agree to our{" "}
                  <a href = "@@autopath/page-terms.html">Terms and Conditions</a>
                </p>
              </div>
            </div>
          </div>
          {/* End Sign up */}
          {/* Sign up with Modal */}
          <div
            id = "signupModalFormSignupWithEmail"
            style = {{ display: "none", opacity: 0 }}
          >
            {/* Heading */}
            <div className = "text-center mb-7">
              <h4>Sign up</h4>
              <p>
                Already have an account?
                <a
                  className = "js-animation-link"
                  href = "javascript:;"
                  role = "button"
                  data-hs-show-animation-options = '{
                 "targetSelector": "#signupModalFormLogin",
                 "groupName": "idForm"
               }'
                >
                  Log in here
                </a>
              </p>
            </div>
            {/* End Heading */}
            <form className = "js-validate need-validate" noValidate = {true}>
              {/* Form */}
              <div className = "mb-3">
                <label
                  className = "form-label"
                  htmlFor = "signupModalFormSignupEmail"
                >
                  Your email
                </label>
                <input
                  type = "email"
                  className = "form-control form-control-lg"
                  name = "email"
                  id = "signupModalFormSignupEmail"
                  placeholder = "email@site.com"
                  aria-label = "email@site.com"
                  required = {true}
                />
                <span className = "invalid-feedback">
                  Please enter a valid email address.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className = "mb-3">
                <label
                  className = "form-label"
                  htmlFor = "signupModalFormSignupPassword"
                >
                  Password
                </label>
                <input
                  type = "password"
                  className = "form-control form-control-lg"
                  name = "password"
                  id = "signupModalFormSignupPassword"
                  placeholder = "8+ characters required"
                  aria-label = "8+ characters required"
                  required = {true}
                />
                <span className = "invalid-feedback">
                  Your password is invalid. Please try again.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className = "mb-3" data-hs-validation-validate-class = "">
                <label
                  className = "form-label"
                  htmlFor = "signupModalFormSignupConfirmPassword"
                >
                  Confirm password
                </label>
                <input
                  type = "password"
                  className = "form-control form-control-lg"
                  name = "confirmPassword"
                  id = "signupModalFormSignupConfirmPassword"
                  placeholder = "8+ characters required"
                  aria-label = "8+ characters required"
                  required = {true}
                  data-hs-validation-equal-field = "#signupModalFormSignupPassword"
                />
                <span className = "invalid-feedback">
                  Password does not match the confirm password.
                </span>
              </div>
              {/* End Form */}
              <div className = "d-grid mb-3">
                <button type = "submit" className = "btn btn-primary btn-lg">
                  Sign up
                </button>
              </div>
              <div className = "text-center">
                <p className = "small mb-0">
                  By continuing you agree to our{" "}
                  <a href = "#">Terms and Conditions</a>
                </p>
              </div>
            </form>
          </div>
          {/* End Sign up with Modal */}
          {/* Reset Password */}
          <div
            id = "signupModalFormResetPassword"
            style = {{ display: "none", opacity: 0 }}
          >
            {/* Heading */}
            <div className = "text-center mb-7">
              <h4>Forgot password?</h4>
              <p>
                Enter the email address you used when you joined and we'll send
                you instructions to reset your password.
              </p>
            </div>
            {/* En dHeading */}
            <form className = "js-validate need-validate" noValidate = {false}>
              <div className = "mb-3">
                {/* Form */}
                <div className = "d-flex justify-content-between align-items-center">
                  <label
                    className = "form-label"
                    htmlFor = "signupModalFormResetPasswordEmail"
                    tabIndex = {0}
                  >
                    Your email
                  </label>
                  <a
                    className = "js-animation-link form-label-link"
                    href = "javascript:;"
                    data-hs-show-animation-options = '{
                 "targetSelector": "#signupModalFormLogin",
                 "groupName": "idForm"
               }'
                  >
                    <i className = "bi-chevron-left small me-1" /> Back to Log in
                  </a>
                </div>
                {/* End Form */}
                {/* Form */}
                <div className = "mb-3">
                  <input
                    type = "email"
                    className = "form-control form-control-lg"
                    name = "email"
                    id = "signupModalFormResetPasswordEmail"
                    tabIndex = {1}
                    placeholder = "Enter your email address"
                    aria-label = "Enter your email address"
                    required = {false}
                  />
                  <span className = "invalid-feedback">
                    Please enter a valid email address.
                  </span>
                </div>
                {/* End Form */}
                <div className = "d-grid">
                  <button type = "submit" className = "btn btn-primary btn-lg">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* End Reset Password */}
        </div>
        {/* End Body */}
        {/* Footer */}
        <div className = "modal-footer d-block text-center py-sm-5">
          <small className = "text-cap mb-4">
            Trusted by the world's best teams
          </small>
          <div className = "w-85 mx-auto">
            <div className = "row justify-content-between">
              <div className = "col">
                <img
                  className = "img-fluid"
                  src = "@@autopath/assets/svg/brands/gitlab-gray.svg"
                  alt = "Logo"
                />
              </div>
              {/* End Col */}
              <div className = "col">
                <img
                  className = "img-fluid"
                  src = "@@autopath/assets/svg/brands/fitbit-gray.svg"
                  alt = "Logo"
                />
              </div>
              {/* End Col */}
              <div className = "col">
                <img
                  className = "img-fluid"
                  src = "@@autopath/assets/svg/brands/flow-xo-gray.svg"
                  alt = "Logo"
                />
              </div>
              {/* End Col */}
              <div className = "col">
                <img
                  className = "img-fluid"
                  src = "@@autopath/assets/svg/brands/layar-gray.svg"
                  alt = "Logo"
                />
              </div>
              {/* End Col */}
            </div>
          </div>
          {/* End Row */}
        </div>
        {/* End Footer */}
      </div>
    </div>
  </div>
)
