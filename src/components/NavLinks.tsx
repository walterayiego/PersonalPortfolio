import { LinkNames } from "../constants/Constants";
import { ContextData } from "../apis/ContextProvider";

const NavLinks = () => {
  const { fragment }: any = ContextData();

  return LinkNames.map((link, index) => (
    <a
      key={index}
      href={`#${link.to}`}
      className={fragment === link.to ? "active" : "inactive"}
    >
      {link.name}
    </a>
  ));
};

export default NavLinks;
