import ComputerIcon from "@mui/icons-material/Computer";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import WebIcon from "@mui/icons-material/Web";
import WebhookIcon from "@mui/icons-material/Webhook";

import Services from "../features/services/Services";
import Home from "../features/home/Home";
import Portfolio from "../features/portfolio/Portfolio";
import Skills from "../features/skills/Skills";
import Testimonials from "../features/testimonials/Testimonials";
import NavLinks from "../components/NavLinks";

import kladz from "../assets/kladz.png";
import dishi from "../assets/dishi.png";
import ryze from "../assets/ryze.png";
import wavu from "../assets/wavu.png";

const width = window.innerWidth;
const height = window.innerHeight;

const servicesData = [
  {
    name: "Application development",
    details:
      "Crafting visually appealing and functional web & mobile apps for your business.",
    icon: <WebIcon color="primary" />,
  },
  {
    name: "Software Maintenance",
    details:
      "Keep your software running smoothly with ongoing maintenance and support. ",
    icon: <ComputerIcon color="primary" />,
  },
  {
    name: "Custom software solutions",
    details:
      "Tailored software solutions to meet your specific business needs.",
    icon: <CodeIcon color="primary" />,
  },
  {
    name: "Database management",
    details: "Efficient management and optimization of your databases.",
    icon: <StorageIcon color="primary" />,
  },
  {
    name: "Enhance cybersecurity",
    details: "Ensure the security and integrity of your digital assets.",
    icon: <SecurityIcon color="primary" />,
  },

  {
    name: "API Development",
    details:
      "Integrate your software with powerful APIs and unlock new functionalities.",
    icon: <WebhookIcon color="primary" />,
  },
];

export default servicesData;

const LinkNames = [
  {
    name: "HOME",
    to: "home",
    component: () => <Home>{NavLinks()}</Home>,
  },
  { name: "SERVICES", to: "services", component: Services },
  { name: "PORTFOLIO", to: "portfolio", component: Portfolio },
  // { name: "SKILLS", to: "skills", component: Skills },
  // { name: "TESTIMONIALS", to: "testimonials", component: Testimonials },
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
const threshold = { threshold: 1 };

export { LinkNames, width, height, Companies, threshold, servicesData };
