import React from "react";
import "./style.css";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Spacing from "./components/Spacing.js";
import Companies from "./components/Companies.js";
import Advantages from "./components/Advantages.js";
import Services from "./components/Services.js";
import Courses from "./components/Courses.js";
import Members from "./components/Members.js";
import Tricks from "./components/Tricks.js";
export default function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Spacing />
      <Companies />
      <Spacing />
      <Advantages />
      <Spacing />
      <Services />
      <Spacing />
      <Courses />
      <Spacing />
      <Members />
      <Spacing />
      <Tricks />
      <Spacing />
      <Footer />
    </div>
  );
}
