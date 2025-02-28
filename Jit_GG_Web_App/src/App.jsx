import React from "react";
import "tailwindcss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <main className="overflow-x-hidden bg-white text-black">
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <Banner />
    </main>
  );
}

export default App;
