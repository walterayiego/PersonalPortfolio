import NavBar from "../sections/NavBar";
import { Outlet } from "react-router-dom";
import Home from "../home/Home";
import Aboutme from "../aboutme/Aboutme";
import Contacts from "../contacts/Contacts";
import Testimonials from "../testimonials/Testimonials";
import Skills from "../skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import { useEffect, useRef } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const LinkNames = [
  { name: "HOME", to: "home", component: null },
  { name: "ABOUT", to: "aboutme", component: Aboutme },
  { name: "SKILLS", to: "skills", component: Skills },
  { name: "PORTFOLIO", to: "portfolio", component: Portfolio },
  { name: "TESTIMONIALS", to: "testimonials", component: Testimonials },
];

function App() {
  const AboutmeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const scrollHeight = window.innerHeight * 0.01;
    const options = {
      duration: 500,
      smooth: true,
    };

    scroll.scrollMore(scrollHeight, options);
  }, []);

  // Function to handle the activation of a link.
  const handleSetActive = (to: string) => {
    console.log(to);
  };

  const NavLinks = () => {
    return LinkNames.map((link, index) => (
      <Link
        key={index}
        activeClass="active"
        className="cursor-pointer font-mono text-lg text-slate-500 uppercase"
        to={link.to}
        spy={true}
        smooth={true}
        // offset={-offset}
        duration={500}
        onSetActive={handleSetActive}
      >
        {link.name}
      </Link>
    ));
  };

  const offset = window.innerHeight * 0.01;

  return (
    <div className="relative">
      <NavBar>
        <ul className="row justify-between items-center">{NavLinks()}</ul>
      </NavBar>

      <Element name="home" className="h-screen">
        <Home>
          <ul className="col h-1/2 py-5 justify-between ">
            {NavLinks()}
          </ul>
        </Home>
      </Element>

      {LinkNames.map((link, index) => {
        if (link.component === null) {
          console.log("null");
          return null;
        }
        return (
          <Element key={index} name={link.to} className="element">
            {link.component()}
          </Element>
        );
      })}
    </div>
  );
}

export default App;
