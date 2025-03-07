import React from "react";
import { makeStyles } from "tss-react/mui";
import emailjs from '@emailjs/browser';
import { Alert, Button, CircularProgress, Snackbar } from "@mui/material";

const useStyles = makeStyles()(() => ({
  button: {
    fontWeight: "bold",
    height: 50,
    '&:hover': {
      backgroundColor: '#08a247',
  }
  }
}))

// Copyright © 2025 Sustains AI, All Rights Reserved
export const Careers = () => {

    const [file, setFile] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
  
    const resetForm = () => {
      formRef?.current?.reset();
    };
  
    const { classes } = useStyles()

  const convertFileToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader: any = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader?.result?.split(",")[1]);
      reader.onerror = (error: any) => reject(error);
    });
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
    <title>Careers Overview | sustains.ai</title>
    {/* Favicon */}
    <link rel = "shortcut icon" href = "./favicon.ico" />
    {/* Font */}
    <link
      href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
      rel = "stylesheet"
    />
    {/* CSS Implementing Plugins */}
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
    {/* ========== MAIN CONTENT ========== */}
    <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} anchorOrigin={{vertical: "top", horizontal: "right"}}>
      <Alert
        onClose={() => setOpen(false)}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        Your application has been submitted successfully!
      </Alert>
    </Snackbar>
    <main id = "content" role = "main">
      {/* Content */}
      <div className = "container content-space-2 content-space-lg-3">
        {/* Header */}
        <div className = "text-center mb-7">
          <div className = "mb-3">
            <a className = "link link-secondary" href = "/about">
              <i className = "bi-arrow-left small me-1" /> Go back
            </a>
          </div>
          <h1>Apply</h1>
        </div>
        {/* End Header */}
        <div className = "w-lg-75 mx-lg-auto">
          {/* Card */}
          <div className = "card card-shadow">
            <div className = "card-body p-sm-7 p-md-10">
              <form ref={formRef} onSubmit={async (event) => {
                      event.preventDefault();
                      const formData = new FormData(event.currentTarget);
                      const formJson = Object.fromEntries((formData as any).entries());
                      console.log("formJson", formJson, formData)
                      if (!file) {
                        alert("Please select a file");
                        return;
                      }
                      const base64File = await convertFileToBase64(file);

                      const templateParams = {
                        from_name: `${formJson.careersApplyFormNameFirstName} ${formJson.careersApplyFormNameLastName}`,
                        to_name: "Sustains AI",
                        privacy_check: formJson.careersAppleFormPrivacyCheck,
                        phone_no: formJson.careersApplyFormNamePhone,
                        message: formJson.careersApplyFormAdditionalInfoName,
                        from_email: formJson.careersApplyFormNameWorkEmail,
                        linkedin_url: formJson.careersApplyFormlinkedinURLName,
                      }
                      if (!Object.values(formJson).every(value => value.trim() !== "")) {
                        return
                      }
                      setLoading(true)
                      emailjs.init("zUPHeeSaWEDRpf-z4")
                      emailjs.send("sustains_ai_gmail", "sustains_ai_careers", templateParams).then(() => {
                        setOpen(true)
                        setLoading(false)
                        resetForm()
                      }).catch(() => setLoading(false))
                  }}>
                <div className = "mb-5">
                  <h4 className = "card-title">1. Personal details</h4>
                  <p className = "card-text">
                    We'll need these details in order to be able to contact you.
                  </p>
                </div>
                <div className = "row">
                  <div className = "col-sm-6">
                    {/* Form */}
                    <div className = "mb-4">
                      <label
                        className = "form-label"
                        htmlFor = "careersApplyFormFirstName"
                      >
                        First name
                      </label>
                      <input
                        type = "text"
                        className = "form-control form-control-lg"
                        name = "careersApplyFormNameFirstName"
                        id = "careersApplyFormFirstName"
                        placeholder = "First name"
                        aria-label = "First name"
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
                        htmlFor = "careersApplyFormLasttName"
                      >
                        Last name
                      </label>
                      <input
                        type = "text"
                        className = "form-control form-control-lg"
                        name = "careersApplyFormNameLastName"
                        id = "careersApplyFormLasttName"
                        placeholder = "Last name"
                        aria-label = "Last name"
                      />
                    </div>
                    {/* End Form */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
                {/* Form */}
                <div className = "mb-4">
                  <label className = "form-label" htmlFor = "careersApplyFormEmail">
                    Email address
                  </label>
                  <input
                    type = "email"
                    className = "form-control form-control-lg"
                    name = "careersApplyFormNameWorkEmail"
                    id = "careersApplyFormEmail"
                    placeholder = "email@site.com"
                    aria-label = "email@site.com"
                  />
                </div>
                {/* End Form */}
                {/* Form */}
                <div className = "mb-4">
                  <label className = "form-label" htmlFor = "careersApplyFormPhone">
                    Phone
                  </label>
                  <input
                    type = "text"
                    className = "form-control form-control-lg"
                    name = "careersApplyFormNamePhone"
                    id = "careersApplyFormPhone"
                    placeholder = "Phone"
                    aria-label = "Phone"
                  />
                </div>
                {/* End Form */}
                {/* Form */}
                <div className = "mb-3">
                  <label
                    className = "form-label"
                    htmlFor = "careersApplyFormlinkedinURL"
                  >
                    LinkedIn URL
                  </label>
                  <input
                    type = "text"
                    className = "form-control"
                    id = "careersApplyFormlinkedinURL"
                    name = "careersApplyFormlinkedinURLName"
                    placeholder = "www.linkedin.com/jacob"
                    aria-label = "www.linkedin.com/jacob"
                  />
                </div>
                {/* End Form */}
                <hr className = "my-md-7" />
                <div className = "mb-5">
                  <h4 className = "card-title">2. Profile</h4>
                </div>
                {/* Form */}
                <div className = "mb-4">
                  <label
                    htmlFor = "careersApplyFormFile"
                    className = "js-file-attach form-label"
                    data-hs-file-attach-options = '{"textTarget": "[for=\"careersApplyFormFile\"]"}'
                  >
                    Résumé / CV
                  </label>
                  <input
                    className = "form-control"
                    type = "file"
                    id = "careersApplyFormFile"
                    accept=".pdf,.doc,.docx"
                    onChange={(e: any) => setFile(e.target.files[0])}
                    required
                  />
                  
                </div>
                {/* End Form */}
                {/* Form */}
                <div className = "mb-3">
                  <label
                    htmlFor = "careersApplyFormAdditionalInfo"
                    className = "form-label"
                  >
                    Personal summary
                  </label>
                  <textarea
                    className = "form-control"
                    name = "careersApplyFormAdditionalInfoName"
                    id = "careersApplyFormAdditionalInfo"
                    placeholder = "Add a cover letter or anything else you want to share."
                    aria-label = "Add a cover letter or anything else you want to share."
                    rows = {5}
                    defaultValue = {""}
                  />
                </div>
                {/* End Form */}
                <hr className = "my-md-7" />
                <div className = "mb-5">
                  <h4 className = "card-title">3. Submit application</h4>
                  <p>
                    In order to contact you with future jobs that you may be
                    interested in, we need to store your personal data.
                  </p>
                  <p>
                    If you are happy for us to do so please click the checkbox
                    below.
                  </p>
                </div>
                {/* Check */}
                <div className = "form-check mb-4">
                  <input
                    type = "checkbox"
                    className = "form-check-input"
                    id = "careersAppleFormPrivacyCheck"
                    name = "careersAppleFormPrivacyCheck"
                  />
                  <label
                    className = "form-check-label"
                    htmlFor = "careersAppleFormPrivacyCheck"
                  >
                    Allow us to process your personal information.
                  </label>
                </div>
                {/* End Check */}
                <div className = "d-grid">
                      <Button
                        className = {classes.button}
                        type="submit"
                        variant="contained"
                        size="large"
                        color="primary"
                      >
                        {loading ? <CircularProgress size={24} color="inherit" /> : "Send Inquiry"}
                      </Button>
                  </div>

              </form>
            </div>
          </div>
          {/* End Card */}
        </div>
      </div>
      {/* End Content */}
    </main>
    {/* ========== END MAIN CONTENT ========== */}
    {/* ========== SECONDARY CONTENTS ========== */}
    {/* Go To */}
    {/* ========== END SECONDARY CONTENTS ========== */}
    {/* JS Global Compulsory  */}
    {/* JS Implementing Plugins */}
    {/* JS Unify */}
    {/* JS Plugins Init. */}
  </>
)
}