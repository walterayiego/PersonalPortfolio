import { Link, animateScroll as scroll } from "react-scroll";
import { LinkNames } from "../constants/Constants";

const NavLinks = () => {
  
  const handleSetActive = (to: string) => {
    console.log(to);
  };
  const offset = window.innerHeight * 0.10;

  return LinkNames.map((link, index) => (
    <Link
      key={index}
      activeClass="active"
      className="cursor-pointer font-mono text-lg text-slate-500 uppercase"
      to={link.to}
      spy={true}
      smooth={true}
      offset={-offset}
      duration={500}
      onSetActive={handleSetActive}
    >
      {link.name}
    </Link>
  ));
};

export default NavLinks;
