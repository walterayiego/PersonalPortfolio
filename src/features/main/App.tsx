import NavBar from "../sections/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Element, animateScroll as scroll, scrollSpy } from "react-scroll";
import { LinkNames, width } from "../../constants/Constants";
import NavLinks from "../../components/NavLinks";
import Footer from "../sections/Footer";

function App() {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  const [showScrollbar, setShowScrollbar] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const mouseX = event.clientX;

      // Check if the mouse is near the right edge of the screen
      const isNearRightEdge = mouseX > width * 0.98; // Adjust the threshold as needed

      setShowScrollbar(isNearRightEdge);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full app">
      <NavBar>
        <ul className="row justify-between items-center">{NavLinks()}</ul>
      </NavBar>

      {/* SECTIONS */}

      {LinkNames.map((link, index) => {
        return (
          <Element key={index} name={link.to} className="element">
            {link.component()}
          </Element>
        );
      })}

      <div className="h-[30vh] bg-black" />
      <Footer />
    </div>
  );
}

export default App;
