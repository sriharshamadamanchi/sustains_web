// Copyright © 2025 Sustains AI, All Rights Reserved
import { Snackbar } from "@mui/material";
import { Footer } from "./partials/footer/Footer";
import { MainAbsoluteTop } from "./partials/navbar/MainAbsoluteTop";
import emailjs from '@emailjs/browser';
import React from "react";

export const Contact = () => {

  const [open, setOpen] = React.useState(false);
  const formRef = React.useRef<any>(null);

  const resetForm = () => {
    formRef?.current?.reset();
  };

  return (
  <>
    {/* Required Meta Tags Always Come First */}
    <meta charSet = "utf-8" />
    <meta
      name = "viewport"
      content = "width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/* Title */}
    <title>
      Contacts | sustains.ai | AI-Driven Risk Analytics for Finance and Energy
    </title>
    {/* Favicon */}
    <link
      rel = "shortcut icon"
      href = "{{ url_for('static',filename='css/favicon.ico') }}"
    />
    {/* Font */}
    {/* CSS Implementing Plugins */}
    {/* bundlecss:vendor [@@autopath] */}
    {/* CSS Unify Template */}
    {/* bundlecss:theme [@@autopath] @@vars.version */}
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
    {/* Contact Form */}
    <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        message="Your inquiry has been submitted successfully!"
      />
    <div className = "overflow-hidden">
      <div className = "container content-space-1 content-space-lg-4">
        <div className = "row">
          <div className = "col-lg-6 mb-10 mb-lg-0">
            <div className = "pe-lg-10">
              <div className = "mb-5">
                <h3>Our office</h3>
              </div>
              <div className = "mb-5">
                <img
                  className = "img-fluid"
                  src = {require("../static/img/580x480/img1.jpg")}
                  alt = "Sustainability-Driven Insights"
                />
              </div>
              {/* Info */}
              <address>
                <span className = "d-block fs-3 fw-bold text-dark mb-2">
                  Bengaluru:
                </span>
                #23, CJ Ventatadas road
                <br />
                Padmanabhanagar
                <br />
                Bengaluru
              </address>
              {/* End Info */}
            </div>
          </div>
          {/* End Col */}
          <div className = "col-lg-6">
            <div className = "position-relative">
              {/* Card */}
              <div className = "card card-lg">
                {/* Card Body */}
                <div className = "card-body">
                  <h4 className = "mb-4">Fill in the form</h4>
                  <form ref={formRef} onSubmit={(event) => {
                      event.preventDefault();
                      const formData = new FormData(event.currentTarget);
                      const formJson = Object.fromEntries((formData as any).entries());
                      const templateParams = {
                        from_name: `${formJson.contactsFormNameFirstName} ${formJson.contactsFormNameLastName}`,
                        to_name: "Sustains AI",
                        company: formJson.contactsFormNameCompany,
                        company_website: formJson.contactsFormNameCompanyWebsite,
                        message: formJson.contactsFormDetails,
                        from_email: formJson.contactsFormNameWorkEmail
                      }
                      emailjs.init("zUPHeeSaWEDRpf-z4")
                      emailjs.send("sustains_ai_gmail", "sustains_ai_email_temp", templateParams).then(() => {
                        setOpen(true)
                        resetForm()
                      })
                  }}>
                    <div className = "row">
                      <div className = "col-sm-6 mb-4 mb-sm-0">
                        {/* Form */}
                        <div className = "mb-4">
                          <label
                            className = "form-label"
                            htmlFor = "contactsFormFirstName"
                          >
                            First name
                          </label>
                          <input
                            type = "text"
                            className = "form-control"
                            name = "contactsFormNameFirstName"
                            id = "contactsFormFirstName"
                            placeholder = "Jacob"
                            aria-label = "Jacob"
                          />
                        </div>
                        {/* End Form */}
                      </div>
                      {/* End Col */}
                      <div className = "col-sm-6">
                        {/* Form */}
                        <div className = "mb-4">
                          <label
                            className = "form-label"
                            htmlFor = "contactsFormLasttName"
                          >
                            Last name
                          </label>
                          <input
                            type = "text"
                            className = "form-control"
                            name = "contactsFormNameLastName"
                            id = "contactsFormLasttName"
                            placeholder = "Williams"
                            aria-label = "Williams"
                          />
                        </div>
                        {/* End Form */}
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                    <div className = "row">
                      <div className = "col-sm-6 mb-4 mb-sm-0">
                        {/* Form */}
                        <div className = "mb-4">
                          <label
                            className = "form-label"
                            htmlFor = "contactsFormCompany"
                          >
                            Company
                          </label>
                          <input
                            type = "text"
                            className = "form-control"
                            name = "contactsFormNameCompany"
                            id = "contactsFormCompany"
                            placeholder = "Htmlstream"
                            aria-label = "Htmlstream"
                          />
                        </div>
                        {/* End Form */}
                      </div>
                      {/* End Col */}
                      <div className = "col-sm-6">
                        {/* Form */}
                        <div className = "mb-4">
                          <label
                            className = "form-label"
                            htmlFor = "contactsFormCompanyWebsite"
                          >
                            Company website
                          </label>
                          <input
                            type = "text"
                            className = "form-control"
                            name = "contactsFormNameCompanyWebsite"
                            id = "contactsFormCompanyWebsite"
                            placeholder = "htmlstream.com"
                            aria-label = "htmlstream.com"
                          />
                        </div>
                        {/* End Form */}
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                    {/* Form */}
                    <div className = "mb-4">
                      <label
                        className = "form-label"
                        htmlFor = "contactsFormWorkEmail"
                      >
                        Work email
                      </label>
                      <input
                        type = "text"
                        className = "form-control"
                        name = "contactsFormNameWorkEmail"
                        id = "contactsFormWorkEmail"
                        placeholder = "email@site.com"
                        aria-label = "email@site.com"
                      />
                    </div>
                    {/* End Form */}
                    {/* Form */}
                    <div className = "mb-4">
                      <label
                        className = "form-label"
                        htmlFor = "contactsFormDetails"
                      >
                        Message
                      </label>
                      <textarea
                        className = "form-control"
                        name = "contactsFormDetails"
                        id = "contactsFormDetails"
                        placeholder = "How can we help you?"
                        aria-label = "Describe your query or requirements"
                        rows = {4}
                        defaultValue = {""}
                      />
                    </div>
                    {/* End Form */}
                    <div className = "d-grid">
                      <button type = "submit" className = "btn btn-primary btn-lg">
                        Send inquiry
                      </button>
                    </div>
                  </form>
                </div>
                {/* End Card Body */}
              </div>
              {/* End Card */}
              {/* SVG Shape */}
              <figure
                className = "position-absolute bottom-0 end-0 zi-n1 d-none d-md-block mb-n10"
                style = {{ width: "15rem", marginRight: "-8rem" }}
              >
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/illustrations/grid-grey.svg").default}
                  alt = "Contact page-2"
                />
              </figure>
              {/* End SVG Shape */}
              {/* SVG Shape */}
              <figure
                className = "position-absolute bottom-0 end-0 d-none d-md-block me-n5 mb-n5"
                style = {{ width: "10rem" }}
              >
                <img
                  className = "img-fluid"
                  src = {require("../static/svg/illustrations/plane.svg").default}
                  alt = "Contact page-2"
                />
              </figure>
              {/* End SVG Shape */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
    </div>
    {/* End Contact Form */}
    {/* ========== END MAIN CONTENT ========== */}
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
}