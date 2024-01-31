import React from "react";
import "./landingpage.scss";
import Hero from "../Hero/Hero.jsx";
import Products from "../Products/Products.jsx";
import Features from "../Features/Features.jsx";
import Global from "../Global Opportunities/Global.jsx";
import Assurance from "../Assurance/Assurance.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";

function LandingPage() {
  return (
    <div>
      <Hero />
      <Products />
      <Features />
      <Global />
      <Assurance />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
