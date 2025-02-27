import React from "react";
import "tailwindcss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <main className="overflow-x-hidden bg-white text-black">
      {/* <Navbar /> */}
      <Hero />
    </main>
  );
}

export default App;
