import NavBar from "../sections/NavBar";
import { Outlet } from "react-router-dom";
import Home from "../home/Home";
import Aboutme from "../aboutme/Aboutme";
import Contacts from "../contacts/Contacts";
import Testimonials from "../testimonials/Testimonials";
import Skills from "../skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import { useRef } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const LinkNames = [
  { name: "ABOUT ME", to: "aboutme", component: Aboutme },
  { name: "CONTACTS", to: "contact", component: Contacts },
  { name: "TESTIMONIALS", to: "testimonials", component: Testimonials },
  { name: "SKILLS", to: "skills", component: Skills },
];

function App() {
  const AboutmeRef = useRef<HTMLElement>(null);

  const scrollTo = () => {
    if (AboutmeRef.current) {
      AboutmeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };

  const offset = window.innerHeight * 0.055;
  console.log(offset);

  return (
    <div className="relative">
      <NavBar>
        <ul className="row justify-between items-center">
          {LinkNames.map((link, index) => (
            <Link
              key={index}
              activeClass="active"
              to={link.to}
              spy={true}
              smooth={true}
              // offset={-offset}
              duration={500}
              onSetActive={handleSetActive}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </NavBar>

      <Element name="home" className="">
        <Home />
      </Element>

      {LinkNames.map((link, index) => (
        <Element key={index} name={link.to} className="element">
          {link.component()}
        </Element>
      ))}

      <Contacts />
      <Testimonials />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
