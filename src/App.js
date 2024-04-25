import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "./pages/Home";
import QuotePage from "./pages/Quote";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/Navbar.js";
import Restaurants from "./pages/restaurant";
import TastyRecipes from "./pages/Food";
import Contact from "./components/Contact.js";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/restaurant" element={<Restaurants />} />
          <Route path="/food" element={<TastyRecipes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
