import Aboutme from "../features/aboutme/Aboutme";
import Home from "../features/home/Home";
import Portfolio from "../features/portfolio/Portfolio";
import Skills from "../features/skills/Skills";
import Testimonials from "../features/testimonials/Testimonials";
import NavLinks from "../components/NavLinks";

import kladz from "../assets/kladz.png";
import dishi from "../assets/dishi.png";
import ryze from "../assets/ryze.png";
import wavu from "../assets/wavu.png";
import topStar from "../../assets/topStar.png";
import star from "../../assets/Star.png";

const width = window.innerWidth;
const height = window.innerHeight;

const LinkNames = [
  {
    name: "HOME",
    to: "home",
    component: () => <Home>{NavLinks()}</Home>,
  },
  { name: "ABOUT", to: "aboutme", component: Aboutme },
  { name: "SKILLS", to: "skills", component: Skills },
  { name: "PORTFOLIO", to: "portfolio", component: Portfolio },
  { name: "TESTIMONIALS", to: "testimonials", component: Testimonials },
];
const Companies = [
  { name: "WavuLabs", logo: wavu, link: "https://wavulabs.org/" },
  {
    name: "Dishi",
    logo: dishi,
    link: "https://play.google.com/store/apps/details?id=com.dishi.app&pli=1",
  },
  { name: "Kladz", logo: kladz, link: "https://kladz.vercel.app/" },
  { name: "RYZE", logo: ryze, link: "https://www.theryze.net/" },
];

export { LinkNames, width, height, Companies };
