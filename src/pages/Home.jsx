import React from "react";

import About from "./Workexperience";
import Testimonials from "../components/ui/home-components/Testimonials";
import Contacts from "./Contacts";
import Projects from "./projects";
import Intro from "../components/ui/home-components/Intro";
import Navbar from "../components/shared/Navbar";
import Overview from "../components/ui/home-components/Overview";
import Footer from "../components/shared/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Overview />
      <About />
      <Projects />
      <Testimonials />
      <Contacts />
      <Footer/>
    </>
  );
}

export default Home;
