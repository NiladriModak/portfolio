import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-400 selection:text-cyan-900 min-h-screen">
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="container mx-auto py-8 overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Achievements />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
