import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Offer from "./Offer";
import SecondContent from "./SecondContent";
import Work from "./Work";
import Industries from "./Industries";
import Slider from "./Slider";
import Info from "./Info";
import Footer from "./Footer";

function LandingPage() {
  const [select, setSelect] = useState("home");
  return (
    <>
      <Navbar select={select} setSelect={setSelect} />
      <Hero />
      <Offer />
      <SecondContent />
      <Work />
      <Industries />
      <Slider />
      <Info />
      <Footer />
    </>
  );
}

export default LandingPage;
