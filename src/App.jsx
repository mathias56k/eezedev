import React, { useState } from "react";
import Header from "./Components/Header";
import MenuOverlay from "./Components/MenuOverlay"
import Hero from "./Components/Hero"
import Pricing from "./Components/Pricing";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="App w-full min-h-screen">
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      <main className="text-white mx-auto pt-[4.5rem]">
        <Hero />
        <Pricing />
      </main>
    </div>
  );
}

export default App;