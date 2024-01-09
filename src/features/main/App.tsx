import NavBar from "../sections/NavBar";
import { useEffect, useRef, useState } from "react";
import { Element, animateScroll as scroll, scrollSpy } from "react-scroll";
import { LinkNames, width } from "../../constants/Constants";
import NavLinks from "../../components/NavLinks";
import Footer from "../sections/Footer";

function App() {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div className="relative app">
      <NavBar>
        <ul className="row justify-between items-center space-x-[2vw]">
          {NavLinks()}
        </ul>
      </NavBar>

      {/* SECTIONS */}

      {LinkNames.map((link, index) => {
        return (
          <Element key={index} name={link.to} className="w-screen">
            {link.component()}dsfds
          </Element>
        );
      })}

      <div className="h-[30vh] bg-black" />
      <Footer />
    </div>
  );
}

export default App;
