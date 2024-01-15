import { Avatar } from "@mui/material";
import logo from "../../assets/Logo.png";

function Footer() {
  return (
    <div id="footer" className="h-[30vh] w-[100vw] bg-light p-[2vw] px-[5vw] row justify-around ">
      <div className="col w-1/3  h-full">
        <div className="row items-center h-1/4 borders">
          <img
            src={logo}
            className="h-full w-1/6 object-contain grayscale borders"
            alt="start"
          />
          <p className="text-brown">Walter Ayiego</p>
        </div>
        <p className="text-sm font-light">
          Crafting innovative web and mobile experiences from idea to deployment
        </p>
      </div>
      <div className="col borders h-full">
        <p className="text-xl aladin">About</p>
      </div>
      <div className="col borders h-full">
        <p className="text-xl aladin">Product</p>
      </div>
      <div className="col borders h-full">
        <p className="text-xl aladin">Contact</p>
        <p className="text-sm font-light">+254 712 345 678</p>
        <p className="text-sm font-light"></p>
      </div>
    </div>
  );
}

export default Footer;
