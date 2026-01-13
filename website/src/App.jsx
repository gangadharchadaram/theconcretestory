import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AnimatePresence } from "framer-motion";
import ChatBot from "./components/ChatBot";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactPage from "./components/pages/ContactPage";

import PageTransition from "./components/PageTransition";
import TopLoader from "./components/TopLoader";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      {/* Top progress bar */}
      <TopLoader />

      {/* Sliding page transition */}
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname} />
      </AnimatePresence>

      {/* Page routes */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <Router>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <ChatBot />

        <Toaster />
      </div>
    </Router>
  );
}

export default App;
