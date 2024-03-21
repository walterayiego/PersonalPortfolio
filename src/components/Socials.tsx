import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const socialItem = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/wavu-labs-bba2a2253",
    icon: <LinkedInIcon color="secondary" />,
  },
  {
    name: "GitHub",
    link: "https://www.github.com/walterayiego",
    icon: <GitHubIcon color="secondary" />,
  },
  {
    name: "Email",
    link: "mailto:walterayiego@gmail.com",
    icon: <EmailIcon color="secondary" />,
  },
  {
    name: "Phone",
    link: "tel:+254715280146",
    icon: <PhoneIcon color="secondary" />,
  },
  // {
  //   name: "Discord",
  //   link: "https://discord.gg/DaWkYWFP",
  //   icon: <FaDiscord />,
  // },
];

function Socials({ styles }: { styles: string }) {
  return (
    <div
      className={`grid grid-flow-col items-start justify-start py-4 ${styles}`}
    >
      {socialItem.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="socials"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default Socials;
