import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ContactUs from "./pages/ContactUs";
import Navigation from "./pages/Navigation";
import Hello from "./pages/Hello";
import Skills from "./pages/Skills";

const App = () => {
  // State to manage when to show the Hello component
  const [showHello, setShowHello] = useState(true); // Show Hello initially
  const [showContent, setShowContent] = useState(false); // Show main content after 3 seconds

  useEffect(() => {
    // Set a timeout for showing content after Hello disappears
    const helloTimeout = setTimeout(() => {
      setShowHello(false); // Hide Hello after 3 seconds
      setShowContent(true); // Show main content
    }, 3000); // Adjust this time to match your Hello animation duration

    // Cleanup timeout on component unmount
    return () => clearTimeout(helloTimeout);
  }, []);

  return (
    <div>
      {/* Show Hello first */}
      {showHello && <Hello />}

      {/* Show the main content only after showContent is true */}
      {showContent && (
        <div className=" flex flex-col font-ubuntu">
          <div  ><Navbar/></div>
          <div className=" mt-[88px] lg:mt-0 lg:ml-[88px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/navigation" element={<Navigation />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
