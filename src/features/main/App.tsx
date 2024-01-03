import NavBar from "../sections/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  Element,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { LinkNames } from "../../constants/Constants";
import NavLinks from "../../components/NavLinks";
import Footer from "../sections/Footer";

function App() {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div className="relative w-full ">
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
