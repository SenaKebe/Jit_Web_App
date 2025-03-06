import React from "react";
import "tailwindcss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Register from "./components/Contact_Us/Contact_Us";
import Banner2 from "./components/Banner/Banner2";

function App() {
  return (
    <main className="overflow-x-hidden bg-white text-black">
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <Banner />
      <Register />
      <Banner2 />
    </main>
  );
}

export default App;
