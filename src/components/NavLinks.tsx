import HighLightedLink from "./HighLightedLink";

const NavLinks = ({classes}) => (
    <ul className={classes}>
      <HighLightedLink to="/aboutme">ABOUT ME</HighLightedLink>
      <HighLightedLink to="/skills">SKILLS</HighLightedLink>
      <HighLightedLink to="/portfolio">PORTFOLIO</HighLightedLink>
      <HighLightedLink to="/testimonials">TESTIMONIALS</HighLightedLink>
    </ul>
  );

  export default NavLinks;