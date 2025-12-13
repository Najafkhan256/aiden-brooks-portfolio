import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Archive from "./pages/archive/Archive";
import Information from "./pages/information/Information";
import SampleProject from "./pages/sampleproject/SampleProject";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  const pageTitles = {
    "/": "Home | Aiden Brooks",
    "/projects": "Projects | Aiden Brooks",
    "/archive": "Archive | Aiden Brooks",
    "/information": "Information | Aiden Brooks",
    "/sample-project": "Sample Project | Aiden Brooks",
  };

  useEffect(() => {
    const currentTitle = pageTitles[location.pathname] || "Aiden Brooks";
    document.title = currentTitle;

    if (location.pathname !== "/archive") {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 700);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/information" element={<Information />} />
          <Route path="/sample-project" element={<SampleProject />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
