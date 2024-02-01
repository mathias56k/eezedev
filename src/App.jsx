import React, { useState } from "react";
import Header from "./Components/Header";
import MenuOverlay from "./Components/MenuOverlay";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="App w-full min-h-screen bg-[#202831]">
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      <main className="text-white mx-auto p-10 pt-24 pb-96">
        <p className="hidden lg:block">
        </p>
      </main>
    </div>
  );
}

export default App;