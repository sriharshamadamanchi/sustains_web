// Copyright © 2025 Sustains AI, All Rights Reserved
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./NotFound/NotFound"
import "./static/css/style.css?v=1";
import "./static/css/bootstrap-icons.css";
import "./static/css/hs-mega-menu.css";
import "./static/css/swiper-bundle.min.css";
import "./static/css/theme.min.css";
import "./static/css/snippets.min.css";
import "./static/css/docs.min.css";
import "./static/vendor/bootstrap-icons/font/bootstrap-icons.css";
import "./static/vendor/hs-mega-menu/dist/hs-mega-menu.min.css";
import "./static/vendor/swiper/swiper-bundle.min.css";
import { Home } from "./templates";
import { About } from "./templates/About";
import { Careers } from "./templates/Careers";
import { Contact } from "./templates/Contact";
import { Products } from "./templates/Products";

const Dashboard = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/products' element = {<Products />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/careers' element = {<Careers />} />
        <Route path = '/contact' element = {<Contact />} />
        <Route path = '*' element = {<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Dashboard
