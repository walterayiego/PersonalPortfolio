import Aboutme from "../features/aboutme/Aboutme";
import Home from "../features/home/Home";
import Portfolio from "../features/portfolio/Portfolio";
import Skills from "../features/skills/Skills";
import Testimonials from "../features/testimonials/Testimonials";
import NavLinks from "../components/NavLinks";


const width = window.innerWidth;
const height = window.innerHeight;

const LinkNames = [
  {
    name: "HOME",
    to: "home",
    component: () => (
      <Home>
        {/* <div className="h-[2vh]" /> */}
        <ul className="col h-1/2 py-5 justify-between ">{NavLinks()}</ul>
      </Home>
    ),
  },
  { name: "ABOUT", to: "aboutme", component: Aboutme },
  { name: "SKILLS", to: "skills", component: Skills },
  { name: "PORTFOLIO", to: "portfolio", component: Portfolio },
  { name: "TESTIMONIALS", to: "testimonials", component: Testimonials },
];

export { LinkNames, width, height };
