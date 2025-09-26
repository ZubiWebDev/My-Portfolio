import React from "react";

import Testimonials from "../components/ui/home-components/Testimonials";
import Contacts from "./Contacts";
import Projects from "./projects";
import Intro from "../components/ui/home-components/Intro";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Skills from "./Skills";

function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default Home;
