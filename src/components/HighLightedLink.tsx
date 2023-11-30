import { Link, useMatch } from "react-router-dom";

interface HighLightedLinkProps {
  to: string;
  children: React.ReactNode;
}

const HighLightedLink = ({ to, children }: HighLightedLinkProps) => {
  const match = useMatch(to);
  return (
    <li className={Boolean(match) ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default HighLightedLink;