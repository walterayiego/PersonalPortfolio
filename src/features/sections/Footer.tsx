import { Avatar } from "@mui/material";
import logo from "../../assets/Logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <div
      id="footer"
      className="h-[40vh] w-[100vw] bg-light p-[2vw] px-[5vw] row justify-around "
    >
      <div className="col w-1/3  h-full">
        <div className="row items-center h-1/4 ">
          <img
            src={logo}
            className="h-full w-1/6 object-contain grayscale "
            alt="start"
          />
          <p className="text-brown">Walter Ayiego</p>
        </div>
        <p className="text-sm font-light">
          Crafting innovative web and mobile experiences from idea to deployment
        </p>
      </div>
      <div className="col  h-full">
        <p className="text-xl aladin">About</p>
        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Skills</li>
        </ul>
      </div>
      <div className="col  h-full">
        <p className="text-xl aladin">Product</p>
        <ul>
          <li>Web Development</li>
          <li>Mobile Development</li>
          <li>UI/UX Design</li>
          <li>Product Strategy</li>
        </ul>
      </div>
      <div className="col  h-full ">
        <p className="text-xl aladin">Contact Info</p>
        <p className="text-sm font-light"></p>
        <div className="row m-2 space-x-3">
          <LocationOnIcon />
          <p className="text-sm font-light">  Nakuru</p>
        </div>
        <div className="row m-2 space-x-3">
          <PhoneIcon />
          <p className="text-sm font-light">0700000000</p>
        </div>
        <div className="row m-2 space-x-3">
          <EmailIcon />
          <p className="text-sm font-light">walterayiego@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
