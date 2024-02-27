import React, { useState } from "react";
import Header from "./Components/Header";
import MenuOverlay from "./Components/MenuOverlay"
import Hero from "./Components/Hero"
import Pricing from "./Components/Pricing";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Features from "./Components/Features";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="App w-full min-h-screen bg-[#344150] selection:bg-[#46a2a1]">
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      <main className="text-white">
        <Hero navbarOpen={navbarOpen}/>
        <Features />
        <Pricing />
        <Faq navbarOpen={navbarOpen} />
        <Footer navbarOpen={navbarOpen} />
      </main>
    </div>
  );
}

export default App;