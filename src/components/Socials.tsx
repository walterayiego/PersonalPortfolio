import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function Socials({ styles, iconColor }: { styles: string; iconColor?: any }) {
  const socialItem = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/walterayiego",
      icon: <LinkedInIcon color={iconColor ? iconColor : "secondary"} />,
    },
    {
      name: "GitHub",
      link: "https://www.github.com/walterayiego",
      icon: <GitHubIcon color={iconColor ? iconColor : "secondary"} />,
    },
    {
      name: "Email",
      link: "mailto:walterayiego@gmail.com",
      icon: <EmailIcon color={iconColor ? iconColor : "secondary"} />,
    },
    {
      name: "Phone",
      link: "tel:+254715280146",
      icon: <PhoneIcon color={iconColor ? iconColor : "secondary"} />,
    },
    // {
    //   name: "Discord",
    //   link: "https://discord.gg/DaWkYWFP",
    //   icon: <FaDiscord />,
    // },
  ];
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
