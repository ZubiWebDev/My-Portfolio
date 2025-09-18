// import React from 'react'
// import Home from './pages/home'

// function App() {
//   return (
//     <>
//     <Home/>
//     </>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/projects";
import Testimonials from "./components/ui/home-components/Testimonials";
import Contacts from "./pages/Contacts";
import Navbar from "./components/shared/Navbar";
import Workexperience from "./pages/Workexperience"; // ✅ Import add karo

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-experience" element={<Workexperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

